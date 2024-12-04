"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUTHENTICATE = void 0;
exports.POST = POST;
const klaviyo_service_1 = __importDefault(require("../../../../../services/klaviyo-service"));
const klaviyoService = new klaviyo_service_1.default({
    apiKey: process.env.KLAVIYO_API_KEY,
    companyId: process.env.KLAVIYO_COMPANY_ID,
});
async function POST(req, res) {
    const url = new URL('http://localhost' + req.url);
    const listId = url.pathname.split("/")[3]; // Get the fourth segment of the path
    try {
        const body = req.body; // Get raw text
        // Check if the email property exists
        if (!body.email) {
            res.status(202).json({ error: 'Email is required', status: 400 });
        }
        const result = await klaviyoService.unsubscribeFromKlaviyo(listId, body);
        res.status(202).json({ result });
    }
    catch (error) {
        res.status(500).json({ error: error.message, status: 500 });
    }
}
exports.AUTHENTICATE = false;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2tsYXZpeW8vW2xpc3RJZF0vdW5zdWJzY3JpYmUvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0Esb0JBaUJDO0FBeEJELDhGQUFxRTtBQUVyRSxNQUFNLGNBQWMsR0FBRyxJQUFJLHlCQUFjLENBQUM7SUFDeEMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBeUI7SUFDN0MsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQTRCO0NBQ3BELENBQUMsQ0FBQztBQUVJLEtBQUssVUFBVSxJQUFJLENBQUMsR0FBWSxFQUFFLEdBQVE7SUFDN0MsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsa0JBQWtCLEdBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMscUNBQXFDO0lBRWxGLElBQUksQ0FBQztRQUNILE1BQU0sSUFBSSxHQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlO1FBRTFDLHFDQUFxQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsbUJBQW1CLEVBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBYyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUFDLE9BQU8sS0FBVSxFQUFFLENBQUM7UUFDcEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0FBQ0gsQ0FBQztBQUNZLFFBQUEsWUFBWSxHQUFHLEtBQUssQ0FBQyJ9