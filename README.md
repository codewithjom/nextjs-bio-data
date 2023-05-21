## Getting Started

A simple form for biographical data.

If you are planning to run this in your local machine, make sure you installed `node.js`.

```sh
npm install
npm run dev
```

_Note_: Once the installation is done, this doesn't mean that the app can now collect the data. Make sure that you have created the database for this project. I am using `Prisma` so you don't need to worry just follow the steps below.

### Create a .env file

Create a .env file in your root folder so that `Prisma` can store the data.

```env
DATABASE_URL=mysql://USER:PASSWORD@HOST:PORT/DATABASE
```
