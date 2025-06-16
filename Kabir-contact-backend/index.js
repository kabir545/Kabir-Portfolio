const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Mongoose Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});
const Message = mongoose.model("Message", messageSchema);

// ✅ Middlewares
app.use(cors({
  origin: ["https://kabir-portfolio.web.app", "http://localhost:5173"], 
}));
app.use(express.json());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: { success: false, msg: "Too many requests. Please try again later." },
});
app.use("/contact", limiter);

// ✅ Contact Route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, msg: "All fields are required." });
  }

  try {
    const newMsg = new Message({ name, email, message });
    await newMsg.save();

    console.log("📩 New message saved:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log("------");

    return res.status(200).json({ success: true, msg: "Message received and saved!" });
  } catch (err) {
    console.error("❌ Error saving message:", err);
    return res.status(500).json({ success: false, msg: "Server error. Try again later." });
  }
});

// ✅ Health Check
app.get("/", (req, res) => {
  res.send("Kabir's backend is running 🚀");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
