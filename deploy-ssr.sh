#!/bin/bash
set -euo pipefail
cd /home/sivart/workspaces/missions-site
CLOUDFLARE_API_TOKEN=$(op item get 'Cloudflare (missions-site-deploy-agent-sivart)' --vault Operations --fields label=credential --reveal)
export CLOUDFLARE_API_TOKEN
export CLOUDFLARE_ACCOUNT_ID=36d1e0519a783b9a62c251d0adbe9b1f
npx wrangler deploy --config wrangler.json