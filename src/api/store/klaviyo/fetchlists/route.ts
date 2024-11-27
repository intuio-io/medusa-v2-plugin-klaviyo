import KlaviyoService from "../../../../services/klaviyo-service";

// Initialize KlaviyoService with environment variables
const klaviyoService = new KlaviyoService({
  apiKey: process.env.KLAVIYO_API_KEY as string,
  companyId: process.env.KLAVIYO_COMPANY_ID as string,
});

export async function GET(req: Request, res: any): Promise<void> {
  try {
    const result = await klaviyoService.getKlaviyoLists();
    res.status(200).json({
      result
  })
  } catch (error: any) {
    res.status(500).json({ error: error.message , status: 500 });
  }
}