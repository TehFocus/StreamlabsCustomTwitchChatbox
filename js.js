/*
 TehF0cus Streamlabs Custom Chatbox - JavaScript file
 Version: 1.2
 Release Date: 27. Dec 2025

 Please consider supporting the author:
 Donate: https://ko-fi.com/tehf0cus

 Public repository: https://github.com/TehFocus/StreamlabsCustomTwitchChatbox

 License: Released under the MIT License. See the LICENSE file for details.
*/

// Track the current newest message
let latestMessage = null;

// Initialize when Streamlabs loads
document.addEventListener("onLoad", function () {
  const log = document.getElementById("log");
  if (!log) return;

  // Watch for new messages being added
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      // Handle added messages
      mutation.addedNodes.forEach(function (node) {
        if (node.nodeType === 1 && node.classList.contains("chatMsg")) {
          decorateMessage(node);
        }
      });

      // Handle removed messages
      mutation.removedNodes.forEach(function (node) {
        if (node.nodeType === 1 && node.classList.contains("chatMsg")) {
          removeSeparator(node);
          if (node === latestMessage) {
            latestMessage = null;
            updateLatest();
          }
        }
      });
    });
  });

  observer.observe(log, { childList: true });
});

// Handle message deletion events from Streamlabs
document.addEventListener("onEventReceived", function (obj) {
  if (!obj || !obj.detail || !obj.detail.event) return;

  var event = obj.detail.event;
  if (event.type === "delete-message" && event.data && event.data.msgId) {
    var msg = document.querySelector(
      '.chatMsg[data-id="' + event.data.msgId + '"]'
    );
    if (msg) {
      removeSeparator(msg);
      msg.remove();
      if (msg === latestMessage) {
        latestMessage = null;
        updateLatest();
      }
    }
  }
});

// Add separator and mark as latest
function decorateMessage(node) {
  // Add separator bar before message (except first message)
  if (
    node.previousElementSibling &&
    !node.previousElementSibling.classList.contains("msgSeparator")
  ) {
    var separator = document.createElement("div");
    separator.className = "msgSeparator";
    // separator.setAttribute("aria-hidden", "true");
    node.parentElement.insertBefore(separator, node);
  }

  // Mark this as the latest message
  if (latestMessage && latestMessage !== node) {
    latestMessage.classList.remove("is-latest");
  }
  latestMessage = node;
  node.classList.add("is-latest");
}

// Remove separator when message is deleted
function removeSeparator(node) {
  var prev = node.previousElementSibling;
  if (prev && prev.classList.contains("msgSeparator")) {
    prev.remove();
  }
}

// Find and mark the last message as latest
function updateLatest() {
  var log = document.getElementById("log");
  if (!log) return;

  var messages = log.querySelectorAll(".chatMsg");
  var last = messages[messages.length - 1];

  if (last) {
    latestMessage = last;
    last.classList.add("is-latest");
  }
}
