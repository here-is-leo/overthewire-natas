```markdown
# Natas Writeup

[![OverTheWire](https://img.shields.io/badge/OverTheWire-Natas-3fb950)](https://overthewire.org/wargames/natas/)
[![GitHub stars](https://img.shields.io/github/stars/here-is-leo/overthewire-natas.svg?style=social)](https://github.com/here-is-leo/overthewire-natas)
[![Latest Release](https://img.shields.io/github/v/release/here-is-leo/overthewire-natas?style=for-the-badge&color=4fc3ff)](https://github.com/here-is-leo/overthewire-natas/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/here-is-leo/overthewire-natas/total?style=for-the-badge&color=a78bfa)](https://github.com/here-is-leo/overthewire-natas/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> A comprehensive, educational walkthrough of the Natas wargame from OverTheWire.

---

## 📖 Table of Contents

- [About This Project](#about-this-project)
- [Project Goals](#project-goals)
- [Features](#features)
- [Structure](#structure)
- [Levels Overview](#levels-overview)
- [Technologies Covered](#technologies-covered)
- [Tools Used](#tools-used)
- [Project Structure](#project-structure)
- [Key Security Lessons](#key-security-lessons)
- [Quick Reference](#quick-reference)
- [Version History](#version-history)
- [Installation & Usage](#installation--usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## About This Project

This repository contains detailed writeups for the **Natas** wargame from [OverTheWire](https://overthewire.org/wargames/natas/), covering levels 0 through 34. Natas is a web security wargame that teaches the fundamentals of web application vulnerabilities through hands-on, practical challenges.

Each level is documented with a focus on understanding the underlying vulnerability, the exploitation process, and the defensive measures required to prevent it in real-world applications.

### Why Natas?

Natas is one of the best wargames for learning web security because:
- It starts with basic concepts and progressively increases in difficulty
- Each level introduces a new vulnerability or technique
- It requires minimal setup — only a browser and basic tools
- It covers both client-side and server-side vulnerabilities
- It's completely free and accessible online

### 🌍 Bilingual Support

This writeup is available in **two languages**:
- 🇬🇧 **English** — Full documentation of all levels
- 🇮🇷 **Persian (Farsi)** — Complete translation for Persian-speaking learners

---

## Project Goals

This project was created with the following objectives:

| Goal | Description |
|------|-------------|
| **Educational** | Provide clear, step-by-step explanations of each vulnerability |
| **Technical** | Include practical commands, code examples, and exploitation techniques |
| **Defensive** | Explain how to prevent each vulnerability in real-world applications |
| **Bilingual** | Available in both English and Persian (Farsi) |
| **Professional** | Demonstrate technical and analytical skills through high-quality documentation |
| **Accessible** | Designed for beginners while remaining valuable for experienced developers |

---

## Features

| Feature | Description |
|---------|-------------|
| 📚 **35 Level Writeups** | Complete walkthroughs for all Natas levels (00-34) |
| 🌍 **Bilingual Support** | Complete English and Persian versions |
| 🎨 **Neon UI Theme** | Dark, cyber-inspired design with particle effects |
| 🖥️ **Interactive Terminal** | Live terminal simulation on the homepage |
| 📊 **Progress Tracking** | Sidebar shows current level and scroll progress |
| 🏷️ **Difficulty Badges** | Color-coded: Very Easy → Very Hard |
| 📱 **Mobile Responsive** | Works on all screen sizes |
| ☕ **Donation Banner** | Support the creator with a coffee |
| 🔍 **Scroll Progress Bar** | Visual indicator of scroll position |
| ⚡ **Particle Network** | Dynamic background particle animations |

---

## Structure

Each level writeup follows a consistent structure to ensure clarity and ease of learning:

```
┌─────────────────────────────────────────────────────────────┐
│ Level X → Natas X+1                                       │
├─────────────────────────────────────────────────────────────┤
│ 🔑 Key Concepts    → Security topics involved             │
│ 📖 Overview        → What the level presents              │
│ 🔍 Initial Analysis → Approach to understanding           │
│ 🛠️ Solution        → Step-by-step resolution             │
│ 💻 Commands & Code → Practical implementation             │
│ ❓ Why It Works    → Technical explanation                │
│ 🛡️ Defense Measures → How to prevent it                  │
│ 📝 Key Takeaways   → Summary of insights                  │
│ 🔐 Credentials     → Username & password for next level   │
└─────────────────────────────────────────────────────────────┘
```

---

## Levels Overview

| Section | Levels | Topics |
|---------|--------|--------|
| **01 — Fundamentals** | 00–05 | View Source, JS Bypass, Directory Listing, robots.txt, HTTP Referer, Cookie Manipulation |
| **02 — Server-Side** | 06–10 | PHP Include, Path Traversal, Encoding Bypass, Command Injection |
| **03 — Crypto & Upload** | 11–15 | XOR Encryption, File Upload (Client/Server), SQL Injection, Blind SQL |
| **04 — Blind Injection** | 16–20 | Blind Command Injection, Time-Based SQLi, Session ID Attacks |
| **05 — Advanced Injection** | 21–25 | Session Data Injection, HTTP Header Injection, Type Juggling, Log Poisoning |
| **06 — Object & SQL** | 26–30 | PHP Object Injection, UNION-Based SQLi, Stacked Queries, Filter Bypass |
| **07 — Upload & XXE** | 31–34 | File Upload (Image), XXE (Basic, File Inclusion, DTD-Based) |

### Difficulty Distribution

```
📊 35 Levels Total
├── 🟢 Very Easy   : 5 levels  (00, 01, 02, 03)
├── 🟢 Easy        : 7 levels  (04, 05, 06, 07)
├── 🟡 Medium      : 2 levels  (08, 09)
├── 🟠 Hard        : 10 levels (10–19)
└── 🔴 Very Hard   : 11 levels (20–34)
```

---

## Technologies Covered

| Category | Technologies |
|----------|--------------|
| **Frontend** | HTML, CSS, JavaScript, Browser DevTools |
| **Backend** | PHP (Include, Session, Serialization, Type Juggling) |
| **Database** | SQL (Injection, Blind SQL, UNION, Stacked Queries) |
| **System** | Command Injection, Shell Metacharacters |
| **Data Formats** | XML (XXE), JSON, Base64, Hex Encoding |
| **Network** | HTTP Headers (Referer, Location, Cookies) |
| **Security** | Authentication Bypass, Session Management, File Upload Security |
| **Cryptography** | XOR Encryption, Encoding/Decoding |

---

## Tools Used

| Tool | Purpose |
|------|---------|
| **Browser DevTools** | Source inspection, cookie editing, network analysis |
| **curl** | HTTP requests with custom headers, automation |
| **Burp Suite** | Intercepting and modifying requests, Intruder for brute force |
| **Python** | Automation for blind injection, brute force, data extraction |
| **Netcat / nc** | Listening for out-of-band XXE exfiltration |
| **xxd / base64** | Command-line encoding/decoding |

---

## Project Structure

```
natas-writeup/
│
├── en-natas/                          # 🇬🇧 English version
│   ├── index.html                     # Main landing page (level list + writeup index)
│   ├── overview.html                  # Project overview & about page
│   └── Levels/
│       ├── en-00.html                 # Level 0 → 1 (View Source)
│       ├── en-01.html                 # Level 1 → 2 (Right-click Block)
│       ├── en-02.html                 # Level 2 → 3 (Hidden File)
│       ├── en-03.html                 # Level 3 → 4 (robots.txt)
│       ├── en-04.html                 # Level 4 → 5 (HTTP Referer)
│       ├── en-05.html                 # Level 5 → 6 (Cookie Manipulation)
│       ├── en-06.html                 # Level 6 → 7 (PHP Include)
│       ├── en-07.html                 # Level 7 → 8 (Path Traversal)
│       ├── en-08.html                 # Level 8 → 9 (Encoding Bypass)
│       ├── en-09.html                 # Level 9 → 10 (Command Injection)
│       ├── en-10.html                 # Level 10 → 11 (Command Injection - Filter)
│       ├── en-11.html                 # Level 11 → 12 (XOR Encryption)
│       ├── en-12.html                 # Level 12 → 13 (File Upload - Client)
│       ├── en-13.html                 # Level 13 → 14 (File Upload - Server)
│       ├── en-14.html                 # Level 14 → 15 (SQL Injection)
│       ├── en-15.html                 # Level 15 → 16 (Blind SQL - Boolean)
│       ├── en-16.html                 # Level 16 → 17 (Blind Command Injection)
│       ├── en-17.html                 # Level 17 → 18 (Blind SQL - Time-Based)
│       ├── en-18.html                 # Level 18 → 19 (Session ID Prediction)
│       ├── en-19.html                 # Level 19 → 20 (Session ID Encoding)
│       ├── en-20.html                 # Level 20 → 21 (Session Data Injection)
│       ├── en-21.html                 # Level 21 → 22 (Cross-Site Session)
│       ├── en-22.html                 # Level 22 → 23 (HTTP Header Injection)
│       ├── en-23.html                 # Level 23 → 24 (PHP Type Juggling)
│       ├── en-24.html                 # Level 24 → 25 (Type Juggling Advanced)
│       ├── en-25.html                 # Level 25 → 26 (LFI - Log Poisoning)
│       ├── en-26.html                 # Level 26 → 27 (PHP Object Injection)
│       ├── en-27.html                 # Level 27 → 28 (SQL Injection - UNION)
│       ├── en-28.html                 # Level 28 → 29 (SQL Injection - Stacked)
│       ├── en-29.html                 # Level 29 → 30 (Command Injection - Advanced)
│       ├── en-30.html                 # Level 30 → 31 (SQL Injection - Filter)
│       ├── en-31.html                 # Level 31 → 32 (File Upload - Image)
│       ├── en-32.html                 # Level 32 → 33 (XXE - Basic)
│       ├── en-33.html                 # Level 33 → 34 (XXE - File Inclusion)
│       └── en-34.html                 # Level 34 → 35 (XXE - DTD-Based)
│
├── fa-natas/                          # 🇮🇷 Persian (Farsi) version
│   ├── index.html                     # Main landing page (Persian)
│   ├── overview.html                  # Project overview (Persian)
│   └── Levels/
│       ├── fa-00.html                 # Level 0 → 1 (Persian)
│       ├── fa-01.html                 # Level 1 → 2 (Persian)
│       ├── fa-02.html                 # Level 2 → 3 (Persian)
│       ├── fa-03.html                 # Level 3 → 4 (Persian)
│       ├── fa-04.html                 # Level 4 → 5 (Persian)
│       ├── fa-05.html                 # Level 5 → 6 (Persian)
│       ├── fa-06.html                 # Level 6 → 7 (Persian)
│       ├── fa-07.html                 # Level 7 → 8 (Persian)
│       ├── fa-08.html                 # Level 8 → 9 (Persian)
│       ├── fa-09.html                 # Level 9 → 10 (Persian)
│       ├── fa-10.html                 # Level 10 → 11 (Persian)
│       ├── fa-11.html                 # Level 11 → 12 (Persian)
│       ├── fa-12.html                 # Level 12 → 13 (Persian)
│       ├── fa-13.html                 # Level 13 → 14 (Persian)
│       ├── fa-14.html                 # Level 14 → 15 (Persian)
│       ├── fa-15.html                 # Level 15 → 16 (Persian)
│       ├── fa-16.html                 # Level 16 → 17 (Persian)
│       ├── fa-17.html                 # Level 17 → 18 (Persian)
│       ├── fa-18.html                 # Level 18 → 19 (Persian)
│       ├── fa-19.html                 # Level 19 → 20 (Persian)
│       ├── fa-20.html                 # Level 20 → 21 (Persian)
│       ├── fa-21.html                 # Level 21 → 22 (Persian)
│       ├── fa-22.html                 # Level 22 → 23 (Persian)
│       ├── fa-23.html                 # Level 23 → 24 (Persian)
│       ├── fa-24.html                 # Level 24 → 25 (Persian)
│       ├── fa-25.html                 # Level 25 → 26 (Persian)
│       ├── fa-26.html                 # Level 26 → 27 (Persian)
│       ├── fa-27.html                 # Level 27 → 28 (Persian)
│       ├── fa-28.html                 # Level 28 → 29 (Persian)
│       ├── fa-29.html                 # Level 29 → 30 (Persian)
│       ├── fa-30.html                 # Level 30 → 31 (Persian)
│       ├── fa-31.html                 # Level 31 → 32 (Persian)
│       ├── fa-32.html                 # Level 32 → 33 (Persian)
│       ├── fa-33.html                 # Level 33 → 34 (Persian)
│       └── fa-34.html                 # Level 34 → 35 (Persian)
│
├── Versions/                          # 📦 Version history
│   └── CHANGELOG.md                   # Full changelog
│
├── assets/                            # 🎨 Shared assets (optional)
│   ├── css/
│   │   └── style.css                  # Shared styles (if extracted)
│   ├── js/
│   │   └── main.js                    # Shared JavaScript
│   └── images/
│       └── logo.png                   # Project logo
│
├── natas-structure.txt                # 📄 Structure document
├── README.md                          # 📖 This file
└── .gitignore                         # 🚫 Git ignore file
```

---

## Key Security Lessons

Throughout this writeup series, the following security principles are emphasized:

### 1. Never Trust Client-Side Data
Everything sent to the browser — HTML comments, JavaScript, cookies — is fully inspectable and modifiable by the user.

### 2. Implement Server-Side Validation
Authentication, authorization, and input validation must always be performed on the server, never solely on the client.

### 3. Secure Configuration Is Critical
- Disable directory listing on web servers
- Don't use `robots.txt` to hide sensitive paths
- Store sensitive files outside the web root

### 4. Avoid Security by Obscurity
Hiding something does not make it secure. Attackers will find it.

### 5. Use Cryptographic Signing
Protect cookies and client-side state with cryptographic signatures to prevent tampering.

### 6. Use Prepared Statements
Parameterized queries are the most effective defense against SQL injection. No other defense is as reliable.

### 7. Disable External Entities in XML Parsers
XXE attacks can read local files and perform SSRF. Always disable external entity resolution.

### 8. Never Deserialize Untrusted Data
PHP object injection can lead to remote code execution. Use JSON instead of `serialize()`/`unserialize()`.

### 9. Validate File Uploads Thoroughly
Check file type, content, size, and store uploaded files outside the web root. Re-encode images to remove embedded code.

### 10. Use Strong Session Management
Session IDs must be cryptographically random with high entropy. Never use sequential or predictable IDs.

---

## Quick Reference

| Level | Vulnerability | Difficulty |
|-------|---------------|------------|
| 00 | HTML Comment | 🟢 Very Easy |
| 01 | JavaScript Bypass | 🟢 Very Easy |
| 02 | Directory Listing | 🟢 Very Easy |
| 03 | robots.txt Info Disclosure | 🟢 Very Easy |
| 04 | Referer Spoofing | 🟢 Easy |
| 05 | Cookie Manipulation | 🟢 Easy |
| 06 | PHP Include | 🟢 Easy |
| 07 | Path Traversal | 🟢 Easy |
| 08 | Encoding Bypass | 🟡 Medium |
| 09 | Command Injection | 🟡 Medium |
| 10 | Command Injection (Filter) | 🟠 Hard |
| 11 | XOR Encryption | 🟠 Hard |
| 12 | File Upload (Client-Side) | 🟠 Hard |
| 13 | File Upload (Server-Side) | 🟠 Hard |
| 14 | SQL Injection | 🟠 Hard |
| 15 | Blind SQL (Boolean-Based) | 🟠 Hard |
| 16 | Blind Command Injection | 🟠 Hard |
| 17 | Blind SQL (Time-Based) | 🟠 Hard |
| 18 | Session ID Prediction | 🟠 Hard |
| 19 | Session ID Encoding | 🟠 Hard |
| 20 | Session Data Injection | 🔴 Very Hard |
| 21 | Cross-Site Session | 🔴 Very Hard |
| 22 | Header Injection | 🔴 Very Hard |
| 23 | PHP Type Juggling | 🔴 Very Hard |
| 24 | PHP Type Juggling (Advanced) | 🔴 Very Hard |
| 25 | LFI — Log Poisoning | 🔴 Very Hard |
| 26 | PHP Object Injection | 🔴 Very Hard |
| 27 | SQL Injection (UNION) | 🔴 Very Hard |
| 28 | SQL Injection (Stacked) | 🔴 Very Hard |
| 29 | Command Injection (Advanced) | 🔴 Very Hard |
| 30 | SQL Injection (Filter Bypass) | 🔴 Very Hard |
| 31 | File Upload (Image Verification) | 🔴 Very Hard |
| 32 | XXE — External Entity | 🔴 Very Hard |
| 33 | XXE — File Inclusion | 🔴 Very Hard |
| 34 | XXE — DTD-Based | 🔴 Very Hard |

---

## Version History

[![Latest Release](https://img.shields.io/github/v/release/here-is-leo/overthewire-natas?style=for-the-badge&color=4fc3ff)](https://github.com/here-is-leo/overthewire-natas/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/here-is-leo/overthewire-natas/total?style=for-the-badge&color=a78bfa)](https://github.com/here-is-leo/overthewire-natas/releases)

| Version | Date | Status | Download |
|---------|------|--------|----------|
| **v0.6.0** | 2026-06-26 | ✅ **Current** | [Download](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.6.0) |
| **v0.5.0** | 2026-06-25 | ✅ Supported | [Download](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.5.0) |
| **v0.4.0** | 2026-06-23 | ✅ Supported | [Download](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.4.0) |
| **v0.3.0** | 2026-06-20 | ✅ Supported | [Download](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.3.0) |
| **v0.2.0** | 2026-06-17 | ✅ Supported | [Download](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.2.0) |
| **v0.1.0** | 2026-06-13 | ✅ Supported | [Download](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.1.0) |

### 📦 What's New in v0.6.0

- 🎉 **Complete bilingual support** — All 35 levels in both English and Persian
- 📘 **Project overview page** — Comprehensive about page
- 🎨 **Vazirmatn font** — Persian typography support
- 🔗 **Fixed navigation links** — Improved user experience
- 📱 **Mobile responsive** — Works on all devices
- 📝 **Complete documentation** — README, CHANGELOG, LICENSE

For a complete list of changes, see the [CHANGELOG.md](CHANGELOG.md).

---

## Installation & Usage

### Option 1: View Online
Visit the GitHub Pages URL to view the writeup in your browser.

### Option 2: Clone Locally

```bash
git clone https://github.com/here-is-leo/overthewire-natas.git
cd overthewire-natas

# English version:
open en-natas/index.html

# Persian version:
open fa-natas/index.html
```

### Option 3: Serve with Python

```bash
python3 -m http.server 8000
```

Then navigate to:
- `http://localhost:8000/en-natas/` — English version
- `http://localhost:8000/fa-natas/` — Persian version

---

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Make your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

This project is for educational purposes only. Use responsibly and only on systems you have permission to test.

MIT License — see the LICENSE file for details.

```
MIT License

Copyright (c) 2025 Leo (Ilya Farahani)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Acknowledgments

- [OverTheWire](https://overthewire.org/) — For creating the Natas wargame and providing an incredible platform for learning
- [OWASP](https://owasp.org/) — For web security education resources and the OWASP Top 10
- [PortSwigger](https://portswigger.net/) — For Burp Suite and excellent web security content
- **The Security Community** — For continuous knowledge sharing and collaboration

---

## Author

**Leo (Ilya Farahani)**

- 🌐 GitHub: [github.com/here-is-leo](https://github.com/here-is-leo)
- 🔗 LinkedIn: [linkedin.com/in/ilya-farahani-2160103b0](https://www.linkedin.com/in/ilya-farahani-2160103b0)
- 💬 Telegram: [t.me/Here_is_leo](https://t.me/Here_is_leo)
- 📧 Email: ilyafarahanii@gmail.com

Feel free to reach out for questions, collaboration, or feedback!

---

## Star the Project

If you found this writeup helpful, please consider starring the repository on GitHub!

[![GitHub stars](https://img.shields.io/github/stars/here-is-leo/overthewire-natas.svg?style=social)](https://github.com/here-is-leo/overthewire-natas)

---

<div align="center">

**🌟 Happy Hacking! 🚀**

*"Security is not a product, but a process." — Bruce Schneier*

</div>

---

---

# راهنمای ناتاس

[![OverTheWire](https://img.shields.io/badge/OverTheWire-Natas-3fb950)](https://overthewire.org/wargames/natas/)
[![GitHub stars](https://img.shields.io/github/stars/here-is-leo/overthewire-natas.svg?style=social)](https://github.com/here-is-leo/overthewire-natas)
[![Latest Release](https://img.shields.io/github/v/release/here-is-leo/overthewire-natas?style=for-the-badge&color=4fc3ff)](https://github.com/here-is-leo/overthewire-natas/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/here-is-leo/overthewire-natas/total?style=for-the-badge&color=a78bfa)](https://github.com/here-is-leo/overthewire-natas/releases)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/HTML-5-orange)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-blue)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> یک راهنمای جامع و آموزشی برای بازی جنگی ناتاس از OverTheWire.

---

## 📖 فهرست مطالب

- [درباره پروژه](#درباره-پروژه)
- [اهداف پروژه](#اهداف-پروژه)
- [ویژگی‌ها](#ویژگی‌ها)
- [ساختار](#ساختار)
- [مرور سطوح](#مرور-سطوح)
- [فناوری‌های پوشش داده شده](#فناوری‌های-پوشش-داده-شده)
- [ابزارهای استفاده شده](#ابزارهای-استفاده-شده)
- [ساختار پروژه](#ساختار-پروژه)
- [درس‌های کلیدی امنیتی](#درس‌های-کلیدی-امنیتی)
- [مرجع سریع](#مرجع-سریع)
- [تاریخچه نسخه‌ها](#تاریخچه-نسخه‌ها)
- [نصب و استفاده](#نصب-و-استفاده)
- [مشارکت](#مشارکت)
- [مجوز](#مجوز)
- [قدردانی](#قدردانی)

---

## درباره پروژه

این مخزن شامل راهنمای کامل بازی **ناتاس** از [OverTheWire](https://overthewire.org/wargames/natas/) است که سطوح ۰ تا ۳۴ را پوشش می‌دهد. ناتاس یک بازی جنگی در حوزه امنیت وب است که مفاهیم بنیادین آسیب‌پذیری‌های برنامه‌های وب را از طریق چالش‌های عملی و دستی آموزش می‌دهد.

هر سطح با تمرکز بر درک آسیب‌پذیری زیربنایی، فرآیند بهره‌برداری و اقدامات دفاعی مورد نیاز برای جلوگیری از آن در برنامه‌های واقعی مستند شده است.

### چرا ناتاس؟

ناتاس یکی از بهترین بازی‌های جنگی برای یادگیری امنیت وب است زیرا:
- با مفاهیم پایه شروع می‌شود و به تدریج دشواری آن افزایش می‌یابد
- هر سطح یک آسیب‌پذیری یا تکنیک جدید را معرفی می‌کند
- به حداقل تنظیمات نیاز دارد — فقط یک مرورگر و ابزارهای اولیه
- هر دو آسیب‌پذیری سمت کلاینت و سمت سرور را پوشش می‌دهد
- کاملاً رایگان و به صورت آنلاین در دسترس است

### 🌍 پشتیبانی دو زبانه

این راهنما به **دو زبان** در دسترس است:
- 🇬🇧 **انگلیسی** — مستندات کامل تمام سطوح
- 🇮🇷 **فارسی** — ترجمه کامل برای فارسی‌زبانان

---

## اهداف پروژه

این پروژه با اهداف زیر ایجاد شده است:

| هدف | توضیح |
|-----|-------|
| **آموزشی** | ارائه توضیحات واضح و گام‌به‌گام برای هر آسیب‌پذیری |
| **فنی** | شامل دستورات عملی، مثال‌های کد و تکنیک‌های بهره‌برداری |
| **دفاعی** | توضیح نحوه جلوگیری از هر آسیب‌پذیری در برنامه‌های واقعی |
| **دو زبانه** | در دسترس به دو زبان انگلیسی و فارسی |
| **حرفه‌ای** | نشان دادن مهارت‌های فنی و تحلیلی از طریق مستندسازی با کیفیت بالا |
| **دسترس‌پذیر** | طراحی شده برای مبتدیان و در عین حال ارزشمند برای توسعه‌دهندگان با تجربه |

---

## ویژگی‌ها

| ویژگی | توضیح |
|-------|-------|
| 📚 **۳۵ سطح راهنما** | راهنمای کامل برای تمام سطوح ناتاس (۰۰-۳۴) |
| 🌍 **پشتیبانی دو زبانه** | نسخه‌های کامل انگلیسی و فارسی |
| 🎨 **تم رابط کاربری نئونی** | طراحی تاریک الهام‌گرفته از سایبر با افکت‌های ذرات |
| 🖥️ **ترمینال تعاملی** | شبیه‌سازی ترمینال زنده در صفحه اصلی |
| 📊 **ردیابی پیشرفت** | نوار کناری نمایش سطح فعلی و پیشرفت اسکرول |
| 🏷️ **برچسب‌های سختی** | کدگذاری رنگی: خیلی آسان → خیلی سخت |
| 📱 **پاسخگوی موبایل** | کار بر روی تمام اندازه‌های صفحه |
| ☕ **بنر کمک مالی** | حمایت از سازنده با یک قهوه |
| 🔍 **نوار پیشرفت اسکرول** | نشانگر بصری موقعیت اسکرول |
| ⚡ **شبکه ذرات** | انیمیشن‌های پس‌زمینه پویا |

---

## ساختار

هر سطح راهنما از ساختاری منسجم برای اطمینان از وضوح و سهولت یادگیری پیروی می‌کند:

```
┌─────────────────────────────────────────────────────────────┐
│ سطح X → ناتاس X+1                                        │
├─────────────────────────────────────────────────────────────┤
│ 🔑 مفاهیم کلیدی  → موضوعات امنیتی درگیر                   │
│ 📖 مرور          → آنچه سطح ارائه می‌دهد                  │
│ 🔍 تحلیل اولیه   → رویکرد برای درک                        │
│ 🛠️ راه حل        → راه‌حل گام‌به‌گام                     │
│ 💻 دستورات و کد  → پیاده‌سازی عملی                       │
│ ❓ چرا کار می‌کند → توضیح فنی                            │
│ 🛡️ اقدامات دفاعی → نحوه جلوگیری                         │
│ 📝 نکات کلیدی     → خلاصه Insights                        │
│ 🔐 اعتبارنامه     → نام کاربری و رمز عبور سطح بعدی        │
└─────────────────────────────────────────────────────────────┘
```

---

## مرور سطوح

| بخش | سطوح | موضوعات |
|-----|------|---------|
| **۰۱ — مبانی** | ۰۰–۰۵ | مشاهده سورس، دور زدن JS، لیست دایرکتوری، robots.txt، HTTP Referer، دستکاری کوکی |
| **۰۲ — سمت سرور** | ۰۶–۱۰ | PHP Include، پیمایش مسیر، دور زدن Encoding، تزریق دستورات |
| **۰۳ — رمزنگاری و آپلود** | ۱۱–۱۵ | رمزنگاری XOR، آپلود فایل (کلاینت/سرور)، تزریق SQL، SQL کور |
| **۰۴ — تزریق کور** | ۱۶–۲۰ | تزریق دستور کور، SQL مبتنی بر زمان، حملات شناسه نشست |
| **۰۵ — تزریق پیشرفته** | ۲۱–۲۵ | تزریق داده نشست، تزریق هدر HTTP، Type Juggling، مسمومیت لاگ |
| **۰۶ — آبجکت و SQL** | ۲۶–۳۰ | تزریق آبجکت PHP، SQL مبتنی بر UNION، پرس‌وجوهای پشته‌ای، دور زدن فیلتر |
| **۰۷ — آپلود و XXE** | ۳۱–۳۴ | آپلود فایل (تصویر)، XXE (مقدماتی، شامل فایل، مبتنی بر DTD) |

### توزیع سختی

```
📊 مجموع ۳۵ سطح
├── 🟢 خیلی آسان : ۵ سطح  (۰۰, ۰۱, ۰۲, ۰۳)
├── 🟢 آسان      : ۷ سطح  (۰۴, ۰۵, ۰۶, ۰۷)
├── 🟡 متوسط     : ۲ سطح  (۰۸, ۰۹)
├── 🟠 سخت       : ۱۰ سطح (۱۰–۱۹)
└── 🔴 خیلی سخت  : ۱۱ سطح (۲۰–۳۴)
```

---

## فناوری‌های پوشش داده شده

| دسته | فناوری‌ها |
|------|-----------|
| **فرانت‌اند** | HTML، CSS، جاوااسکریپت، ابزارهای توسعه‌دهنده مرورگر |
| **بک‌اند** | PHP (Include، نشست، سریال‌سازی، Type Juggling) |
| **پایگاه داده** | SQL (تزریق، SQL کور، UNION، پرس‌وجوهای پشته‌ای) |
| **سیستم** | تزریق دستورات، کاراکترهای خاص شل |
| **فرمت‌های داده** | XML (XXE)، JSON، Base64، کدگذاری Hex |
| **شبکه** | هدرهای HTTP (Referer، Location، کوکی‌ها) |
| **امنیت** | دور زدن احراز هویت، مدیریت نشست، امنیت آپلود فایل |
| **رمزنگاری** | رمزنگاری XOR، کدگذاری/رمزگشایی |

---

## ابزارهای استفاده شده

| ابزار | کاربرد |
|-------|--------|
| **ابزارهای توسعه‌دهنده مرورگر** | بازرسی سورس، ویرایش کوکی، تحلیل شبکه |
| **curl** | درخواست‌های HTTP با هدرهای سفارشی، اتوماسیون |
| **Burp Suite** | رهگیری و تغییر درخواست‌ها، Intruder برای brute force |
| **پایتون** | اتوماسیون برای تزریق کور، brute force، استخراج داده |
| **Netcat / nc** | گوش دادن برای خروج داده OOB XXE |
| **xxd / base64** | کدگذاری/رمزگشایی خط فرمان |

---

## ساختار پروژه

```
natas-writeup/
│
├── en-natas/                          # 🇬🇧 نسخه انگلیسی
│   ├── index.html                     # صفحه اصلی (لیست سطوح + راهنما)
│   ├── overview.html                  # مرور پروژه و صفحه درباره
│   └── Levels/
│       ├── en-00.html                 # سطح ۰ → ۱ (مشاهده سورس)
│       ├── en-01.html                 # سطح ۱ → ۲ (مسدودسازی کلیک راست)
│       ├── en-02.html                 # سطح ۲ → ۳ (فایل مخفی)
│       ├── en-03.html                 # سطح ۳ → ۴ (robots.txt)
│       ├── en-04.html                 # سطح ۴ → ۵ (HTTP Referer)
│       ├── en-05.html                 # سطح ۵ → ۶ (دستکاری کوکی)
│       ├── en-06.html                 # سطح ۶ → ۷ (PHP Include)
│       ├── en-07.html                 # سطح ۷ → ۸ (پیمایش مسیر)
│       ├── en-08.html                 # سطح ۸ → ۹ (دور زدن Encoding)
│       ├── en-09.html                 # سطح ۹ → ۱۰ (تزریق دستورات)
│       ├── en-10.html                 # سطح ۱۰ → ۱۱ (تزریق دستورات - فیلتر)
│       ├── en-11.html                 # سطح ۱۱ → ۱۲ (رمزنگاری XOR)
│       ├── en-12.html                 # سطح ۱۲ → ۱۳ (آپلود فایل - کلاینت)
│       ├── en-13.html                 # سطح ۱۳ → ۱۴ (آپلود فایل - سرور)
│       ├── en-14.html                 # سطح ۱۴ → ۱۵ (تزریق SQL)
│       ├── en-15.html                 # سطح ۱۵ → ۱۶ (SQL کور - بولین)
│       ├── en-16.html                 # سطح ۱۶ → ۱۷ (تزریق دستور کور)
│       ├── en-17.html                 # سطح ۱۷ → ۱۸ (SQL کور - زمان)
│       ├── en-18.html                 # سطح ۱۸ → ۱۹ (پیش‌بینی شناسه نشست)
│       ├── en-19.html                 # سطح ۱۹ → ۲۰ (کدگذاری شناسه نشست)
│       ├── en-20.html                 # سطح ۲۰ → ۲۱ (تزریق داده نشست)
│       ├── en-21.html                 # سطح ۲۱ → ۲۲ (نشست بین سایتی)
│       ├── en-22.html                 # سطح ۲۲ → ۲۳ (تزریق هدر HTTP)
│       ├── en-23.html                 # سطح ۲۳ → ۲۴ (Type Juggling PHP)
│       ├── en-24.html                 # سطح ۲۴ → ۲۵ (Type Juggling پیشرفته)
│       ├── en-25.html                 # سطح ۲۵ → ۲۶ (LFI - مسمومیت لاگ)
│       ├── en-26.html                 # سطح ۲۶ → ۲۷ (تزریق آبجکت PHP)
│       ├── en-27.html                 # سطح ۲۷ → ۲۸ (SQL - UNION)
│       ├── en-28.html                 # سطح ۲۸ → ۲۹ (SQL - پشته‌ای)
│       ├── en-29.html                 # سطح ۲۹ → ۳۰ (تزریق دستورات - پیشرفته)
│       ├── en-30.html                 # سطح ۳۰ → ۳۱ (SQL - دور زدن فیلتر)
│       ├── en-31.html                 # سطح ۳۱ → ۳۲ (آپلود فایل - تصویر)
│       ├── en-32.html                 # سطح ۳۲ → ۳۳ (XXE - مقدماتی)
│       ├── en-33.html                 # سطح ۳۳ → ۳۴ (XXE - شامل فایل)
│       └── en-34.html                 # سطح ۳۴ → ۳۵ (XXE - مبتنی بر DTD)
│
├── fa-natas/                          # 🇮🇷 نسخه فارسی
│   ├── index.html                     # صفحه اصلی (فارسی)
│   ├── overview.html                  # مرور پروژه (فارسی)
│   └── Levels/
│       ├── fa-00.html                 # سطح ۰ → ۱ (فارسی)
│       ├── fa-01.html                 # سطح ۱ → ۲ (فارسی)
│       ├── fa-02.html                 # سطح ۲ → ۳ (فارسی)
│       ├── fa-03.html                 # سطح ۳ → ۴ (فارسی)
│       ├── fa-04.html                 # سطح ۴ → ۵ (فارسی)
│       ├── fa-05.html                 # سطح ۵ → ۶ (فارسی)
│       ├── fa-06.html                 # سطح ۶ → ۷ (فارسی)
│       ├── fa-07.html                 # سطح ۷ → ۸ (فارسی)
│       ├── fa-08.html                 # سطح ۸ → ۹ (فارسی)
│       ├── fa-09.html                 # سطح ۹ → ۱۰ (فارسی)
│       ├── fa-10.html                 # سطح ۱۰ → ۱۱ (فارسی)
│       ├── fa-11.html                 # سطح ۱۱ → ۱۲ (فارسی)
│       ├── fa-12.html                 # سطح ۱۲ → ۱۳ (فارسی)
│       ├── fa-13.html                 # سطح ۱۳ → ۱۴ (فارسی)
│       ├── fa-14.html                 # سطح ۱۴ → ۱۵ (فارسی)
│       ├── fa-15.html                 # سطح ۱۵ → ۱۶ (فارسی)
│       ├── fa-16.html                 # سطح ۱۶ → ۱۷ (فارسی)
│       ├── fa-17.html                 # سطح ۱۷ → ۱۸ (فارسی)
│       ├── fa-18.html                 # سطح ۱۸ → ۱۹ (فارسی)
│       ├── fa-19.html                 # سطح ۱۹ → ۲۰ (فارسی)
│       ├── fa-20.html                 # سطح ۲۰ → ۲۱ (فارسی)
│       ├── fa-21.html                 # سطح ۲۱ → ۲۲ (فارسی)
│       ├── fa-22.html                 # سطح ۲۲ → ۲۳ (فارسی)
│       ├── fa-23.html                 # سطح ۲۳ → ۲۴ (فارسی)
│       ├── fa-24.html                 # سطح ۲۴ → ۲۵ (فارسی)
│       ├── fa-25.html                 # سطح ۲۵ → ۲۶ (فارسی)
│       ├── fa-26.html                 # سطح ۲۶ → ۲۷ (فارسی)
│       ├── fa-27.html                 # سطح ۲۷ → ۲۸ (فارسی)
│       ├── fa-28.html                 # سطح ۲۸ → ۲۹ (فارسی)
│       ├── fa-29.html                 # سطح ۲۹ → ۳۰ (فارسی)
│       ├── fa-30.html                 # سطح ۳۰ → ۳۱ (فارسی)
│       ├── fa-31.html                 # سطح ۳۱ → ۳۲ (فارسی)
│       ├── fa-32.html                 # سطح ۳۲ → ۳۳ (فارسی)
│       ├── fa-33.html                 # سطح ۳۳ → ۳۴ (فارسی)
│       └── fa-34.html                 # سطح ۳۴ → ۳۵ (فارسی)
│
├── Versions/                          # 📦 تاریخچه نسخه‌ها
│   └── CHANGELOG.md                   # تاریخچه کامل تغییرات
│
├── assets/                            # 🎨 دارایی‌های مشترک (اختیاری)
│   ├── css/
│   │   └── style.css                  # استایل‌های مشترک
│   ├── js/
│   │   └── main.js                    # جاوااسکریپت مشترک
│   └── images/
│       └── logo.png                   # لوگوی پروژه
│
├── natas-structure.txt                # 📄 سند ساختار
├── README.md                          # 📖 این فایل
└── .gitignore                         # 🚫 فایل Git ignore
```

---

## درس‌های کلیدی امنیتی

در طول این مجموعه راهنما، اصول امنیتی زیر مورد تأکید قرار می‌گیرند:

### ۱. هرگز به داده‌های سمت کلاینت اعتماد نکنید
هر چیزی که به مرورگر ارسال می‌شود — کامنت‌های HTML، جاوااسکریپت، کوکی‌ها — کاملاً قابل بازرسی و تغییر توسط کاربر است.

### ۲. اعتبارسنجی سمت سرور را پیاده‌سازی کنید
احراز هویت، مجوزدهی و اعتبارسنجی ورودی همیشه باید در سمت سرور انجام شود، نه تنها در سمت کلاینت.

### ۳. پیکربندی امن حیاتی است
- لیست دایرکتوری را در سرورهای وب غیرفعال کنید
- از `robots.txt` برای پنهان کردن مسیرهای حساس استفاده نکنید
- فایل‌های حساس را خارج از ریشه وب ذخیره کنید

### ۴. از امنیت از طریق پنهان‌کاری اجتناب کنید
پنهان کردن چیزی به معنای امن بودن آن نیست. مهاجمان آن را پیدا خواهند کرد.

### ۵. از امضای رمزنگاری استفاده کنید
از کوکی‌ها و وضعیت سمت کلاینت با امضای رمزنگاری برای جلوگیری از دستکاری محافظت کنید.

### ۶. از Prepared Statements استفاده کنید
پرس‌وجوهای پارامتری مؤثرترین دفاع در برابر تزریق SQL هستند. هیچ دفاع دیگری به این اندازه قابل اعتماد نیست.

### ۷. موجودیت‌های خارجی را در پردازشگرهای XML غیرفعال کنید
حملات XXE می‌توانند فایل‌های محلی را بخوانند و SSRF انجام دهند. همیشه تفکیک موجودیت خارجی را غیرفعال کنید.

### ۸. هرگز داده‌های غیرقابل اعتماد را Deserialize نکنید
تزریق آبجکت PHP می‌تواند به اجرای کد از راه دور منجر شود. به جای `serialize()`/`unserialize()` از JSON استفاده کنید.

### ۹. آپلود فایل‌ها را به طور کامل اعتبارسنجی کنید
نوع فایل، محتوا، اندازه را بررسی کنید و فایل‌های آپلود شده را خارج از ریشه وب ذخیره کنید. تصاویر را دوباره کدگذاری کنید تا کدهای جاسازی شده حذف شوند.

### ۱۰. از مدیریت نشست قوی استفاده کنید
شناسه‌های نشست باید به صورت رمزنگاری تصادفی با آنتروپی بالا باشند. هرگز از شناسه‌های ترتیبی یا قابل پیش‌بینی استفاده نکنید.

---

## مرجع سریع

| سطح | آسیب‌پذیری | سختی |
|-----|-----------|------|
| ۰۰ | کامنت HTML | 🟢 خیلی آسان |
| ۰۱ | دور زدن جاوااسکریپت | 🟢 خیلی آسان |
| ۰۲ | لیست دایرکتوری | 🟢 خیلی آسان |
| ۰۳ | افشای اطلاعات robots.txt | 🟢 خیلی آسان |
| ۰۴ | جعل Referer | 🟢 آسان |
| ۰۵ | دستکاری کوکی | 🟢 آسان |
| ۰۶ | PHP Include | 🟢 آسان |
| ۰۷ | پیمایش مسیر | 🟢 آسان |
| ۰۸ | دور زدن Encoding | 🟡 متوسط |
| ۰۹ | تزریق دستورات | 🟡 متوسط |
| ۱۰ | تزریق دستورات (فیلتر) | 🟠 سخت |
| ۱۱ | رمزنگاری XOR | 🟠 سخت |
| ۱۲ | آپلود فایل (سمت کلاینت) | 🟠 سخت |
| ۱۳ | آپلود فایل (سمت سرور) | 🟠 سخت |
| ۱۴ | تزریق SQL | 🟠 سخت |
| ۱۵ | SQL کور (بر اساس بولین) | 🟠 سخت |
| ۱۶ | تزریق دستور کور | 🟠 سخت |
| ۱۷ | SQL کور (بر اساس زمان) | 🟠 سخت |
| ۱۸ | پیش‌بینی شناسه نشست | 🟠 سخت |
| ۱۹ | کدگذاری شناسه نشست | 🟠 سخت |
| ۲۰ | تزریق داده نشست | 🔴 خیلی سخت |
| ۲۱ | نشست بین سایتی | 🔴 خیلی سخت |
| ۲۲ | تزریق هدر | 🔴 خیلی سخت |
| ۲۳ | Type Juggling PHP | 🔴 خیلی سخت |
| ۲۴ | Type Juggling PHP (پیشرفته) | 🔴 خیلی سخت |
| ۲۵ | LFI — مسمومیت لاگ | 🔴 خیلی سخت |
| ۲۶ | تزریق آبجکت PHP | 🔴 خیلی سخت |
| ۲۷ | تزریق SQL (UNION) | 🔴 خیلی سخت |
| ۲۸ | تزریق SQL (پشته‌ای) | 🔴 خیلی سخت |
| ۲۹ | تزریق دستورات (پیشرفته) | 🔴 خیلی سخت |
| ۳۰ | تزریق SQL (دور زدن فیلتر) | 🔴 خیلی سخت |
| ۳۱ | آپلود فایل (تأیید تصویر) | 🔴 خیلی سخت |
| ۳۲ | XXE — موجودیت خارجی | 🔴 خیلی سخت |
| ۳۳ | XXE — شامل فایل | 🔴 خیلی سخت |
| ۳۴ | XXE — مبتنی بر DTD | 🔴 خیلی سخت |

---

## تاریخچه نسخه‌ها

[![Latest Release](https://img.shields.io/github/v/release/here-is-leo/overthewire-natas?style=for-the-badge&color=4fc3ff)](https://github.com/here-is-leo/overthewire-natas/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/here-is-leo/overthewire-natas/total?style=for-the-badge&color=a78bfa)](https://github.com/here-is-leo/overthewire-natas/releases)

| نسخه | تاریخ | وضعیت | دانلود |
|------|------|--------|-------|
| **v0.6.0** | ۲۰۲۶-۰۶-۲۶ | ✅ **فعلی** | [دانلود](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.6.0) |
| **v0.5.0** | ۲۰۲۶-۰۶-۲۵ | ✅ پشتیبانی شده | [دانلود](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.5.0) |
| **v0.4.0** | ۲۰۲۶-۰۶-۲۳ | ✅ پشتیبانی شده | [دانلود](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.4.0) |
| **v0.3.0** | ۲۰۲۶-۰۶-۲۰ | ✅ پشتیبانی شده | [دانلود](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.3.0) |
| **v0.2.0** | ۲۰۲۶-۰۶-۱۷ | ✅ پشتیبانی شده | [دانلود](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.2.0) |
| **v0.1.0** | ۲۰۲۶-۰۶-۱۳ | ✅ پشتیبانی شده | [دانلود](https://github.com/here-is-leo/overthewire-natas/releases/tag/v0.1.0) |

### 📦 جدید در نسخه v0.6.0

- 🎉 **پشتیبانی کامل دو زبانه** — تمام ۳۵ سطح به دو زبان انگلیسی و فارسی
- 📘 **صفحه مروری بر پروژه** — صفحه درباره جامع
- 🎨 **فونت وزیرمتن** — پشتیبانی از تایپوگرافی فارسی
- 🔗 **رفع لینک‌های ناوبری** — بهبود تجربه کاربری
- 📱 **پاسخگوی موبایل** — کار بر روی تمام دستگاه‌ها
- 📝 **مستندسازی کامل** — README، CHANGELOG، LICENSE

برای لیست کامل تغییرات، فایل [CHANGELOG.md](CHANGELOG.md) را ببینید.

---

## نصب و استفاده

### گزینه ۱: مشاهده آنلاین
برای مشاهده راهنما در مرورگر خود، به آدرس GitHub Pages مراجعه کنید.

### گزینه ۲: کلون محلی

```bash
git clone https://github.com/here-is-leo/overthewire-natas.git
cd overthewire-natas

# نسخه انگلیسی:
open en-natas/index.html

# نسخه فارسی:
open fa-natas/index.html
```

### گزینه ۳: اجرا با پایتون

```bash
python3 -m http.server 8000
```

سپس به آدرس زیر بروید:
- `http://localhost:8000/en-natas/` — نسخه انگلیسی
- `http://localhost:8000/fa-natas/` — نسخه فارسی

---

## مشارکت

مشارکت‌ها خوش‌آمد هستند! اگر مشکلی پیدا کردید یا پیشنهادی برای بهبود دارید:

۱. مخزن را **Fork** کنید
۲. یک **شاخه جدید** ایجاد کنید (`git checkout -b feature/amazing-feature`)
۳. تغییرات خود را **Commit** کنید (`git commit -m 'Add some amazing feature'`)
۴. به شاخه **Push** کنید (`git push origin feature/amazing-feature`)
۵. یک **Pull Request** باز کنید

---

## مجوز

این پروژه فقط برای اهداف آموزشی است. با مسئولیت خود استفاده کنید و فقط روی سیستم‌هایی که مجوز تست دارید استفاده کنید.

مجوز MIT — برای جزئیات فایل LICENSE را ببینید.

```
MIT License

Copyright (c) 2025 Leo (Ilya Farahani)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## قدردانی

- [OverTheWire](https://overthewire.org/) — برای ایجاد بازی جنگی ناتاس و ارائه یک پلتفرم فوق‌العاده برای یادگیری
- [OWASP](https://owasp.org/) — برای منابع آموزشی امنیت وب و OWASP Top 10
- [PortSwigger](https://portswigger.net/) — برای Burp Suite و محتوای عالی امنیت وب
- **جامعه امنیتی** — برای به اشتراک‌گذاری مداوم دانش و همکاری

---

## نویسنده

**لئو (ایلیا فراهانی)**

- 🌐 گیت‌هاب: [github.com/here-is-leo](https://github.com/here-is-leo)
- 🔗 لینکدین: [linkedin.com/in/ilya-farahani-2160103b0](https://www.linkedin.com/in/ilya-farahani-2160103b0)
- 💬 تلگرام: [t.me/Here_is_leo](https://t.me/Here_is_leo)
- 📧 ایمیل: ilyafarahanii@gmail.com

برای سوالات، همکاری یا بازخورد، خوش آمدید!

---

## ستاره پروژه

اگر این راهنما را مفید یافتید، لطفاً مخزن را در گیت‌هاب ستاره دهید!

[![GitHub stars](https://img.shields.io/github/stars/here-is-leo/overthewire-natas.svg?style=social)](https://github.com/here-is-leo/overthewire-natas)

---

<div align="center">

**🌟 هک کردن مبارک! 🚀**

*"امنیت یک محصول نیست، بلکه یک فرآیند است." — بروس اشنایر*

</div>
```
