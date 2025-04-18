(function () {
  const script = document.currentScript;
  const companyName = script.getAttribute("data-company") || "Your Company";
  const color = script.getAttribute("data-color") || "#000000";
  const position = script.getAttribute("data-position") || "bottom-right";
  const showBranding = script.getAttribute("data-branding") === "true";

  // Create the chat button
  const chatButton = document.createElement("div");
  chatButton.innerText = "💬 Chat";
  chatButton.style.cssText = `
    position: fixed;
    ${position.includes("bottom") ? "bottom: 20px;" : "top: 20px;"}
    ${position.includes("right") ? "right: 20px;" : "left: 20px;"}
    background-color: ${color};
    color: white;
    padding: 10px 16px;
    border-radius: 30px;
    cursor: pointer;
    z-index: 9999;
    font-family: sans-serif;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  `;

  // Create the chat box
  const chatBox = document.createElement("div");
  chatBox.style.cssText = `
    display: none;
    position: fixed;
    width: 300px;
    height: 400px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.2);
    ${position.includes("bottom") ? "bottom: 70px;" : "top: 70px;"}
    ${position.includes("right") ? "right: 20px;" : "left: 20px;"}
    z-index: 9999;
    padding: 16px;
    font-family: sans-serif;
  `;
  chatBox.innerHTML = `
    <strong>${companyName} Assistant</strong><br><br>
    Hi there! I'm here to help. (This is a demo)<br><br>
    <small style="color: gray">${showBranding ? "Powered by AgentFlow" : ""}</small>
  `;

  // Toggle chat window
  chatButton.onclick = () => {
    chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  };

  document.body.appendChild(chatButton);
  document.body.appendChild(chatBox);
})();
