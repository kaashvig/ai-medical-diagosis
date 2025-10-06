import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

app.post("/api/diagnose", (req, res) => {
  const { symptoms } = req.body;
  // mock AI logic
  res.json({
    result: "Likely common cold 🤧",
    confidence: 92,
    received: symptoms,
  });
});

app.listen(5000, () => {
  console.log("🚀 Backend running on http://localhost:5000");
});
