import KlaviyoService from "../../../../../services/klaviyo-service";

// Initialize KlaviyoService with environment variables
const klaviyoService = new KlaviyoService({
  apiKey: process.env.KLAVIYO_API_KEY as string,
  companyId: process.env.KLAVIYO_COMPANY_ID as string,
});

export async function GET(req: Request, res: any): Promise<void> {
  const url = new URL('http://localhost'+req.url);
  const listId = url.pathname.split("/")[3]; // Get the fourth segment of the path
  try {
    const result = await klaviyoService.getKlaviyoProfiles(listId);
    res.status(200).json({
      result
  })
  } catch (error: any) {
    res.status(500).json({ error: error.message , status: 500 });
  }
}
export const AUTHENTICATE = false;