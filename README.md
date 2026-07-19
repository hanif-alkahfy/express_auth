# Express Auth API

A lightweight and structured user authentication API built with Node.js, Express.js, and MySQL. It features password hashing using `bcrypt` and handles authentication queries against a database using a connection pool.

## Features

- **User Authentication**: Secure user login with email and password.
- **Password Security**: Password verification powered by `bcrypt`.
- **Database Pooling**: High-performance MySQL connection pool via `mysql2/promise`.
- **Layered Architecture**: Clean MVC-like separation of concerns (Routes, Controllers, Services, Models, and Config).
- **Environment Configuration**: Easy deployment settings via `dotenv`.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5)
- **Database Driver**: MySQL2 (with Promise wrapper)
- **Security**: Bcrypt
- **Process Manager (Dev)**: Nodemon

## Project Structure

```text
learn_express/
├── src/
│   ├── config/
│   │   └── database.js      # MySQL connection pool setup
│   ├── controllers/
│   │   └── AuthController.js # Handles HTTP request/response cycle
│   ├── middlewares/         # Middleware folder (tracked with .gitkeep)
│   ├── models/
│   │   └── User.js          # DB queries for User data
│   ├── routes/
│   │   └── AuthRoutes.js    # Routes for auth module (/api/auth)
│   ├── services/
│   │   └── AuthService.js   # Main authentication business logic
│   ├── utils/               # Utility functions folder (tracked with .gitkeep)
│   ├── app.js               # Express application configuration
│   └── server.js            # Server entrypoint (loads env & starts server)
├── .env                     # Local environment variables (ignored by Git)
├── .gitignore               # Ignored files configuration
├── index.js                 # Legacy/Boilerplate entrypoint
├── package.json             # NPM dependencies and scripts
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/hanif-alkahfy/express_auth.git
   cd express_auth
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory of the project with the following values:

```ini
PORT=3000

DB_HOST=localhost
DB_PORT=3306
DB_NAME=express_auth
DB_USER=root
DB_PASSWORD=your_mysql_password
```

## Running the Project

### Development Mode

Runs the server with hot-reloading enabled (using `nodemon`):
```bash
npm run dev
```

### Production Mode

Starts the server with node directly:
```bash
npm start
```

## API Overview

### Authenticate User

- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Headers**: `Content-Type: application/json`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```

- **Success Response**:
  - **Code**: `200 OK`
  - **Content**:
    ```json
    {
      "success": true,
      "message": "Login berhasil",
      "data": {
        "id": 1,
        "name": "John Doe",
        "email": "user@example.com"
      }
    }
    ```

- **Error Response**:
  - **Code**: `401 Unauthorized`
  - **Content**:
    ```json
    {
      "success": false,
      "message": "Email atau password salah"
    }
    ```

## License

This project is licensed under the [ISC License](package.json).
