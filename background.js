function HybridThreatDetector(email) {
  let heuristicScore = 0;
  let indicators = [];

  const body = (email.body || "").toLowerCase();
  const sender = (email.sender || "").toLowerCase();

  // ======================
  // 🔹 HEURISTIC ENGINE
  // ======================

  if (/urgent|immediately|verify|suspend|act now/i.test(body)) {
    heuristicScore += 25;
    indicators.push("Urgency-based manipulation detected");
  }

  if (/password|login|bank|account|otp|ssn/i.test(body)) {
    heuristicScore += 30;
    indicators.push("Sensitive credential harvesting attempt");
  }

  const links = body.match(/http[s]?:\/\/[^\s]+/g);
  if (links) {
    heuristicScore += links.length * 10;
    indicators.push(`${links.length} external link(s) detected`);
  }

  if (/attachment|invoice|payment|pdf|document/i.test(body)) {
    heuristicScore += 15;
    indicators.push("Suspicious attachment bait language");
  }

  if (heuristicScore > 100) heuristicScore = 100;

  // ======================
  // 🔹 LIGHTWEIGHT ML SCORING
  // ======================

  const mlWeights = {
    urgent: 0.3,
    password: 0.4,
    verify: 0.3,
    bank: 0.4,
    click: 0.2,
    free: 0.2,
    win: 0.3,
    limited: 0.25,
    prize: 0.3
  };

  let mlScore = 0;

  for (let word in mlWeights) {
    if (body.includes(word)) {
      mlScore += mlWeights[word];
    }
  }

  mlScore = Math.min(mlScore * 100, 100);

  // ======================
  // 🔥 HYBRID FINAL SCORE
  // ======================

  let finalScore = (heuristicScore * 0.6) + (mlScore * 0.4);
  finalScore = Math.min(Math.round(finalScore), 100);

  let verdict =
    finalScore > 70 ? "Malicious" :
    finalScore > 40 ? "Suspicious" :
    "Safe";

  return {
    verdict,
    riskScore: finalScore,
    indicators,
    explanation:
      "Hybrid threat analysis combining heuristic phishing detection and lightweight ML-based scoring."
  };
}

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
  if (req.action === "ANALYZE_EMAIL") {
    const result = HybridThreatDetector(req.email);

    chrome.storage.local.set({ analysis: result });
    sendResponse(result);
    return true; // MV3 safe async handling
  }
});
