
# Gmail AI Phish Guard

AI-powered Gmail phishing, spam, and malicious email detection Chrome Extension.

A hybrid threat detection engine that combines heuristic analysis with lightweight ML scoring to analyze emails directly inside Gmail in real-time.

---

## Project Overview

Gmail AI Phish Guard performs:

* Real-time email extraction from Gmail
* Hybrid threat analysis engine
* Risk score generation (0–100%)
* Email classification: Safe / Suspicious / Malicious
* Full interactive threat intelligence report

This project is built using Chrome Extension Manifest V3 architecture.

---

## Detection Engine Architecture

Core logic implemented in:

background.js 

Hybrid scoring model:

Heuristic Engine (60%)
+
Lightweight ML Scoring (40%)
============================

Final Risk Score

### Heuristic Detection Identifies:

* Urgency manipulation phrases (e.g., "act now", "verify immediately")
* Credential harvesting attempts
* Suspicious external links
* Attachment bait patterns
* Banking impersonation keywords

### Lightweight ML Model

Keyword-weighted scoring system for phishing probability patterns.

### Verdict Logic

* Risk Score > 70 → Malicious
* Risk Score 41–70 → Suspicious
* Risk Score ≤ 40 → Safe

---

## Email Extraction Layer

Handled by:

content.js 

Extracts:

* Subject
* Sender email
* Email body

Data is passed securely to the background service worker for analysis.

---

## Extension Configuration

Defined in:

manifest.json 

Includes:

* Manifest Version 3
* Service Worker background script
* Gmail host permissions
* Content script injection
* Popup interface binding

---

## Popup Control Interface

Files:

popup.html 
popup.js 

Features:

* Analyze active Gmail email
* Display verdict and risk score
* Show threat indicators
* Display rotating security awareness tips

---

## Full Intelligence Report Dashboard

Files:

report.html 
report.js 

Displays:

* Animated risk meter
* Detailed threat indicators list
* AI explanation of score
* Recommended security actions

---

## Utility Module

utils.js 

Maps risk score to visual status colors:

* Green
* Orange
* Red

---

## Authentication UI (Frontend Demo)

register.html 
login.html 
success.html 

Note:
This is a frontend-only demo authentication system using localStorage for simulation purposes.

---

## Project Structure

```
Gmail-AI-Phish-Guard/
│
├── manifest.json
├── background.js
├── content.js
├── utils.js
│
├── popup/
│   ├── popup.html
│   ├── popup.css
│   └── popup.js
│
├── report/
│   ├── report.html
│   ├── report.css
│   └── report.js
│
├── auth/
│   ├── login.html
│   ├── register.html
│   └── success.html
│
└── assets/
```

---

## Installation Guide

1. Clone the repository
   git clone [https://github.com/yourusername/gmail-ai-phish-guard.git](https://github.com/yourusername/gmail-ai-phish-guard.git)

2. Open Chrome and navigate to:
   chrome://extensions/

3. Enable Developer Mode

4. Click "Load Unpacked"

5. Select the project folder

6. Open Gmail and click the extension icon

---

## Technology Stack

* JavaScript (ES6)
* Chrome Extension Manifest V3
* Chrome Storage API
* Gmail DOM Parsing
* HTML5 / CSS3
* Hybrid AI heuristic + lightweight ML model

---
