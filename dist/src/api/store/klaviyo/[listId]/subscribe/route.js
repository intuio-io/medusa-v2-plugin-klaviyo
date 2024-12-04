"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTHENTICATE = void 0;
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
exports.AUTHENTICATE = false;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2tsYXZpeW8vW2xpc3RJZF0vc3Vic2NyaWJlL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVFBLG9CQWFDO0FBckJELDhGQUFxRTtBQUVyRSx1REFBdUQ7QUFDdkQsTUFBTSxjQUFjLEdBQUcsSUFBSSx5QkFBYyxDQUFDO0lBQ3hDLE1BQU0sRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQXlCO0lBQzdDLFNBQVMsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUE0QjtDQUNwRCxDQUFDLENBQUM7QUFFSSxLQUFLLFVBQVUsSUFBSSxDQUFDLEdBQVksRUFBRSxHQUFRO0lBQy9DLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLGtCQUFrQixHQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoRCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLHFDQUFxQztJQUVoRixNQUFNLElBQUksR0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZTtJQUMxQyxJQUFJLENBQUM7UUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDbkIsTUFBTTtTQUNULENBQUMsQ0FBQTtJQUNGLENBQUM7SUFBQyxPQUFPLEtBQVUsRUFBRSxDQUFDO1FBQ3BCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7QUFDSCxDQUFDO0FBQ1ksUUFBQSxZQUFZLEdBQUcsS0FBSyxDQUFDIn0=