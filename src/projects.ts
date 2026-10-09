// Side projects. Built and run by Kate on her own time, on her own servers and a cloud VM, separate from her employer.
export const projects = [
  { id: 'cleo', name: 'Cleo', kind: 'Agents, run from Telegram',
    description: 'An OpenClaw agent pipeline I operate from Telegram, running on a cloud VM. I send a task from my phone, the agents plan and execute it with tools reached through one MCP gateway, and the result comes back in the same chat.',
    aside: 'One gateway means one place to see and limit what the agents can reach.' },
  { id: 'transcription', name: 'Local transcription', kind: 'Local inference',
    description: 'Diarization and transcription for Teams calls with no audio leaving the machine it runs on. Developed on WSL2, being packaged for macOS.',
    aside: 'The two platforms capture audio differently, which is most of the remaining work.' },
  { id: 'docupipe', name: 'DocuPipe', kind: 'Agent-made documentaries',
    description: 'An automated YouTube documentary pipeline about financial crimes and seized properties. Agents research, draft, and review each episode and negotiate their disagreements before a CI/CD pipeline renders and publishes it.',
    aside: 'A disagreement between two agents has to be resolved before anything renders.' },
  { id: 'prediction-markets', name: 'Prediction-market bot', kind: 'API integration',
    description: 'An automated trading bot for Kalshi and Polymarket. It reads markets through both APIs, applies rules I wrote, and places orders under the controls I wrote.',
    aside: 'No returns are claimed. The order controls are the interesting part.' },
];
