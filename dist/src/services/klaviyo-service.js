"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class KlaviyoService {
    constructor(config) {
        this.apiKey = process.env.KLAVIYO_API_KEY,
            this.companyId = process.env.KLAVIYO_COMPANY_ID;
    }
    async subscribeToKlaviyo(listId, jsonData) {
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
        const response = await fetch(`https://a.klaviyo.com/client/subscriptions?company_id=${this.companyId}`, {
            method: "POST",
            headers: {
                'revision': '2024-10-15',
                'Content-Type': 'application/json',
            },
            body: raw,
        });
        if (!response.ok) {
            return {
                status: response.status + " - " + response.statusText,
                message: 'Subscription Failed',
            };
        }
        return {
            status: response.status + " - " + response.statusText,
            message: 'Subscription Initiated. Please check your mail and confirm the subscription.',
        };
    }
    async unsubscribeFromKlaviyo(listId, data) {
        const apiUrl = 'https://a.klaviyo.com/api/profile-subscription-bulk-delete-jobs';
        const profileAttributes = {
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
                                attributes: profileAttributes
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
        });
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/vnd.api+json',
                revision: '2024-10-15', // Ensure this matches the expected revision date
                'content-type': 'application/vnd.api+json',
                Authorization: `Klaviyo-API-Key ${this.apiKey}`, // Securely use the API key from .env
            },
            body: raw
        };
        console.log('bodydata : ', raw);
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            return {
                status: response.status + " - " + response.statusText,
                message: 'Unable to unsubscribe',
            };
        }
        return {
            status: response.status + " - " + response.statusText,
            message: 'Successfully Unsubscribed',
        };
    }
    async getKlaviyoLists() {
        const response = await fetch("https://a.klaviyo.com/api/lists", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Klaviyo-API-Key ${this.apiKey}`,
                revision: "2024-10-15",
            },
        });
        if (!response.ok) {
            return [];
        }
        try {
            const data = await response.json(); // Parse the JSON response
            return data; // Return the data for further use
        }
        catch (error) {
            return [];
        }
    }
    async getKlaviyoProfiles(listId) {
        const response = await fetch(`https://a.klaviyo.com/api/lists/${listId}/profiles`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Klaviyo-API-Key ${this.apiKey}`,
                revision: "2024-10-15",
            },
        });
        if (!response.ok) {
            return [];
        }
        try {
            const data = await response.json(); // Parse the JSON response
            return data; // Return the data for further use
        }
        catch (error) {
            return [];
        }
    }
}
exports.default = KlaviyoService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2xhdml5by1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3NlcnZpY2VzL2tsYXZpeW8tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVNFLE1BQXFCLGNBQWM7SUFJakMsWUFBWSxNQUE0QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZTtZQUN6QyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDbEQsQ0FBQztJQUVELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFjLEVBQUUsUUFBYTtRQUNwRCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3JCLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsY0FBYztnQkFDcEIsVUFBVSxFQUFFO29CQUNaLE9BQU8sRUFBRTt3QkFDTCxJQUFJLEVBQUU7NEJBQ04sSUFBSSxFQUFFLFNBQVM7NEJBQ2YsVUFBVSxFQUFFLFFBQVE7eUJBQ25CO3FCQUNKO29CQUNELGFBQWEsRUFBRSxpQkFBaUI7aUJBQy9CO2dCQUNELGFBQWEsRUFBRTtvQkFDZixJQUFJLEVBQUU7d0JBQ0YsSUFBSSxFQUFFOzRCQUNGLElBQUksRUFBRSxNQUFNOzRCQUNaLEVBQUUsRUFBRSxNQUFNO3lCQUNiO3FCQUNKO2lCQUNBO2FBQ0o7U0FDRixDQUFDLENBQUM7UUFDUCxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FDMUIseURBQXlELElBQUksQ0FBQyxTQUFTLEVBQUUsRUFDekU7WUFDRSxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDUCxVQUFVLEVBQUMsWUFBWTtnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNyQztZQUNDLElBQUksRUFBRSxHQUFHO1NBQ1YsQ0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FB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