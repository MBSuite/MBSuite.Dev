# Six Business Suites — Deployment and Login Checklist

The six apps are separate standalone projects. Each has a Vercel project, a
primary project domain, and an explicit Preview deployment. The first deployment
for each new project was assigned to Vercel's `production` target, even though
Preview was requested; those deployments are Ready. Separate Preview deployments
were then created.

Vercel Authentication currently protects the deployments. No Vercel environment
variables are configured for any Suite, so these URLs are not ready for public
customer access, and database connectivity or login has not been verified.

## Suite URLs and login routes

| Suite | Project directory | Primary Vercel domain | Preview deployment | Latest Preview status | App entry | Login page | Login API |
|---|---|---|---|---|---|---|---|
| F&B | `Micro-Business-FNB` | https://micro-business-fnb.vercel.app | https://micro-business-16gen1zsr-mbs9-c3cc.vercel.app | Ready | `/` | `/login` | `POST /api/auth/login` |
| Service | `Micro-Business-Service` | https://micro-business-service.vercel.app | https://micro-business-service-naoqkvtx3-mbs9-c3cc.vercel.app | Ready | `/` | `/login` | `POST /api/auth/login` |
| Hotel/Booking | `Micro-Business-Hotel` | https://micro-business-hotel.vercel.app | https://micro-business-hotel-mpt09ayva-mbs9-c3cc.vercel.app | Ready | `/` | `/login` | `POST /api/auth/login` |
| Rental | `Micro-Business-Rental` | https://micro-business-rental.vercel.app | https://micro-business-rental-fsy3xr50m-mbs9-c3cc.vercel.app | Ready | `/` | `/login` | `POST /api/auth/login` |
| Retail | `Micro-Business-Retail` | https://micro-business-retail.vercel.app | https://micro-business-retail-fccfuxbs0-mbs9-c3cc.vercel.app | Ready | `/` | `/login` | `POST /api/auth/login` |
| Pharmacy | `Micro-Business-Pharmacy` | https://micro-business-pharmacy.vercel.app | https://micro-business-pharmacy-q6yemtyv6-mbs9-c3cc.vercel.app | Ready | `/` | `/login` | `POST /api/auth/login` |

The login page and API paths were verified in all six source trees. Deployment
build status does not establish that the app can connect to its database or
authenticate users. After configuring the required environment variables and
Vercel access policy, test `/`, `/login`, a successful login, and authenticated
`GET /api/auth/me` with approved test credentials. No login result is claimed.

## MBSuite Core connection

- Current Core deployment recorded by the project: `https://micro-business-suite.vercel.app`
- Bridge endpoint: `POST /api/bridge/sync`
- Read-only endpoint check: `GET /api/bridge/sync` returns endpoint metadata and
  allowed event names; it does not verify that a Suite can authenticate or sync.
- Core currently accepts `order.paid` and `payment.received`; the six Suite
  `lib/bridge-sync.ts` helpers send `order.paid`.
- The bridge POST writes an invoice/payment journal and an idempotency record.
  Do not use it as a production smoke test; verify it only with an explicitly
  approved test company/database.

## Required Vercel environment variables

Vercel reported that none of the six projects has environment variables yet.
Configure values only after confirming the intended deployment environment and
database:

1. `DATABASE_URL` — the correct Neon pooled URL for app runtime. Do not use a
   localhost example or point a write/test command at a retained database.
2. `SESSION_SECRET` — a unique random value of at least 32 characters per Suite.
3. `NEXT_PUBLIC_APP_URL` — the Suite's primary Vercel domain listed above.
4. `MBS_HUB_URL` — the verified MBSuite Core base URL, without the API path.
5. `MBS_BRIDGE_TOKEN` — the matching server-side service token in both apps;
   never record the value here or in a client-side variable.
6. `MBS_COMPANY_ID` — the intended Core company ID. The Suite helper currently
   defaults this value to `1` when unset, so set it explicitly and verify tenant
   ownership before enabling sync.

The Suite `.env.example` files leave `MBS_HUB_URL` blank. A missing
`MBS_HUB_URL` or `MBS_BRIDGE_TOKEN` causes the Suite helper to skip sync.
Do not run migrations, seed data, or send bridge events until the target Neon
branch and test company are confirmed; production database writes require owner
approval.

## Post-deployment test order

1. Confirm Vercel Authentication is intentionally configured for the intended
   users before sharing any URL.
2. Verify each app's `/` and `/login` pages load over HTTPS.
3. Sign in with approved test credentials; verify `GET /api/auth/me` returns the
   expected test user and company. Do not test with guessed credentials.
4. Confirm the Core bridge metadata endpoint is reachable with
   `GET /api/bridge/sync`.
5. Only after explicit approval and confirmation of an isolated test company and
   database, send an idempotent test `order.paid` event and verify the Core
   response and resulting test records.
6. Record results, timestamps, tested URLs and any failures here. Do not store
   credentials or tokens.
