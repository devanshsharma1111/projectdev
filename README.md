# AI Career Prep Platform 🚀

An AI-powered career guidance application featuring Resume Analysis, Job Matching, Interview Preparation, and AI Resume Building.

## 🌐 Live Demos

- **Frontend (Vercel)**: [https://projectdev-rust.vercel.app/](https://projectdev-rust.vercel.app/)
- **Backend (Render)**: [https://ai-career-backend-jc99.onrender.com/](https://ai-career-backend-jc99.onrender.com/)

---

## ✨ Features

- 📄 **Resume Analyzer**: Upload your resume PDF and receive detailed ATS scores, strengths, and improvement suggestions.
- 🎯 **Job Matcher**: Match your skills and experience against targeted job descriptions with AI recommendations.
- 🎤 **Interview Prep**: Practice tailored interview questions and scenarios based on your target role and skills.
- 📝 **AI Resume Builder**: Build or improve professional resumes with AI assistance.
- 🔐 **Authentication**: User accounts with Google OAuth & JWT authentication.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, Lucide React
- **Backend**: Node.js, Express, TypeScript, MongoDB & Mongoose
- **AI Integration**: Google Generative AI SDK (`@google/genai`) with `gemini-2.5-flash`
- **Hosting**: Vercel (Frontend), Render (Backend)

---

## 🚀 Local Setup

### 1. Clone the repository
```bash
git clone https://github.com/devanshsharma1111/projectdev.git
cd projectdev
```

### 2. Backend Setup
```bash
cd server
npm install
# Create .env in server/ directory
# API_KEY_GEMINI="your_google_gemini_api_key"
# MONGO_URI="your_mongodb_connection_string"
# PORT=10000
npm run dev
```

### 3. Frontend Setup
```bash
cd ../app
npm install
# Create .env in app/ directory
# VITE_SERVER_URL=http://localhost:10000
npm run dev
```
