const newLocal = "I am having panic attack";
// Array of predefined chatbot responses
const chatbotResponses = [
    { userText: "hello", botReply: "Hello! How can I assist you with your mental health today?" },
    { userText: "i am feeling sad", botReply: "I'm sorry to hear that. It's okay to feel sad sometimes. I'm here for you." },
    { userText: "i am stressed", botReply: "Stress can be tough. Do you want to talk about what’s causing your stress?" },
    { userText: "how can i manage anxiety", botReply: "Managing anxiety starts with deep breathing and staying mindful. Do you want me to suggest exercises?" },
    { userText: "bye", botReply: "Take care! Remember, I'm always here whenever you need to talk." },
    { userText: "I just can't handle this anymore", botReply: "I'm here to listen. What's feeling unmanageable right now? Let's break it down together" },
    { userText: "I'm so overwhelmed", botReply: "That sounds incredibly challenging. Would you like to talk about what's causing your stress? Sometimes sharing can help clarify things" },
    { userText: "I'm feeling really anxious.", botReply: "Anxiety can be tough. Have you tried any relaxation techniques? Deep breathing, progressive muscle relaxation, or mindfulness exercises might help" },
    { userText: "I'm so tired of everything", botReply: "It sounds like you're feeling burnt out. What self-care activities bring you joy? Let's prioritize those." },
    { userText: "I don't see a point anymore.", botReply: "I'm here to listen. Sometimes, when we're struggling, it's hard to see a way forward. Let's explore small steps to find meaning again" },
    { userText: "I'm worthless", botReply: "That's not true. You are valuable and deserving of love. Would you like to talk about what's making you feel this way?" },
    { userText: "I just want to stay in bed.", botReply: "Sometimes, taking a break is necessary. But remember, small accomplishments can add up. What's one tiny thing you can do today?" },
    { userText: "I feel so alone", botReply: "You're not alone. I'm here, and there are people who care about you. Would you like to reach out to a trusted friend or family member" },
    { userText: "What should I do if I’m feeling down or depressed?", botReply: " If you're feeling down for an extended period, try talking to a trusted friend or family member. Engage in activities you enjoy, stay physically active, and focus on small accomplishments. If feelings of sadness or hopelessness persist, consider seeking help from a therapist or counselor." },
    { userText:"yes",botReply:"1800-599-0019 please do call on this number, and get professional help as soon as possible"},
    { userText: "I am having panic attack", botReply: "I'm sorry you're feeling this way. Try to focus on your breathing—take slow, deep breaths. Inhale for 4 seconds, hold for 4, and exhale for 4. Remind yourself that this will pass, and you're safe right now. If it helps, grounding techniques like describing 5 things you can see around you might also calm you. Would you like more support?" },
    { userText: "I can't sleep what should I do", botReply: " If you’re having trouble sleeping, try to relax with deep breathing or meditation. Avoid screens before bed and create a calming nighttime routine to help signal your body that it’s time to sleep." },
    { userText: " Why do I feel sad for no reason", botReply: " Sometimes sadness can come without a clear cause. It’s okay to feel that way. Try doing something you enjoy, talking to someone you trust, or practicing self-care to lift your mood." },
    { userText: "Thank you", botReply: "Most Welcome" },
    { userText: "", botReply: "" },
    { userText: "", botReply: "" },
    { userText: "", botReply: "" },
    { userText: "default", botReply: "I'm not sure how to respond to that. Can you tell me more about what you're feeling?" }
  ];
  
  // Function to get chatbot response
  function getBotReply(userText) {
    const response = chatbotResponses.find(item => userText.includes(item.userText.toLowerCase()));
    return response ? response.botReply : chatbotResponses.find(item => item.userText === "default").botReply;
  }
  
  // Function to append message to chat
  function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // Function to handle user input
  function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') return;
  
    appendMessage('user', userInput);
  
    const botReply = getBotReply(userInput.toLowerCase());
    setTimeout(() => {
      appendMessage('bot', botReply);
    }, 500);
  
    // Clear the input
    document.getElementById('user-input').value = '';
  }
  
  // Allow "Enter" key to send message
  document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  