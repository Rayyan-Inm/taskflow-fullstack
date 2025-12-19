# TaskFlow – Full Stack Task Management App

TaskFlow is a full-stack web application that allows users to securely manage their daily tasks.  
The application includes user authentication, protected routes, a dashboard, and CRUD operations on tasks.

This project was built as part of an assignment to demonstrate frontend, backend, security, and scalability concepts.

---

## 🚀 Features

### 🔐 Authentication & Security
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected routes (dashboard accessible only after login)

### 🧑 User Profile
- Fetch and display logged-in user profile (name & email)
- Secure profile access via token-based authorization

### ✅ Task Management
- Create new tasks
- View user-specific tasks
- Delete tasks
- Search and filter tasks in real-time

### 🎨 Frontend
- Built using **React (Vite)**
- Styled with **Tailwind CSS**
- Responsive, modern SaaS-style UI
- Clean component-based structure

### 🗄️ Backend
- Node.js + Express
- MongoDB Atlas (cloud database)
- RESTful APIs
- Middleware-based authorization

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios
- React Router

**Backend**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcrypt

---

## 📂 Project Structure

project/
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── api/
│ │ └── main.jsx
│
├── backend/
│ ├── src/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── server.js
│
└── README.md


---

## ⚙️ How to Run the Project Locally

### 1️⃣ Clone the repository
```bash
git clone <your-github-repo-url>
cd project

2️⃣ Backend Setup

cd backend
npm install

Create a .env file inside backend:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000

Run backend:

node src/server.js

3️⃣ Frontend Setup

cd frontend
npm install
npm run dev

Open:

http://localhost:5173