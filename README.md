###################################################################


🜂 GMAIL AI PHISH GUARD 🜂

->** AI-Powered Gmail Threat Engine │
**

**Hybrid phishing detection Chrome Extension built using Manifest V3 architecture.**

_⟁ SYSTEM OVERVIEW_

Gmail AI Phish Guard performs:

▣ Real-time email extraction
▣ Hybrid threat analysis
▣ Risk score generation (0–100%)
▣ Intelligent verdict classification
▣ Full threat intelligence dashboard

Threat Levels:

⟡ SAFE
⟡ SUSPICIOUS
⟡ MALICIOUS

⌬ HYBRID DETECTION ENGINE

Core logic implemented in:

background.js 

background

Architecture:

Heuristic Engine (60%)
        +
Lightweight ML Model (40%)
        =
Final Risk Score

Heuristic Analysis Detects:

⟢ Urgency manipulation
⟢ Credential harvesting patterns
⟢ Suspicious external links
⟢ Attachment bait language

Lightweight ML Scoring:

Keyword-weighted probability scoring.

Final Verdict Logic:

Score > 70    → Malicious
Score 41–70   → Suspicious
Score ≤ 40    → Safe

⌁ EMAIL EXTRACTION LAYER

Handled by:

content.js 

content

Extracts:

Subject

Sender

Email Body

Communicates securely with background service worker.

⧉ EXTENSION CONFIGURATION

Defined in:

manifest.json 

manifest

Features:

⟡ Manifest V3
⟡ Service Worker background script
⟡ Gmail host permissions
⟡ Content script injection
⟡ Popup UI binding

◈ POPUP CONTROL PANEL

Files:

popup.html 

popup


popup.js 

popup

Capabilities:

▸ Analyze active Gmail email
▸ Display dynamic verdict
▸ Show risk percentage
▸ Render detected indicators
▸ Security awareness tip rotation

⟁ INTELLIGENCE DASHBOARD

Files:

report.html 

report


report.js 

report

Dashboard Includes:

◉ Animated Risk Meter
◉ Threat Indicators List
◉ AI Explanation
◉ Recommended Security Actions

⟐ UTILITY MODULE

utils.js 

utils

Risk Color Mapping:

Green → Safe
Orange → Suspicious
Red → Malicious

⧗ AUTHENTICATION INTERFACE (Frontend Demo)

register.html 

register


login.html 

login


success.html 

success

Note:
Frontend-only demo authentication using localStorage.

⎈ INSTALLATION GUIDE
1. git clone https://github.com/yourusername/gmail-ai-phish-guard.git
2. Open chrome://extensions/
3. Enable Developer Mode
4. Click "Load Unpacked"
5. Select project folder
6. Open Gmail
7. Click extension icon

⧉ TECH STACK

▣ JavaScript (ES6)
▣ Chrome Extension Manifest V3
▣ Chrome Storage API
▣ Gmail DOM Parsing
▣ Hybrid AI Heuristic + ML Model
▣ HTML5 / CSS3

⟁ THREAT SIGNALS DETECTED

✦ Urgency-based manipulation
✦ Banking impersonation
✦ Credential harvesting
✦ Suspicious link volume
✦ Prize / lottery scams
✦ Attachment bait

⟡ FUTURE ROADMAP

⟢ TensorFlow.js NLP model
⟢ Real API-based ML scoring
⟢ Link reputation APIs
⟢ Gmail API integration
⟢ Enterprise admin analytics

⟁ SECURITY ASSURANCE

• No external data transmission
• All processing local
• Uses Chrome Storage only
• Lightweight & privacy-aware

⟐ AUTHOR

AI-powered cybersecurity research project
Focused on:

Browser Security

Phishing Detection

Hybrid AI Modeling

Extension Architecture
