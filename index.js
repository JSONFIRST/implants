/**
 * @jsonfirst/implants v1.0.0
 * Official JSONFIRST Protocol implants for LLM governance
 *
 * Usage:
 *   const implants = require('@jsonfirst/implants');
 *   console.log(implants.get('universal'));   // returns the JSON string
 *   console.log(implants.list());             // ['universal','chatgpt','claude','gemini','llama','mistral']
 *
 * Reference: https://jsonfirst.com
 */

const fs = require('fs');
const path = require('path');

const IMPLANTS_DIR = path.join(__dirname, 'implants');

const AVAILABLE = ['universal', 'chatgpt', 'claude', 'gemini', 'llama', 'mistral'];

function list() {
  return AVAILABLE.slice();
}

function get(name) {
  if (!AVAILABLE.includes(name)) {
    throw new Error(`Unknown implant "${name}". Available: ${AVAILABLE.join(', ')}`);
  }
  const filePath = path.join(IMPLANTS_DIR, `${name}.json`);
  return fs.readFileSync(filePath, 'utf8');
}

function getJSON(name) {
  return JSON.parse(get(name));
}

function getAll() {
  return AVAILABLE.reduce((acc, name) => {
    acc[name] = getJSON(name);
    return acc;
  }, {});
}

module.exports = { list, get, getJSON, getAll };
