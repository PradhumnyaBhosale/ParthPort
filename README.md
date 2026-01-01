# 🚀 Parth Kale - AI-Powered Personal Portfolio

A premium, responsive personal portfolio website featuring a context-aware AI chatbot, dynamic project filtering, and a sleek modern design.

![Portfolio Preview](frontend/public/assets/projects/sign_language.png)

## ✨ Features

- **🤖 AI Chatbot**: Integrated AI assistant that knows about my skills, projects, and experience. Supports Google Gemini 2.0 and OpenAI, with a robust fallback system.
- **🎨 Premium Design**: Built with React, Tailwind CSS, and Framer Motion for smooth animations, glassmorphism effects, and a professional look.
- **📄 Resume Synchronized**: Every section (Skills, Projects, Experience) is automatically synced with my latest resume data.
- **📧 Smart Contact System**: A premium contact form that saves messages locally and supports instant email notifications via Nodemailer.
- **🌓 Dark Mode**: Fully responsive dark mode support for a comfortable viewing experience.

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **AI Integration**: Google Generative AI (Gemini), OpenAI API
- **Communication**: Axios, Nodemailer

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PradhumnyaBhosale/ParthPort.git
   cd ParthPort
   ```

2. **Install dependencies**:

   **Backend:**
   ```bash
   cd backend
   npm install
   ```

   **Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

3. **Environment Setup**:
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   GEMINI_API_KEY=your_gemini_api_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_google_app_password
   ```

4. **Run the application**:

   **Start Backend:**
   ```bash
   cd backend
   npm run dev
   ```

   **Start Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

## 📂 Project Structure

- `frontend/`: React application with Vite.
- `backend/`: Express server, controllers, and data storage.
- `backend/data/`: JSON storage for projects, certifications, and contact messages.

## 🤝 Contact

**Parth Kale**  
📧 [pkale1902@gmail.com](mailto:pkale1902@gmail.com)  
🔗 [LinkedIn](https://linkedin.com/in/parth-kale-4ba5a9257/)  
📍 Pune, Maharashtra, India
