# PKI Setup Demo

This repository contains a static frontend demo and project documents for the PKI / CA certificate management platform.

## Quick Start

1. Clone this repository.
2. Open `index.html` in a browser.
3. The page redirects to `cybersecurity-certificate-portal/index.html`.

No backend service or package installation is required for the current demo.

## Demo Accounts

See `DEMO_ACCOUNTS.txt`.

| Role | Account | Password | Scope |
|---|---|---|---|
| PKI Manager | CyberTeam1 | 123123 | Full management console |
| PKI User | User1 | 321321 | User certificate request demo |

## Main Files

- Frontend demo: `cybersecurity-certificate-portal/index.html`
- Design document: `docs/证书管理设计书.md`
- Legacy animated cover page: `dynamic-home/index.html`

## Demo Notes

- The demo is a static clickable prototype.
- Login is role-based and uses the demo accounts above.
- `PKI Manager` can access management modules such as overview, approval, certificate management, CA management, templates, audit logs, and settings.
- `PKI User` can access the certificate request workflow only.
- High-risk CA operations show a second confirmation dialog and write simulated audit feedback.
