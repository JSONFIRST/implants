# @jsonfirst/implants

Official [JSONFIRST Protocol](https://jsonfirst.com) implants — inject structured governance into any LLM.

## Install

```bash
npm install @jsonfirst/implants
```

## Usage

```js
const implants = require('@jsonfirst/implants');

// List available implants
implants.list();
// → ['universal', 'chatgpt', 'claude', 'gemini', 'llama', 'mistral']

// Get raw JSON string (to paste into your LLM)
implants.get('universal');

// Get as parsed object
implants.getJSON('claude');

// Get all implants
implants.getAll();
```

## Available Implants

| Name | Target | Where to inject |
|------|--------|-----------------|
| `universal` | All LLMs | Custom Instructions, System Prompt, or start of conversation |
| `chatgpt` | ChatGPT | Settings → Personalization → Custom Instructions |
| `claude` | Claude | Projects → New Project → Set Instructions |
| `gemini` | Gemini | Gems → Create a Gem → Instructions |
| `llama` | Llama (Ollama / LM Studio) | `system_prompt` in API config |
| `mistral` | Mistral / Le Chat | System prompt in Le Chat or Mistral API |

## What it activates

- **Anti-hallucination** — zero invented names, prices, IDs or metrics
- **Structured prose** — no imposed JSON output, no filler openers
- **Risk guard** — blocks delete/deploy/transfer until explicit confirmation
- **Mode confirmation** — LLM confirms `JSONFIRST_MODE Activé` at startup

## Protocol

- Spec: `JSONFIRST v2.0`
- Reference: [https://jsonfirst.com](https://jsonfirst.com)
- License: MIT
