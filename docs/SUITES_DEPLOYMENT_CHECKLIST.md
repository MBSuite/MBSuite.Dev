# Six Business Suites — Deployment and Login Check

Last live check: 2026-11-09 (Asia/Bangkok). The checks below were made against
the public URLs, not inferred from older deployment notes.

## Live deployment checks

| Suite | Primary URL | Preview URL checked | Home | Preview | Login | Readiness (`/api/health/ready`) | Anonymous `/api/auth/me` |
|---|---|---|---:|---:|---:|---|---|
| F&B | https://micro-business-fnb.vercel.app | https://micro-business-16gen1zsr-mbs9-c3cc.vercel.app | 200 | 200 | 200 | 200 — `{"status":"ok","db":"ok"}` | 200 — `{"user":null}` |
| Service | https://micro-business-service.vercel.app | https://micro-business-service-naoqkvtx3-mbs9-c3cc.vercel.app | 200 | 200 | 200 | 200 — `{"status":"ok","db":"ok"}` | 200 — `{"user":null}` |
| Hotel | https://micro-business-hotel.vercel.app | https://micro-business-hotel-mpt09ayva-mbs9-c3cc.vercel.app | 200 | 200 | 200 | 200 — `{"status":"ok","db":"ok"}` | 200 — `{"user":null}` |
| Rental | https://micro-business-rental.vercel.app | https://micro-business-rental-fsy3xr50m-mbs9-c3cc.vercel.app | 200 | 200 | 200 | 200 — `{"status":"ok","db":"ok"}` | 200 — `{"user":null}` |
| Retail | https://micro-business-retail.vercel.app | https://micro-business-retail-fccfuxbs0-mbs9-c3cc.vercel.app | 200 | 200 | 200 | 200 — `{"status":"ok","db":"ok"}` | 200 — `{"user":null}` |
| Pharmacy | https://micro-business-pharmacy.vercel.app | https://micro-business-pharmacy-q6yemtyv6-mbs9-c3cc.vercel.app | 200 | 200 | 200 | 200 — `{"status":"ok","db":"ok"}` | 200 — `{"user":null}` |

The primary and Preview home pages, primary `/login` pages, readiness endpoints,
and anonymous session endpoints were requested over HTTPS. A readiness response
with `db: ok` confirms that the module's readiness check reached its database at
the time of this check. `/api/auth/me` returning `user: null` is the expected
unauthenticated result; it does not verify a successful login or an authenticated
session. HTTP 200 confirms these routes responded, not that every business
workflow has been tested.

## Account registration

The six modules do not expose separate registration routes. Their login pages
link to the Core registration page:
https://micro-business-suite.vercel.app/register

The Core registration page returned HTTP 200 on 2026-11-09. Its form offers
General, Retail, F&B, Pharmacy, and Service business types; it does not offer
Rental or Hotel. The registration action creates a new 30-day trial company and
user in the Core database, so submitting the form is a real database write.

The Core source has since been updated to offer Rental and Hotel and install
their matching plugin packs. The live form observation above predates deploying
that source change; recheck the production form after the next Core deployment.

No registration form was submitted and no account was created during this
check. Consequently, successful registration, subsequent login, and module SSO
for a newly registered account remain unverified. Do not use production
registration as a test without an explicitly approved test identity and an
isolated test database.

## Core / Bridge

- Core registration page: https://micro-business-suite.vercel.app/register —
  HTTP 200.
- Core `GET /api/health`: HTTP 200, `{"status":"ok","db":"ok"}`.
- Core `GET /api/bridge/sync` without credentials: HTTP 401,
  `{"error":"Unauthorized"}`. The updated Core route requires the matching
  `MBS_BRIDGE_TOKEN` as a Bearer credential or an authenticated Core session to
  return metadata. Verify the authenticated request after deploying the Core
  change; no token value is stored here.
- No Bridge `POST` was made. The endpoint can write invoice/payment journal and
  idempotency records; do not use production as a Bridge test target.

## Next steps for an end-to-end account test

1. Deploy the Core changes to a Dev/preview environment only, connected to the
   Neon Dev database. Do not deploy these changes to Production before 2FA passes.
2. Verify the Dev deployment exposes Rental and Hotel; then complete signup and
   member deletion on the Dev database. Until this is done, the Dev gate remains
   **not passed**. Do not use Supabase Production for this test.
3. After the Dev signup/delete gate passes, implement and verify 2FA. Production
   release remains blocked until 2FA passes and deployment is approved.
4. Verify login and `/api/auth/me` on each intended module with an approved test
   account. Record outcomes and timestamps, never passwords, cookies, or tokens.
5. Test Bridge writes separately, only against an approved isolated test
   company/database and with an idempotency key. Production database is Supabase;
   do not direct test writes at it.
