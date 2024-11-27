import KlaviyoService from "../../../../../services/klaviyo-service";

const klaviyoService = new KlaviyoService({
  apiKey: process.env.KLAVIYO_API_KEY as string,
  companyId: process.env.KLAVIYO_COMPANY_ID as string,
});

export async function POST(req: Request, res: any): Promise<void> {
    const url = new URL('http://localhost'+req.url);
    const listId = url.pathname.split("/")[3]; // Get the fourth segment of the path

  try {
    const body:any = req.body; // Get raw text

    // Check if the email property exists
    if (!body.email) {
        res.status(202).json({ error: 'Email is required' , status: 400 });
    }

    const result = await klaviyoService.unsubscribeFromKlaviyo(listId, body);
    res.status(202).json({result});
  } catch (error: any) {
    res.status(500).json({ error: error.message, status: 500 });
  }
}
