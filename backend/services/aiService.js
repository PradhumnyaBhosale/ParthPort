const { GoogleGenerativeAI } = require("@google/generative-ai");
const OpenAI = require("openai");
require("dotenv").config();

const { getFallbackResponse } = require('./preSavedReplies');

const getAIResponse = async (userMessage, systemPrompt = "") => {
  const geminiKey = process.env.GEMINI_API_KEY;
  const openaiKey = process.env.OPENAI_API_KEY;

  try {
    // Option 1: Google Gemini
    if (geminiKey) {
      const genAI = new GoogleGenerativeAI(geminiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

      const prompt = `${systemPrompt}\nUser: ${userMessage}`;
      const result = await model.generateContent(prompt);
      return result.response.text();
    }

    // Option 2: OpenAI
    if (openaiKey) {
      const openai = new OpenAI({ apiKey: openaiKey });
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        model: "gpt-3.5-turbo",
      });
      return completion.choices[0].message.content;
    }

    // Fallback if no keys or API fails (handled in catch)
    return getFallbackResponse(userMessage);

  } catch (error) {
    console.error("AI Service Error:", error.message);
    
    // If API fails (e.g. 429 quota), use pre-saved replies instead of error message
    return getFallbackResponse(userMessage);
  }
};

module.exports = { getAIResponse };
