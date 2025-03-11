const express = require("express");
const router = express.Router();
const axios = require("axios");

const HF_API_KEY = process.env.HF_API_KEY;
const MODEL = "tiiuae/falcon-7b-instruct"; // ✅ Best Free Model for Chat AI

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    console.log("🔹 Sending request to Hugging Face AI...");

    const response = await axios.post(
      `https://api-inference.huggingface.co/models/${MODEL}`,
      { inputs: message },
      {
        headers: { Authorization: `Bearer ${HF_API_KEY}` },
      }
    );

    console.log("🔹 AI Response Received!");

    res.json({ response: response.data[0].generated_text });
  } catch (error) {
    console.error("🚨 Hugging Face Chat Error:", error.response?.data || error);
    res.status(500).json({ message: "Error processing AI response", error });
  }
});

module.exports = router;
