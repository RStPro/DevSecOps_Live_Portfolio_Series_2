# Series 2: DevSecOps Live Portfolio – From "Hello, World" to Hardened Microservices

This repository documents **Series 2** of the DevSecOps Live Portfolio: a full-stack, security-first journey that transforms a basic application into a production-ready, hardened, user-facing microservice architecture.

## 🚀 Goal

Build a secure microservice-based application with:

* User Authentication
* Role-Based Access Control (RBAC)
* Secure Backend with MongoDB
* CI/CD with Shift-Left Security
* Runtime Hardening (headers, logging, monitoring-ready)

Compatible with **Kali Linux**, **Ubuntu**, and **macOS**.

---

## ✈️ Tech Stack

* **Frontend:** Next.js (App Router)
* **Backend:** Express.js, GraphQL API
* **Database:** MongoDB (via Prisma ORM)
* **Auth:** OAuth2 with PKCE, RBAC
* **Security:** SAST, DAST, Pre-commit Hooks, Secure Headers
* **CI/CD:** GitHub Actions
* **Deployment:** Docker + Fly.io

---

## ✅ Project Structure & Phases

### Phase 0: Setup

* Install dev tools (Node.js, Docker, MongoDB, etc.)
* Bootstrap monorepo
* Define base `.env` and Dockerfiles

### Phase 1: Hello World + CI/CD Pipeline

* Minimal Next.js frontend + Express backend
* CI: Build, Test, Lint
* CD: Deploy to Fly.io with GitHub Actions

### Phase 2: Auth + MongoDB + RBAC

* Implement OAuth2 login
* Use Prisma ORM with MongoDB Atlas
* Add roles and permissions to users
* Protect GraphQL endpoints with RBAC

### Phase 3: Secure Coding + Pre-commit + SAST

* Add pre-commit hooks: lint, secrets, scan
* Integrate SAST tools (e.g., Semgrep)
* Secure headers (Helmet)
* GraphQL query complexity limiting

### Phase 4: DAST + Runtime Protections

* Add test DAST scan (OWASP ZAP) in CI
* Add security headers, rate limiting, logging
* Detect SQLi/Scanner UA via Flask-like backend filters

### Phase 5: Production Hardening

* CI fails on high-severity vulns
* Auto rollback on Fly.io failure
* DB backups, error alerts, health checks

### Phase 6: Audit, Monitoring & Finalization

* Prepare for SIEM integration (log formatting, token redaction)
* Document all security configs
* Polish README, add badges, screenshots

---

## 📁 Folder Structure

```bash
.
├── apps
│   ├── frontend (Next.js)
│   └── backend (Express.js + GraphQL)
├── prisma
├── scripts (DB seed, migrations)
├── .github/workflows
├── docker
├── .env.example
└── README.md
```

---

## 🔐 Security Features Summary

| Feature           | Implemented In |
| ----------------- | -------------- |
| OAuth2 + RBAC     | Phase 2        |
| SAST (Semgrep)    | Phase 3        |
| DAST (OWASP ZAP)  | Phase 4        |
| Pre-commit Hooks  | Phase 3        |
| Secure Headers    | Phase 3 & 4    |
| CI/CD Enforcement | Phase 1–5      |
| Log Filtering     | Phase 4–6      |

---

## 🎓 For Learners

This series is designed to be:

* Hands-on and iterative
* Easy to run on **macOS**, **Ubuntu**, or **Kali Linux**
* Focused on **security-first** principles from the start

---

## 🌐 Live Demo & CI/CD Status

* Fly.io link: *TBD*
* GitHub Actions: ![CI](https://github.com/your-org/your-repo/actions/workflows/ci.yml/badge.svg)

---

## 📅 LinkedIn Posts

Each phase ends with a real-world breakdown post. Follow along for:

* Lessons learned
* Code snippets
* Deployment tips

> Weekly posts start after Phase 1.

---

## ✏️ License

MIT

---

## 🌟 Contributions

Pull requests welcome. For major changes, please open an issue first to discuss.

---

## 🚜 Next Step

Begin [Phase 0: Environment Setup & Bootstrap](./docs/phase0_setup.md)
