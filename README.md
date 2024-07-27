# Boilerplate Express API (CommonJS)

This is a boilerplate project for building an API using Express.js with CommonJS module syntax. It is designed to help you get started quickly with a structured and scalable Express.js application.

## Project Structure

```plaintext
boilerplate-express-api-common/
├── node_modules/
├── src/
│   ├── app/
│   ├── controllers/
│   ├── errors/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── validations/
│   └── main.js
├── .env
├── .gitignore
├── jest.config.js
├── package.json
└── README.md
```

## Features

- **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
- **Prisma**: Next-generation ORM for database access.
- **Bcrypt**: Library for hashing passwords.
- **Dotenv**: Loads environment variables from a `.env` file.
- **Joi**: Data validation library for JavaScript.
- **UUID**: Library for generating unique identifiers.
- **Winston**: Logger library for Node.js.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/boilerplate-express-api.git
   cd boilerplate-express-api
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root of the project and add your environment variables. Example:

   ```env
   DATABASE_URL="your-database-url"
   PORT=3000
   JWT_SECRET="your-secret-key"
   ```

## Running the Project

### Development

To run the project in development mode with hot-reloading using `nodemon`, use:

```sh
npm run dev
```

### Testing

To run the tests using `jest`, use:

```sh
npm test
```

## Scripts

- `npm run dev`: Runs the application in development mode.
- `npm test`: Runs the test suite.

## Dependencies

- **@prisma/client**: ORM client for interacting with your database.
- **bcrypt**: Password hashing library.
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Web framework for Node.js.
- **joi**: Schema description language and data validator.
- **uuid**: Library for generating unique identifiers.
- **winston**: Logger for Node.js.

## Dev Dependencies

- **@babel/preset-env**: Babel preset for compiling ES2015+ down to ES5.
- **@types/bcrypt**: Type definitions for bcrypt.
- **@types/express**: Type definitions for Express.
- **@types/jest**: Type definitions for Jest.
- **@types/supertest**: Type definitions for Supertest.
- **@types/uuid**: Type definitions for UUID.
- **babel-jest**: Jest plugin to use Babel for JavaScript files.
- **jest**: JavaScript testing framework.
- **nodemon**: Utility that monitors for changes in your source and automatically restarts the server.
- **prisma**: Next-generation ORM for Node.js.

---

Feel free to contribute to this project by opening issues or submitting pull requests. Happy coding!
