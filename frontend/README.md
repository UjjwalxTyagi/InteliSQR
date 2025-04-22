# 🛡️ Full-Stack Login Application

This is a full-stack login app built as part of an intern assignment. It includes a React + TypeScript frontend and a Node.js + Express backend with Prisma ORM and SQLite. The UI replicates a Figma login design and uses modern libraries for form handling, validation, and API state management.

---


## 📽 Demo

[Click here to watch the demo video](https://drive.google.com/file/d/1qiu9xvmJ8JUY40h55kxuXlK-vBud-Ye4/view?usp=sharing)


---

## 🔧 Tech Stack

### 🌐 Frontend
- React + TypeScript
- Tailwind CSS
- React Hook Form
- Zod
- @tanstack/react-query
- Axios

### 🛠️ Backend
- Node.js + Express
- TypeScript
- Prisma ORM
- SQLite
- bcryptjs
- dotenv
- cors

---
## 🚀 Getting Started

### 🧩 1. Clone the Repo



git clone https://github.com/your-username/fullstack-login-app.git
cd fullstack-login-app


### ⚛️ 2. Setup Frontend

```bash
cd frontend
npm install
npm start
```

Runs at: [http://localhost:3000](http://localhost:3000)

---

### 🔧 3. Setup Backend

```bash
cd ../backend
npm install
npx prisma migrate dev --name init
npx ts-node-dev src/scripts/seedUser.ts
npm run dev
```

Runs at: [http://localhost:5000](http://localhost:5000)

---

# 🧪 Test Credentials

```bash
email: test@example.com
password: password123
```

---

# ✅ Features

- Fully functional login UI from Figma design
- Client-side form validation using **Zod**
- API interaction with **React Query**
- Typed frontend and backend with **TypeScript**
- Proper error and success feedback
- Password hashing using **bcrypt**
- Clear code structure and documentation

---

## 🤝 Author

**Ujjwal Tyagi**  
Built as part of a **Full-Stack Internship Assignment**.
