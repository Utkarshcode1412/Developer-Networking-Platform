# 🚀 Developer Networking Platform

A full-stack developer networking platform inspired by Tinder, where developers can create profiles, discover other developers, send connection requests, and chat in real time after matching.

---

## ✨ Features

- 🔐 User Authentication (JWT + Cookies)
- 👤 User Profile Management
- ❤️ Send, Accept, Reject Connection Requests
- 🤝 Match with Other Developers
- 💬 Real-time Chat using Socket.IO
- 🔍 Browse Developer Feed
- 📝 Edit Profile
- 🔒 Protected Routes
- 📱 Responsive UI
- ⚡ RESTful API Architecture

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Socket.IO
- Cookie Parser
- CORS

---

## 📂 Project Structure

```
Dev-Tinder/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── utils/
│   │   ├── redux/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🔄 Application Flow

1. User registers or logs in.
2. JWT token is generated and stored securely.
3. User completes their profile.
4. Browse developer feed.
5. Send connection requests.
6. Other user accepts/rejects request.
7. Once accepted, both users become connections.
8. Connected users can chat in real time.
---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/dev-tinder.git

cd dev-tinder
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLIENT_URL=http://localhost:5173
```

Run backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_BASE_URL=http://localhost:5000
```

Run frontend

```bash
npm run dev
```

---

## 🔐 Authentication

- Passwords are hashed using **bcrypt**
- JWT-based authentication
- HTTP-only cookies
- Protected API routes
- Authorization middleware

---


## 📈 Learning Outcomes

This project helped in understanding:

- Authentication using JWT
- Cookie-based Sessions
- REST API Design
- MongoDB Data Modeling
- Socket.IO
- Redux Toolkit
- React Routing
- State Management
- Full-Stack Application Architecture
- Real-Time Communication

---


## 👨‍💻 Author

**Utkarsh Pawar**

If you liked this project, don't forget to ⭐ the repository!
