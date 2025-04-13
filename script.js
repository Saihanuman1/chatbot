function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (message === "") return;
  
    appendMessage("user", message);
    input.value = "";
  
    setTimeout(() => {
      botReply(message);
    }, 600); // Simulate delay
  }
  
  function appendMessage(sender, text) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message", sender);
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function botReply(userText) {
    // Simple keyword logic
    let reply = "I'm just a basic bot for now!";
    if (userText.toLowerCase().includes("hello")) reply = "Hi there! 👋";
    else if (userText.toLowerCase().includes("how are you")) reply = "I'm good! How can I assist you?";
    else if (userText.toLowerCase().includes("bye")) reply = "Goodbye! 👋";
  
    appendMessage("bot", reply);
  }