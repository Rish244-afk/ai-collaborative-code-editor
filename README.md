# 💻 AI Collaborative Code Editor

An advanced full-stack project that combines **real-time collaborative coding** with **AI-powered code explanations and suggestions** using **Google Gemini 2.5 Flash**.

---

## 🚀 Features

- **Real-time collaboration**: Multiple users can edit code simultaneously.  
- **AI Code Explanation**: Uses Gemini 2.5 Flash to explain your code in plain English.  
- **AI Code Suggestions**: Recommends improvements or refactoring (mini Copilot).  
- **Syntax Highlighting**: CodeMirror integration for JavaScript syntax.  
- **Multi-user cursors**: Shows other users’ cursors like Google Docs.  
- **Export / Download**: Download code or AI explanation as `.txt`.  
- **Full-stack tech**: Built with **Node.js**, **Express**, **Socket.io**, and **React**.

---

## 🛠 Tech Stack

- **Frontend**: React, CodeMirror, Socket.io-client  
- **Backend**: Node.js, Express, Socket.io  
- **AI**: Google Gemini 2.5 Flash API  

---

## 📂 Project Structure
ai-code-editor/
├─ server/ # Node.js backend
│ ├─ index.js
│ └─ package.json
├─ client/ # React frontend
│ ├─ src/
│ │ ├─ App.js
│ │ └─ index.js
│ └─ package.json
├─ README.md
└─ .gitignore

---

## ⚡ Installation

### 1️⃣ Backend

```bash
cd server
npm install
node index.js

2️⃣ Frontend
cd client
npm install
npm start


