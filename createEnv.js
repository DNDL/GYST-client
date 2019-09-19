const fs = require('fs');
fs.writeFileSync('./.env', `API_URL=${process.env.API_URL}\n
AUTH0_CLIENT_ID=${process.env.AUTH0_CLIENT_ID}\n
AUTH0_CALLBACK=${process.env.AUTH0_CALLBACK}\n
AUTH0_DOMAIN=${process.env.AUTH0_DOMAIN}\n`);
