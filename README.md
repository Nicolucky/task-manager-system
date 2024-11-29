
# **Task Manager**

A simple full-stack web application for managing tasks, built using **Express.js**, **MongoDB**, **JSON Web Token (JWT)** for authentication, **Bcrypt** for password hashing, and vanilla HTML, CSS, and JavaScript for the frontend.

## **Features**

- User registration and login with JWT-based authentication.
- Create, read, update, and delete tasks.
- Backend error handling for better debugging.
- Secure password storage with Bcrypt.
- Seamless frontend-backend integration.
  
 live demo link: 

## **Project Structure**

### **Backend**

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── authController.js  # Handles user authentication
│   └── taskController.js  # Handles CRUD operations for tasks
├── middleware/
│   ├── authMiddleware.js  # Protects private routes
│   └── errorHandler.js    # Global error handler
├── models/
│   ├── userModel.js       # User schema and model
│   └── taskModel.js       # Task schema and model
├── routes/
│   ├── authRoutes.js      # Authentication routes
│   └── taskRoutes.js      # Task routes
├── .env                   # Environment variables
├── server.js              # Main server file
```

### **Frontend**

```
frontend/
├── css/
│   └── styles.css         # Main stylesheet
├── js/
│   └── app.js             # JavaScript for DOM manipulation and API calls
├── index.html             # Combined HTML for login, registration, and dashboard
```

---

## **Technologies Used**

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Bcrypt**
- **JSON Web Token (JWT)**

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript**

---

## **Installation and Setup**

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. Install dependencies for both backend and frontend:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/` directory with the following content:
   ```
   PORT=5000
   MONGO_URI=(your_mongodb_connection_string)
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open a browser and navigate to:
   ```
   http://localhost:5000
   ```


## **Screenshots**


## **Author**

**Your Name**  
- GitHub:Nicolucky 
- Email: ukanelucky@gmail.com

--- 

Feel free to customize the **screenshots**, **author details**, and **GitHub links** as per your requirements! Let me know if you need anything else.
