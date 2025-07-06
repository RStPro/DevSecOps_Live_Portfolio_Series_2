# LinkedIn Post – Series 2: Phase 1

## DevSecOps Live Portfolio | Phase 1 – CI/CD Pipeline Setup  
*Building Security In From the First Commit*

---

**Phase 1 is complete!**  
We've established a lean and secure CI pipeline using GitHub Actions, Docker, and matrix builds.

### What Was Done:
🔸 Created CI jobs for both frontend (Next.js) and backend (Express + GraphQL)  
🔸 Built Dockerfiles for each service  
🔸 Configured matrix CI jobs with GitHub Actions for parallel builds/tests  
🔸 Added placeholder lint/test scripts  
🔸 Set the foundation for automated deployment via Fly.io  

### Tools Involved:
-  GitHub Actions
-  Docker (frontend & backend builds)
-  Matrix strategy for parallel service testing
-  Placeholder test & lint scripts
-  Monorepo structure for clean CI workflows

> Goal: Ensure every commit is tested, validated, and ready for secure deployment.

---

**Why this matters**:  
In DevSecOps, pipelines are not just about automation — they’re about enforcing trust, security, and code hygiene **early and consistently**.

---

Next up: **Fly.io deployment integration**  
We’ll deploy both services with Docker images and environment secrets securely managed.