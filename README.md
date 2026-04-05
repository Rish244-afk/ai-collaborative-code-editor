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


## 📌 Screenshots

<img width="942" height="607" alt="Screenshot 2026-04-05 220335" src="https://github.com/user-attachments/assets/7b2b393e-f187-4922-aa6c-8db87924b4ae" />
<img width="1918" height="971" alt="Screenshot 2026-04-05 223835" src="https://github.com/user-attachments/assets/487e419f-8a5d-418a-9d0d-4363341a6c72" />


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


