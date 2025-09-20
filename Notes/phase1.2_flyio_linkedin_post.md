# LinkedIn Post – Series 2: Phase 1.2 (CI/CD + Deployment)

## DevSecOps Live Portfolio | Phase 1 – CI/CD Pipeline + Fly.io Deployment

---

**Phase 1.2 Complete!**  
In this phase, we focused on building a secure, automated foundation for deploying microservices using GitHub Actions and Fly.io.

### What We Did:
🔸 Set up GitHub Actions CI for both frontend (Next.js) and backend (Express + GraphQL)  
🔸 Implemented matrix CI jobs to lint and test each service  
🔸 Built Dockerfiles for both services  
🔸 Deployed each service to Fly.io with Docker-based builds  
🔸 Fixed remote builder issues by moving Dockerfiles into app directories  
🔸 Added health checks and proper Express bindings for public access  
🔸 Final test successful — both services live and reachable

### Live URLs:
- Frontend: https://devsecops-series2-frontend.fly.dev  
- Backend: https://devsecops-series2-backend.fly.dev/graphql

### Stack Highlights:
- GitHub Actions CI/CD
- Docker build matrix
- Fly.io deployment via remote builder
- Health checks + route binding
- Clean monorepo structure

> This sets the stage for secure, automated delivery. All future phases build on this hardened pipeline.

---

**Why it matters**:  
Automated deployments reduce human error and allow security and functionality checks to be enforced **at every push**. Fly.io’s simplicity + GitHub CI = a production-grade flow for lean teams.

---

Next up: **Phase 2 – OAuth2 Authentication + RBAC + MongoDB**