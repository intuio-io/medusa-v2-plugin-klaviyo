"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTHENTICATE = void 0;
exports.GET = GET;
const klaviyo_service_1 = __importDefault(require("../../../../../services/klaviyo-service"));
// Initialize KlaviyoService with environment variables
const klaviyoService = new klaviyo_service_1.default({
    apiKey: process.env.KLAVIYO_API_KEY,
    companyId: process.env.KLAVIYO_COMPANY_ID,
});
async function GET(req, res) {
    const url = new URL('http://localhost' + req.url);
    const listId = url.pathname.split("/")[3]; // Get the fourth segment of the path
    try {
        const result = await klaviyoService.getKlaviyoProfiles(listId);
        res.status(200).json({
            result
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message, status: 500 });
    }
}
exports.AUTHENTICATE = false;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2tsYXZpeW8vW2xpc3RJZF0vZmV0Y2hwcm9maWxlcy9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFRQSxrQkFXQztBQW5CRCw4RkFBcUU7QUFFckUsdURBQXVEO0FBQ3ZELE1BQU0sY0FBYyxHQUFHLElBQUkseUJBQWMsQ0FBQztJQUN4QyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUF5QjtJQUM3QyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBNEI7Q0FDcEQsQ0FBQyxDQUFDO0FBRUksS0FBSyxVQUFVLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBUTtJQUM5QyxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxrQkFBa0IsR0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEQsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7SUFDaEYsSUFBSSxDQUFDO1FBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxjQUFjLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsTUFBTTtTQUNULENBQUMsQ0FBQTtJQUNGLENBQUM7SUFBQyxPQUFPLEtBQVUsRUFBRSxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztBQUNILENBQUM7QUFDWSxRQUFBLFlBQVksR0FBRyxLQUFLLENBQUMifQ==