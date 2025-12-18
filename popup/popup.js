const tips = [
  "Never click unknown links in emails.",
  "Check sender domain carefully.",
  "Urgent threats are usually fake.",
  "Banks never ask passwords via email.",
  "Hover over links before clicking."
];

document.getElementById("tip").innerText =
  tips[Math.floor(Math.random() * tips.length)];

document.getElementById("analyze").onclick = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { action: "EXTRACT_EMAIL" },
      email => {
        if (!email || email.body === "No Body") {
          document.getElementById("status").innerText =
            "❗ Open a Gmail email first";
          return;
        }

        document.getElementById("status").innerText = "🔍 Analyzing...";
        chrome.runtime.sendMessage(
          { action: "ANALYZE_EMAIL", email },
          res => {
            if (res.error) {
              document.getElementById("status").innerText =
                "⚠️ AI error. Try again.";
              return;
            }

            const box = document.getElementById("resultBox");
            box.className = `result ${res.verdict.toLowerCase()}`;
            box.innerHTML = `
              <b>Verdict:</b> ${res.verdict}<br>
              <b>Risk Score:</b> ${res.riskScore}%<br>
              <b>Indicators:</b>
              <ul>${res.indicators.map(i => `<li>${i}</li>`).join("")}</ul>
            `;
            box.classList.remove("hidden");
            document.getElementById("status").innerText = "✔ Analysis Complete";
          }
        );
      }
    );
  });
};

document.getElementById("report").onclick = () => {
  chrome.tabs.create({ url: chrome.runtime.getURL("report/report.html") });
};
