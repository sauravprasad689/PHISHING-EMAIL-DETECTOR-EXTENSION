// Extract opened Gmail email content
function extractEmail() {
  try {
    const subject =
      document.querySelector("h2")?.innerText || "No Subject";

    const sender =
      document.querySelector("span.gD")?.getAttribute("email") || "Unknown";

    const body =
      document.querySelector("div.a3s")?.innerText || "No Body";

    return { subject, sender, body };
  } catch (err) {
    return null;
  }
}

// Listen from popup
chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "EXTRACT_EMAIL") {
    const emailData = extractEmail();
    sendResponse(emailData);
  }
});
