// server/index.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const bodyParser = require("body-parser");
// Top of index.js
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(bodyParser.json());

const server = http.createServer(app);

const io = new Server(server, { cors: { origin: "*" } });

// WebSocket real-time code sync
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("code-change", (code) => {
    socket.broadcast.emit("code-update", code);
  });
});

// Gemini 2.5 Flash AI endpoint
app.post("/explain", async (req, res) => {
  const { code } = req.body;

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Explain this code in simple terms:\n${code}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    console.log("Gemini response:", data);

    const result =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI";

    res.json({ result });
  } catch (err) {
    console.error("Gemini API error:", err);
    res.json({ result: "Error connecting to AI" });
  }
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});