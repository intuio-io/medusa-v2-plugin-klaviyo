"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const klaviyo_service_1 = __importDefault(require("../../../../../services/klaviyo-service"));
// Initialize KlaviyoService with environment variables
const klaviyoService = new klaviyo_service_1.default({
    apiKey: process.env.KLAVIYO_API_KEY,
    companyId: process.env.KLAVIYO_COMPANY_ID,
});
async function POST(req, res) {
    const url = new URL('http://localhost' + req.url);
    const listId = url.pathname.split("/")[3]; // Get the fourth segment of the path
    const body = req.body; // Get raw text
    try {
        const result = await klaviyoService.subscribeToKlaviyo(listId, body);
        res.status(202).json({
            result
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message }, { status: 500 });
    }
}
//# sourceMappingURL=route.js.map