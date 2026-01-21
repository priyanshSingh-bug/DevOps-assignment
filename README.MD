# Secure-CRUD: Multi-Container Task Management System

## Project Overview
**Secure-CRUD** is a production-grade Task Management API designed to demonstrate secure container orchestration and automated deployment. The system isolates the application logic and database within a private Docker network, using Nginx as a Reverse Proxy "Gatekeeper."

### Key Features
* **Reverse Proxy:** Nginx manages all incoming traffic on Port 80.
* **Network Isolation:** The App and MongoDB containers are not exposed to the host machine.
* **Security Best Practices:** The App container uses a **non-root user** and an **optimized slim image**.
* **Data Persistence:** MongoDB data is stored in a persistent Docker Volume.
* **CI/CD:** Automated build and push to Docker Hub via GitHub Actions.

---

## System Architecture
The system consists of three isolated services:
1.  **Proxy (Nginx):** The only service mapping port `80:80` to the host.
2.  **App (Node.js):** Private service running the Task Management logic.
3.  **Database (MongoDB):** Private service storing data persistently.

---

## Repository Structure
```text
.
├── src/                 # Application source code (Node.js/Express)
├── nginx/               # Nginx configuration (Reverse Proxy)
├── .github/workflows/   # CI/CD Pipeline (GitHub Actions)
├── docker-compose.yml   # Multi-container orchestration
├── Dockerfile           # Optimized App container instructions
├── deploy.sh            # Automation & Health-check script
├── .gitignore           # Excludes node_modules and env files
└── README.md            # Setup instructions