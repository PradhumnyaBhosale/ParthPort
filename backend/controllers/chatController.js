const { getAIResponse } = require('../services/aiService');
const { getSystemPrompt } = require('../services/contextBuilder');

exports.chatWithAI = async (req, res) => {
  const { message } = req.body;

  try {
    const systemPrompt = getSystemPrompt();
    const response = await getAIResponse(message, systemPrompt);

    res.json({
      success: true,
      response: response,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Chat Controller Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
