# Luckitto - User Panel

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    npm install --legacy-peer-deps
    npm run dev

## Building locally in development mode

If you wanted to run this site in locally development, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install --legacy-peer-deps
    npm run build
    npm start

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install --legacy-peer-deps
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

## Configuring

If you configure a .env file (just copy [.env.example](https://bitbucket.org/rnssol/coinchance-frontend/src/master/.env.example) over to '.env' and fill in the options) you can configure a range of options.

    NEXT_PUBLIC_API_KEY=<Backend URL>

## Running Jest Tests

Here is a command you should now be able to run tests once `npm test`

## Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript.
