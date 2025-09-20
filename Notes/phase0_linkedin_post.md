# LinkedIn Post – Series 2: Phase 0

## DevSecOps Live Portfolio | Series 2 – Phase 0  
*From “Hello, World” to Hardened Microservices*

---

**Phase 0 is complete!**  
We’ve kicked off Series 2 with a clean slate and security-first mindset.

### What Was Done:
🔸 Cleaned & prepped a fresh Ubuntu system  
🔸 Initialized a full monorepo structure (`frontend`, `backend`, `prisma`, `docker`, `scripts`)  
🔸 Bootstrapped a **Next.js frontend** with App Router  
🔸 Created a minimal **Express + GraphQL backend**  
🔸 Set up `.env` + Dockerfile templates  
🔸 Validated all dev tools: Node, Docker, MongoDB CLI, Git

### Tech Stack Highlights:
  **Node 18**, `nvm`, `mongosh`, `Docker CE`
  Frontend: `Next.js` (App Router)
  Backend: `Express`, `Apollo GraphQL`
  Future-proof structure for CI/CD, RBAC, and Shift-Left Security

> Goal: Build a **hardened, role-aware, and auditable microservice app**, deployed via **Fly.io**, tested in CI, and monitored in runtime.

---

**Why this matters**:  
Every strong system starts with intentional structure and lean configuration. We're building security **from the first commit** — not patching it later.

---

Next up: **Phase 1**  
CI/CD pipeline with GitHub Actions, Docker build, and automated deploy to Fly.io.