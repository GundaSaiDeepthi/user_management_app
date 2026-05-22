# User Management App

## Step-by-Step README / Documentation

---

# Project Overview

The **User Management App** is a MERN Stack application developed using:

* MongoDB Atlas
* Express.js
* React.js
* Node.js

The application allows users to:

* Add Users
* View Users
* View User Details
* Soft Delete Users
* Activate Users

The project is fully deployed online.

---

# Technologies Used

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Tailwind CSS

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* cors

---

# Project Structure

```bash
UserManagementApp/
│
├── backend/
│
└── frontend/
```

---

# Backend Setup

## Step 1: Create Backend

```bash
mkdir backend
cd backend
```

---

## Step 2: Initialize Node Project

```bash
npm init -y
```

---

## Step 3: Install Dependencies

```bash
npm install express mongoose cors dotenv
```

---

## Step 4: Create Backend Structure

```bash
backend/
│
├── APIs/
├── models/
├── .env
├── server.js
└── package.json
```

---

## Step 5: Configure Environment Variables

Create `.env` file:

```env
PORT=4000
DB_URL=your_mongodb_connection_string
```

---

## Step 6: Create APIs

Implement APIs for:

* Create User
* Get Users
* Get Single User
* Delete User
* Activate User

---

## Step 7: Connect MongoDB

Connect MongoDB Atlas using Mongoose.

---

## Step 8: Run Backend

```bash
node server.js
```

Backend runs on:

```bash
http://localhost:4000
```

---

# Backend API Endpoints

## Base URL

```bash
http://localhost:4000/user-api
```

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| POST   | `/users`     | Create User      |
| GET    | `/users`     | Get All Users    |
| GET    | `/users/:id` | Get Single User  |
| DELETE | `/users/:id` | Soft Delete User |
| PATCH  | `/users/:id` | Activate User    |

---

# Backend Deployment (Render)

## Step 1: Push Code to GitHub

```bash
git init
git add .
git commit -m "backend completed"
git push
```

---

## Step 2: Open Render

Create:

* New Web Service

---

## Step 3: Connect GitHub Repository

Select backend repository.

---

## Step 4: Configure Render

### Build Command

```bash
npm install
```

### Start Command

```bash
node server.js
```

---

## Step 5: Add Environment Variables

```env
PORT=4000
DB_URL=your_connection_string
```

---

## Step 6: Deploy Backend

Backend Deployment URL:

```bash
https://your-backend-link.onrender.com
```

---

# Frontend Setup

## Step 1: Create React App

```bash
npm create vite@latest frontend
```

Choose:

* React
* JavaScript

---

## Step 2: Move to Frontend

```bash
cd frontend
```

---

## Step 3: Install Dependencies

```bash
npm install
npm install react-router-dom axios
```

---

## Step 4: Create Frontend Structure

```bash
frontend/
│
├── src/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
```

---

## Step 5: Create Components

Create components like:

* Home
* AddUser
* UserList
* UserDetails

---

## Step 6: Connect Backend APIs

Use Axios to connect frontend with backend APIs.

Example:

```bash
https://your-backend-link.onrender.com/user-api/users
```

---

## Step 7: Run Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# Frontend Deployment

## Step 1: Push Frontend to GitHub

```bash
git add .
git commit -m "frontend completed"
git push
```

---

## Step 2: Open Render / Vercel

Create:

* New Static Site

---

## Step 3: Configure Build Settings

### Build Command

```bash
npm run build
```

### Publish Directory

```bash
dist
```

---

## Step 4: Deploy Frontend

Frontend Deployment URL:

```bash
https://your-frontend-link.onrender.com
```

---

# Application Flow

```bash
Frontend
   ↓
Backend APIs
   ↓
MongoDB Atlas
```

---

# Features

## Backend Features

* REST APIs
* MongoDB Integration
* Soft Delete Functionality
* Error Handling
* Environment Variables

## Frontend Features

* Responsive UI
* Routing
* API Integration
* Dynamic User Rendering

---

# Future Enhancements

* JWT Authentication
* Protected Routes
* Edit User Feature
* Search Users
* Pagination
* Swagger Documentation

---

# Deployment Links

## Frontend(Vercel)

```bash
https://usermanagementapp-xi.vercel.app/
```

## Backend(Render)

```bash
https://user-management-app-8r4r.onrender.com
```

---


