

// speech.ts
import { NextApiRequest, NextApiResponse } from 'next';
import UnrealSpeechAPI  from "unrealspeech";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
    const speechEnv = String(process.env.UNREAL_SPEECH_API_KEY)
    const { text, voice } = req.body;

    const unrealSpeech = new UnrealSpeechAPI(speechEnv);

    const taskId = await unrealSpeech.createSynthesisTask(text, voice);

    while (true) {
      const status = await unrealSpeech.getSynthesisTaskStatus(taskId);
      if (status.TaskStatus === 'completed') {
        return res.status(200).json({ status });
      } else if (status.TaskStatus === 'failed') {
        throw new Error('Synthesis task failed.');
      }

      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error.message || 'An error occurred' });
  }
}
