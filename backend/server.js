require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const chatRoute = require("./routes/chatRoute");

const app = express();

app.use(cors());
app.use(express.json());

// Debugging: Check if environment variables are loaded
console.log(
  "🔹 MONGO_URI:",
  process.env.MONGO_URI ? "Loaded ✅" : "MISSING ❌"
);
console.log(
  "🔹 HF_API_KEY:",
  process.env.HF_API_KEY ? "Loaded ✅" : "MISSING ❌"
);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/chat", chatRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
