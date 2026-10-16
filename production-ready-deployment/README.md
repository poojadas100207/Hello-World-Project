# Production-Ready Deployment

Deployment assets for the Express service.

## Local deployment

```bash
docker compose up --build
```

The service is available at `http://localhost:3000`. Stop it with `docker compose down`.

## Configuration

Copy `.env.example` to `.env` and adjust `PORT` when needed. Secrets must be supplied by the deployment platform and must not be committed.

## Included assets

- `Dockerfile`: minimal Node 20 production image
- `docker-compose.yml`: local orchestration and health check
- `.github/workflows/ci.yml`: install, test, and Docker build pipeline
- `scripts/healthcheck.ps1`: PowerShell smoke check
