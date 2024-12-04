"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTHENTICATE = void 0;
exports.GET = GET;
const klaviyo_service_1 = __importDefault(require("../../../../services/klaviyo-service"));
// Initialize KlaviyoService with environment variables
const klaviyoService = new klaviyo_service_1.default({
    apiKey: process.env.KLAVIYO_API_KEY,
    companyId: process.env.KLAVIYO_COMPANY_ID,
});
async function GET(req, res) {
    try {
        const result = await klaviyoService.getKlaviyoLists();
        res.status(200).json({
            result
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message, status: 500 });
    }
}
exports.AUTHENTICATE = false;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2tsYXZpeW8vZmV0Y2hsaXN0cy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFRQSxrQkFTQztBQWpCRCwyRkFBa0U7QUFFbEUsdURBQXVEO0FBQ3ZELE1BQU0sY0FBYyxHQUFHLElBQUkseUJBQWMsQ0FBQztJQUN4QyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUF5QjtJQUM3QyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBNEI7Q0FDcEQsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBUTtJQUM5QyxJQUFJLENBQUM7UUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQWMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN0RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNuQixNQUFNO1NBQ1QsQ0FBQyxDQUFBO0lBQ0YsQ0FBQztJQUFDLE9BQU8sS0FBVSxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0FBQ0gsQ0FBQztBQUVZLFFBQUEsWUFBWSxHQUFHLEtBQUssQ0FBQyJ9