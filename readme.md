# 🎬 Movie Streaming Backend API (Netflix Clone)

This is a **Node.js + Express.js backend project** built for a Netflix-style movie streaming application.  
It provides APIs for **user authentication, movie data handling**, and follows a **clean MVC architecture**.

## 🚀 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT Authentication**
- **Nodemon**
- **dotenv**

---

## 📁 Project Structure
backend/
│
├── node_modules/
│
├── src/
│ ├── controllers/
│ │ ├── movies.controller.js
│ │ └── user.controller.js
│ │
│ ├── db/
│ │ └── index.js
│ │
│ ├── middlewares/
│ │ └── auth.middleware.js
│ │
│ ├── models/
│ │ └── user.model.js
│ │
│ ├── routes/
│ │ ├── movies.routes.js
│ │ └── user.routes.js
│ │
│ ├── utils/
│ │ ├── apiError.js
│ │ ├── ApiResponse.js
│ │ ├── asyncHandler.js
│ │ └── Constants.js
│ │
│ ├── app.js
│ └── index.js
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json

🔥 API Features
✅ User Registration
✅ User Login
✅ JWT Authentication
✅ Protected Routes
✅ Movie APIs
✅ Centralized Error Handling
✅ Clean Code Structure

🔐 Authentication Flow
User registers / logs in
JWT token is generated
Token is verified using middleware
Protected routes are accessed securely

## 📦 Install Dependencies
npm i
▶️ Run the Project
npx nodemon index.js


