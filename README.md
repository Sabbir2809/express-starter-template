# Project Name

#### [Server Live Link]()

## Overview

## Features

## Technology Stack

- **Programming Language:** TypeScript
- **Web Framework:** Express.js
- **Authentication:** JWT (JSON Web Tokens)

## Project Setup Instructions

1. Clone the repository:

   ```bash
   git clone
   cd
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```
3. Setup environment variables in `.env`.

   ```bash
   NODE_ENV=development
   PORT=5000
   DATABASE_URL=your_postgres_url
   BCRYPT_SALT_ROUNDS=your_bcrypt_salt_rounds
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=your_jwt_expires_in
   REFRESH_JWT_SECRET=your_refresh_jwt_secret
   REFRESH_JWT_EXPIRES_IN=your_refresh_jwt_expires_in
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Run the development server:
   ```bash
   yarn dev dev
   ```
5. Open `http://localhost:5000` in your browser.
