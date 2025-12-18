function downloadReport() {
  const element = document.getElementById("reportContainer");
  const opt = {
    margin: 0.5,
    filename: "Email_Security_Report.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
  };
  html2pdf().set(opt).from(element).save();
}

chrome.storage.local.get("analysis", data => {
  const a = data.analysis;
  const verdictClass = a.verdict.toLowerCase();

  document.getElementById("content").innerHTML = `
    <div class="card ${verdictClass}">
      <h2>Final Verdict</h2>
      <div class="score-box">${a.verdict}</div>
      <div class="score-box">${a.riskScore}%</div>
    </div>

    <div class="card">
      <h2>Threat Indicators</h2>
      <ul class="indicators">
        ${a.indicators.map(i => `<li>✔ ${i}</li>`).join("")}
      </ul>
    </div>

    <div class="card">
      <h2>AI Explanation</h2>
      <p>${a.explanation}</p>
    </div>

    <div class="card">
      <h2>Recommended Actions</h2>
      <ul>
        <li>Do not click suspicious links</li>
        <li>Never share passwords via email</li>
        <li>Report the email to your organization</li>
        <li>Enable two-factor authentication</li>
      </ul>
    </div>
  `;
});
