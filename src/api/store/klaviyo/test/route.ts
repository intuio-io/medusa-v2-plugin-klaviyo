// src/api/store/klaviyo/test-route.ts

// Sample test route to check if everything is working
export async function GET(req: Request, res: any): Promise<void> {
  res.status(202).json({ message: "Klaviyo test route is working!" , status: 200 })
}
export const AUTHENTICATE = false;
