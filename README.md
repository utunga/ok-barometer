# OK Barometer

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?repository-url=https%3A%2F%2Fgithub.com%2Futunga%2Fok-barometer&env=DATABASE_URL,DATABASE_MIGRATE_URL,PRISMA_CLIENT_ENGINE_TYPE&envDescription=Database%20connection%20strings%20your%20app%20depends%20on.%20You%20should%20switch%20back%20to%20the%20Prisma%20Data%20Platform%20to%20figure%20out%20what%20values%20to%20input%20here.)

## Deployment the old fashioned way 

If the magic 'deploy' button (should be above) doesn't work you can try deploying it from command line, this way. 



```
❯ git clone https://github.com/utunga/ok-barometer.git
Cloning into 'ok-barometer'...
```

Spin up a postgres db and create/edit the .env file in prisma folder to set the following properties..

```
DATABASE_URL="postgres://user:pass@c2-1-22-33-129.compute-1.amazonaws.com:5432/gcedfg"

DATABASE_MIGRATE_URL="postgres://user:pass@ec2-1-22-33-129.compute-1.amazonaws.com:5432/abcdef"
```


Deploy using vercel

```
❯ cd ok-barometer
❯ npm i -g vercel@24.2.5-canary.2
❯ vercel
Vercel CLI 24.2.5-canary.2 — https://vercel.com/feedback
..
.. (The first time you run this you will have to setup a (free) Vercel account and authenticate it to your command line)
..
? Set up and deploy “~/dev/scratch/ok-barometer”? [Y/n] y
? Which scope do you want to deploy to? xxx
? What’s your project’s name? test-deploy
? In which directory is your code located? ./
No framework detected. Default Project Settings:
- Build Command: `npm run vercel-build` or `npm run build`
- Output Directory: `public` if it exists, or `.`
- Development Command: None
? Want to override the settings? [y/N] n
🔗  Linked to utunga/test-deploy (created .vercel)
🔍  Inspect: https://vercel.com/utunga/test-deploy/lsdalkjasd [1s]
✅  Production: https://test-deploy-just-testing.vercel.app [copied to clipboard] [43s]
📝  Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
💡  To change the domain or build command, go to https://vercel.com/utunga/test-deploy/settings
```

