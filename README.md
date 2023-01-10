# Vite Express Prisma

A full stack web application struture consisting of a Vanilla TypeScript client side using Vite coupled with an Express backend.

<br/>

### Key Technologies:

- Express: A back end web application framework for building RESTful APIs with Node.js.
- Node.js: A cross-platform JavaScript runtime environment.
- Prisma: A Node.js and TypeScript ORM for various database solutions.
- SASS: A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.
- Vite: A rapid development tool for modern web projects.

<br/>

### Requirements:

- Node.js Version 16.x

<br/>

### NPM Scripts:

In the root directory, you can run:

- npm run setup: installs the applications dependencies.
- npm run build: builds the application for production.
- npm run dev: starts the application in development mode.
- npm start: starts the application in production mode.

<br/>

## Usage:

### Environment Variables:

Setup environment variables by creating .env.development file in the server directory and .env file in the server/prisma directory. Examples of these files are provided in their respective locations. Note that in production you would want to set up environment variables on the host server.

<br />

### Setup:

In the root directory use `npm run setup` to install dependencies.

<br/>

### Development:

Use `npm run dev` to run the application in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br/>

### Production:

Use `npm run build` to build the app for production. Then use `npm start` to start the application in production mode.
