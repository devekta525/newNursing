# Home page design

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/yashmoriyas-projects/v0-home-page-design)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/fEErxKCFPog)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/yashmoriyas-projects/v0-home-page-design](https://vercel.com/yashmoriyas-projects/v0-home-page-design)**

### Backend API configuration

Set this environment variable in Vercel before deploying the frontend:

```bash
API_BASE_URL=https://your-deployed-backend-domain.com/api
```

For local development, `NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api` can still be used with the local Express backend. In production, browser requests go to `/api/backend/*`, and that server-side proxy forwards them to `API_BASE_URL`. This prevents the live site from calling `localhost` or running into browser CORS issues.

Vercel Web Analytics is disabled unless this is set:

```bash
NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED=true
```

## Build your app

Continue building your app on:

**[https://v0.app/chat/fEErxKCFPog](https://v0.app/chat/fEErxKCFPog)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
