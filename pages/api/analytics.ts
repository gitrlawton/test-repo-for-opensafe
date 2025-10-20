import type { NextApiRequest, NextApiResponse } from "next";
import { processAnalytics } from "@/lib/analytics";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { event, data } = req.body;

      // Process analytics data
      await processAnalytics(event, data);

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to process analytics" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
