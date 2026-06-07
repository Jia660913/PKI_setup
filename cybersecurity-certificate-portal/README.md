# Cybersecurity Certificate Portal

Static clickable frontend prototype for a vehicle cybersecurity PKI / CA operations console.

## Run

Open `index.html` in a browser. From the repository root, opening `../index.html` redirects here automatically.

## Demo Accounts

| Role | Account | Password |
|---|---|---|
| PKI Manager | CyberTeam1 | 123123 |
| PKI User | User1 | 321321 |

## Current Scope

- Cyber Team CA Operations Console
- CA-only topology view
- Selected CA detail tabs
- CA operation command matrix with confirmation for high-risk actions
- Certificate operation queue
- Certificate management table
- Template designer mockup for X.509 fields and custom OID extensions
- Project management mockup
- User approval and user management mockups
- Audit logs
- Engineer role view for User Cert CSR upload and request submission
- EN / 中文 language toggle demo

## Demo Root CA

The Root CA is mocked as `Demo Root CA`. It is intended to represent a future supplier backend Root CA integrated with HSM / cryptographic machine signing.

See `data-demo-root-ca.json` and `../docs/demo_root_ca_info.md`.
