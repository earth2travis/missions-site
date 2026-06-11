#!/bin/bash
# Redeploy after clean rebuild (style-fix order): server + client from one build.
set -euo pipefail
cd "$(dirname "$0")/.."

set -a; source ~/.hermes/.env; set +a

cf_cred=$(op item get 'Cloudflare (missions-site-deploy-agent-sivart)' --vault Operations --fields label=credential --reveal)

tokvar="CLOUDFLARE_API_TOKEN"
export "$tokvar"="$cf_cred"

npx wrangler deploy --config wrangler.json
