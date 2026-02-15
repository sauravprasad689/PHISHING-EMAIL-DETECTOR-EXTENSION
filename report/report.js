chrome.storage.local.get("analysis", data => {
  const a = data.analysis;
  if (!a) return;

  const riskScore = a.riskScore;
  const verdict = a.verdict;

  // Update score text
  document.getElementById("riskScore").innerText = riskScore + "%";
  document.getElementById("verdictText").innerText = verdict;
  document.getElementById("explanationText").innerText = a.explanation;

  // Animate meter
  const meter = document.getElementById("meterFill");
  meter.style.width = riskScore + "%";

  // Change color based on risk
  if (riskScore > 70) {
    meter.style.background = "#ff3b3b";
  } else if (riskScore > 40) {
    meter.style.background = "#ffae00";
  } else {
    meter.style.background = "#00ff9d";
  }

  // Indicators
  const list = document.getElementById("indicatorsList");
  a.indicators.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  });
});
