import type { NextApiRequest, NextApiResponse } from "next";
import DataSerializer from "@/lib/serialization";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { payload } = req.body;

      // Process incoming webhook payload
      const data = DataSerializer.processInput(payload);

      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ error: "Processing failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
