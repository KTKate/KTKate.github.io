// Independent AI systems. Built and run on Kate's own time and hardware, separate from IBM.
export const projects = [
  { id: 'cleo', pid: '1001', name: 'Cleo', mode: 'Autonomous', type: 'Autonomous AI agents',
    description: 'An OpenClaw agent pipeline operated through Telegram. I send a task from my phone, the agents plan and execute it with tools reached through an MCP gateway, and the result comes back in the same chat.',
    components: ['Telegram', 'OpenClaw agents', 'MCP gateway'],
    note: 'Tool access goes through one gateway, so what the agents can reach is controlled in one place.' },
  { id: 'transcription', pid: '1002', name: 'Local transcription', mode: 'Local only', type: 'Local inference',
    description: 'Diarization and transcription for Teams calls, with no audio leaving the machine. Developed on WSL2 and being packaged for macOS.',
    components: ['Call audio', 'Local diarization', 'Speaker-labeled transcript'],
    note: 'The two platforms have different audio capture and packaging requirements, which is most of the remaining work.' },
  { id: 'docupipe', pid: '1003', name: 'DocuPipe', mode: 'Scheduled', type: 'Agent-driven production',
    description: 'An automated YouTube documentary pipeline about financial crimes and seized properties. Agents research, draft, and review each episode, negotiate disagreements between themselves, and hand the result to a CI/CD pipeline that renders and publishes.',
    components: ['Research agents', 'Negotiation loop', 'CI/CD render and publish'],
    note: 'When two agents disagree about a claim, the negotiation loop has to resolve it before the episode renders.' },
  { id: 'prediction-markets', pid: '1004', name: 'Prediction-market bot', mode: 'API', type: 'API integration',
    description: 'An automated trading bot for Kalshi and Polymarket. It reads markets through both APIs, applies rules I wrote, and places orders under the controls I wrote.',
    components: ['Kalshi API', 'Decision rules', 'Polymarket API'],
    note: 'No trading performance or return is claimed. The interesting part is the order controls, not the balance.' },
];
