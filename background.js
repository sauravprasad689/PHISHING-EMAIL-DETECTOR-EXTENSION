function fakeAI(email) {
  let score = 0;
  let indicators = [];

  if (/urgent|immediately|verify|suspend/i.test(email.body)) {
    score += 35;
    indicators.push("Urgency / fear based language detected");
  }

  if (/password|login|bank|account/i.test(email.body)) {
    score += 30;
    indicators.push("Credential harvesting keywords found");
  }

  if (/http|www/i.test(email.body)) {
    score += 20;
    indicators.push("External links present in email");
  }

  let verdict =
    score > 60 ? "Malicious" :
    score > 30 ? "Suspicious" :
    "Safe";

  return {
    verdict,
    riskScore: score,
    indicators,
    explanation:
      "This email was analyzed using AI-inspired behavioral and linguistic analysis patterns."
  };
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "ANALYZE_EMAIL") {
    const result = fakeAI(req.email);
    chrome.storage.local.set({ analysis: result });
    sendResponse(result);
  }
});
