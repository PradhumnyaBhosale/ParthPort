const preSavedReplies = [
  {
    keywords: ['skill', 'tech', 'stack', 'language', 'know', 'can you'],
    response: "Parth is skilled in C/C++, Python, and JavaScript. For web development, he uses HTML, CSS, SQL, and React.js. He's also strong in Data Structures and Algorithms."
  },
  {
    keywords: ['project', 'work', 'experience', 'portfolio', 'done'],
    response: "Parth has developed a 'Sign Language Recognition' system and a 'Game Controller using Hand Gestures' both using Python and OpenCV. He also interned as a Frontend Developer at The Mother Global Foundation (NGO)."
  },
  {
    keywords: ['contact', 'email', 'reach', 'hire', 'talk', 'phone', 'call', 'linkedin'],
    response: "You can reach Parth at pkale1902@gmail.com or call him at +91-8180818309. You can also find him on LinkedIn (linkedin.com/in/parth-kale-4ba5a9257/) and GitHub (github.com/Kaleparth)."
  },
  {
    keywords: ['who', 'about', 'bio', 'parth', 'education', 'college'],
    response: "Parth Kale is an IT student at JSPM Rajarshi Shahu College of Engineering. He is a developer interested in Full Stack and AI, specifically computer vision."
  },
  {
    keywords: ['certification', 'course', 'study'],
    response: "Parth is Oracle Cloud Infrastructure certified and has completed advanced C++ and DSA courses from Udemy."
  },
  {
    keywords: ['hi', 'hello', 'hey', 'greetings'],
    response: "Hi! I'm Parth's assistant. I can tell you about his B.Tech studies at JSPM, his AI projects, or how to contact him at pkale1902@gmail.com."
  }
];

const getFallbackResponse = (message) => {
  const lowerMsg = message.toLowerCase();
  
  for (const reply of preSavedReplies) {
    if (reply.keywords.some(keyword => lowerMsg.includes(keyword))) {
      return reply.response;
    }
  }
  
  return "I'm not exactly sure, but you can reach Parth at pkale1902@gmail.com for more details!";
};

module.exports = { getFallbackResponse };
