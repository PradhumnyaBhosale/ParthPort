const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

exports.submitContact = async (req, res) => {
  const { name, email, subject, message } = req.body;
  const filePath = path.join(__dirname, '../data/messages.json');

  try {
    // 1. Save to JSON File (Backup/Local Storage)
    let messages = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, 'utf8');
      messages = JSON.parse(fileData || '[]');
    }

    const newMessage = {
      id: Date.now(),
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    };

    messages.push(newMessage);
    fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));
    console.log('Contact message saved to file.');

    // 2. Optional: Try to Send Email (Only if credentials exist)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'pkale1902@gmail.com', 
          subject: `New Portfolio Message: ${subject}`,
          text: `You have a new message from ${name} (${email}):\n\n${message}`
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully.');
      } catch (mailError) {
        console.error('Email sending failed (but message was saved to file):', mailError.message);
      }
    }

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to process your message. Please try again later.' 
    });
  }
};
