# @jsonfirst/implants

**One line of code to make any LLM structured, reliable, and hallucination-resistant — works with ChatGPT, Claude, Gemini, Llama and Mistral.**

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

| Name | Target | Chat | API |
|------|--------|------|-----|
| `universal` | All LLMs | ✓ Paste at start of conversation | Custom Instructions or System Prompt |
| `chatgpt` | ChatGPT | ✓ Paste at start of conversation | Settings → Personalization → Custom Instructions |
| `claude` | Claude | ✓ Paste at start of conversation | Projects → New Project → Set Instructions |
| `gemini` | Gemini | ✓ Paste at start of conversation | Gems → Create a Gem → Instructions |
| `llama` | Llama / Ollama | ✓ Paste at start of conversation | `system_prompt` in API config |
| `mistral` | Mistral / Le Chat | ✓ Paste at start of conversation | System prompt in Le Chat or Mistral API |

> **No configuration needed.** For instant use, paste any implant directly at the start of your conversation. For persistent governance across all sessions, use the API column to inject at the system level.

## What it activates

- **Anti-hallucination** — zero invented names, prices, IDs or metrics
- **Structured prose** — no imposed JSON output, no filler openers
- **Risk guard** — blocks delete/deploy/transfer until explicit confirmation
- **Mode confirmation** — LLM confirms `JSONFIRST_MODE Activé` at startup

## Protocol

- Spec: `JSONFIRST v2.0`
- Reference: [https://jsonfirst.com](https://jsonfirst.com)
- License: MIT
