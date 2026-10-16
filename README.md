# Hello World Onboarding Project

A minimal Node.js and Express application for validating a new developer environment.

## Project Structure

```text
hello-world-app/
├── src/
│   └── index.js
├── package.json
├── Dockerfile
├── README.md
└── Simple project.html
```

## Environment Report

This project documentation captures the requested onboarding baseline:

- Operating system: macOS Sonoma or Windows 11 Pro
- Shell: Zsh or PowerShell 7
- Package manager: Homebrew or WinGet
- Editor: Visual Studio Code 1.88 with Prettier, ESLint, and GitLens
- Version control: Git and GitHub CLI 2.44
- Runtime: Node.js 20 LTS and Python 3.11
- Containerization: Docker Desktop 26.0
- API testing: Postman 10.24

The onboarding milestones cover access and security, workstation setup, compliance training, the Hello World validation, and the first pull request. Installation and access claims should be confirmed against the workstation and organization records.

## Run Locally

Install dependencies and start the server:

```bash
npm install
npm start
```

Then open <http://localhost:3000>. The endpoint returns HTTP 200 with a JSON Hello World message.

## Run With Docker

```bash
docker build -t hello-world .
docker run --rm -p 3000:3000 hello-world
```

## Next Steps

After validating the environment, begin assigned Jira work, participate in code reviews, and contribute to the core service modules.

Report prepared by: New Developer / Engineering Onboarding  
Date: October 16, 2026
