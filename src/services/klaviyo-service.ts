interface KlaviyoServiceConfig {
    apiKey: string;
    companyId: string;
  }
  
  interface UnsubscribeData {
    email: string;
  }
  
  export default class KlaviyoService {
    private apiKey: string;
    private companyId: string;
  
    constructor(config: KlaviyoServiceConfig) {
      this.apiKey = config.apiKey;
      this.companyId = config.companyId;
    }
  
    async subscribeToKlaviyo(listId: string, jsonData: any): Promise<any> {
      const raw = JSON.stringify({
            data: {
                type: "subscription",
                attributes: {
                profile: {
                    data: {
                    type: "profile",
                    attributes: jsonData
                    }
                },
                custom_source: "Homepage Signup"
                },
                relationships: {
                list: {
                    data: {
                        type: "list",
                        id: listId
                    }
                }
                }
            }
          });
      const response = await fetch(
        `https://a.klaviyo.com/client/subscriptions?company_id=${this.companyId}`,
        {
          method: "POST",
          headers: {
            'revision':'2024-10-15',
            'Content-Type': 'application/json',
        },
          body: raw,
        }
      );

      if (!response.ok) {
        return {
            status: response.status + " - "+response.statusText ,
            message: 'Subscription Failed',
        };
      }
  
        return {
            status: response.status + " - "+response.statusText ,
            message: 'Subscription Initiated. Please check your mail and confirm the subscription.',
        };
    }
  
    async unsubscribeFromKlaviyo(listId: string, data: any): Promise<any> {
      
      const apiUrl = 'https://a.klaviyo.com/api/profile-subscription-bulk-delete-jobs';

      const profileAttributes:any = {
        email: data.email
    };

    // Add phone_number only if it's not null or empty
    if (data.phone_number) {
        profileAttributes.phone_number = data.phone_number;
    }

      const raw = JSON.stringify({
        data: {
          type: "profile-subscription-bulk-delete-job",
          attributes: {
            profiles: {
              data: [
                {
                  type: "profile",
                  attributes:profileAttributes
                },
              ],
            },
          },
          relationships: {
            list: {
              data: {
                type: "list",
                id: listId,
              },
            },
          },
        },
      })

      const options:any = {
        method: 'POST',
        headers: {
            accept: 'application/vnd.api+json',
            revision: '2024-10-15', // Ensure this matches the expected revision date
            'content-type': 'application/vnd.api+json',
            Authorization: `Klaviyo-API-Key ${this.apiKey}`,  // Securely use the API key from .env
        },
            body: raw
        };  

      console.log('bodydata : ',raw)  

      const response = await fetch(apiUrl, options);
  
      if (!response.ok) {
        return {
            status: response.status + " - "+response.statusText ,
            message: 'Unable to unsubscribe',
        };
      }
  
        return {
            status: response.status + " - "+response.statusText ,
            message: 'Successfully Unsubscribed',
        };
    }


    async getKlaviyoLists():Promise<any>{
        const response = await fetch("https://a.klaviyo.com/api/lists", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Klaviyo-API-Key ${this.apiKey}`,
              revision: "2024-10-15",
            },
          })
        if (!response.ok) {
            return [];
        }
    
        try {
            const data = await response.json(); // Parse the JSON response
            return data; // Return the data for further use
          } catch (error) {
            return [];
          }
    }

    async getKlaviyoProfiles(listId:string):Promise<any>{
        const response = await fetch(`https://a.klaviyo.com/api/lists/${listId}/profiles`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Klaviyo-API-Key ${this.apiKey}`,
              revision: "2024-10-15",
            },
          })
        if (!response.ok) {
            return [];
        }
    
        try {
            const data = await response.json(); // Parse the JSON response
            return data; // Return the data for further use
          } catch (error) {
            return [];
          }
    }
  }
  