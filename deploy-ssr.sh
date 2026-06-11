#!/bin/bash
# Deploy the missions.md site to Cloudflare Workers.
# Expects CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID already in the
# environment — credential retrieval happens outside this script.
set -euo pipefail
cd "$(dirname "$0")"
: "${CLOUDFLARE_API_TOKEN:?set CLOUDFLARE_API_TOKEN in your environment}"
: "${CLOUDFLARE_ACCOUNT_ID:?set CLOUDFLARE_ACCOUNT_ID in your environment}"
npx wrangler deploy --config wrangler.json
