# Marley-Spoon-Demo
The website is [hosted on vercel](https://marley-spoon.vercel.app/ "hosted on vercel") and take advantage of [Nextjs Incremental Static Generation](https://vercel.com/docs/next.js/incremental-static-regeneration "Nextjs Incremental Static Generation").

## How to run
- Insure you already have Nodejs installed.
- Create a `.env.local` file at the root of the project.
- Add the following values to the `.env.local` file
	- `NEXT_PUBLIC_SPACE_ID={SPACE_ID}`
	- `NEXT_PUBLIC_ACCESS_TOKEN={ACCESS_TOKEN}`
- Run `npm install`
- Run `npm run build`
- Run `npm start`

Additionally you can run tests using `npm run test`
