interface KlaviyoServiceConfig {
    apiKey: string;
    companyId: string;
}
export default class KlaviyoService {
    private apiKey;
    private companyId;
    constructor(config: KlaviyoServiceConfig);
    subscribeToKlaviyo(listId: string, jsonData: any): Promise<any>;
    unsubscribeFromKlaviyo(listId: string, data: any): Promise<any>;
    getKlaviyoLists(): Promise<any>;
    getKlaviyoProfiles(listId: string): Promise<any>;
}
export {};
