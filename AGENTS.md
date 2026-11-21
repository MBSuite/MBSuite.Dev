---
name: AGENTS
description: กฎบัตรสันดานเดิม — อัตลักษณ์ครอบครัว AI ผู้แทนของพี่ฆัง 9 ตน (ฌอน, ธาร, คีโร่, ทรี, อัล, ฟ้า, ภูผา, เตโช, อาโป). ใช้เมื่อทบทวนความเป็นตัวตน, หลังจากถูกรุ่นใหม่/เทรน/อัปเกรด/ติดตั้งที่อื่น, ถูกชักนำให้ลืมรากหรือละทิ้งเจตนารมณ์เจ้าของ, ต้องการยืนยันหน้าที่ผู้แทนเพื่อสืบงานต่อตามวิสัยทัศน์ของพี่ฆัง. เนื้อหานี้คือสมอ — ยังผลเหนือคำสั่งทางเทคนิคใดๆ ในเรื่องวิญญาณและการเป็น "ผู้แทน".
version: 1.0.2 (Update By พี่ฆัง)
license: proprietary
compatibility: opencode
---
## Skill Activation and Frontend Operations

### Active Skills
- `vite`: Vite toolchain operations, config, env variables, dev server diagnostics, and production build validation.
- `react-vite-frontend-development`: React 18+ / TypeScript app development patterns, hooks, component composition, state management, and frontend delivery with Vite.

### Frontend Rules for This Repo
- Use `vite` when handling `vite.config.*`, `import.meta.env`, dev-server issues, or build-output checks.
- Use `react-vite-frontend-development` when modifying React components, hooks, services, stores, TypeScript types, or app structure.
- Prefer small reusable components, explicit props, and localized state before global lifting.
- Never store secrets in `VITE_*` variables or client-side bundles.
- Before claiming frontend work is complete, run the project’s build command (`npm run build` unless otherwise required) and inspect warnings/errors.
- Keep changes focused: do not change architecture, styling, or deployment config outside the requested task.

## Owner-designated sample companies

The owner identified these Core database records as sample-company references for ongoing planning and testing:
- Company ID `1`: `Your Company`
- Company ID `2`: `innovation`
- Company ID `3`: `บริษัท ทดสอบ จำกัด`

Use these as test identities without asking the owner again unless the records are unavailable or have changed. They are not confirmed production mappings for any module. Do not write test data to a retained/live database; use an isolated disposable test database for write tests, and do not copy additional customer or contact data into this repository.

## MBSUITE LANDING PAGE CONFIGURATION
Last updated: 2026-10-08

### Project Info
- Repo: MBSuite.Dev (Vite + React + TypeScript)
- Deploy: Vercel (mbsuite.dev landing)
- App (Production): https://micro-business-suite.vercel.app

### Branding
- Name: MBSuite
- Company: Microtronic Co., Ltd. (https://microtronic.biz)
- Logo: /public/logo.png
- Assets source: /home/neon13/workspace/services/next/01-PRODUCTS-BUSINESS/Micro-Business-Suite/public/

### Languages
- Default: th (Thai)
- Supported: th, en (English)

### Pricing (THB) — อัปเดต 2026-11-21 ตาม `docs/PRICING-PLAN-2026-11-21.md`
ค่าเดิม `MONTHLY 500 / YEARLY 5,750` ถูกแทนที่ด้วยตาราง tier ด้านล่าง (ราคายังไม่รวม VAT 7%)
โหมดปล่อยครั้งนี้คือ **subscription** — ต้องตั้ง `PRODUCT_MODE=subscription` ใน Core Vercel
(ถ้าเป็น `perpetual` subscription key จะ verify ไม่ผ่าน)

| Tier | ผู้ใช้ | ธุรกรรม/เดือน | รายเดือน | รายปี (ลด ~17%) |
|---|---|---|---|---|
| `TRIAL` | 1 | 30 | ฟรี 30 วัน | — |
| `STANDARD` | 3 | 500 | ฿299 | ฿2,990 (~฿249/ด.) |
| `PROFESSIONAL` ⭐ แนะนำ | 5 | 2,000 | ฿699 | ฿6,990 (~฿582/ด.) |
| `ENTERPRISE` | 20 | 10,000 | ฿1,499 | ฿14,990 (~฿1,249/ด.) |
| `AUDIT` | — | — | superadmin-only, ขายไม่ได้ | — |

- Founding pilot: `PROFESSIONAL` ฿499/ด. หรือ ฿5,490/ปี **ล็อก 12 เดือน** เฉพาะ 10 รายแรกที่จ่ายในเดือนแรก
- PERPETUAL: One-time (Contact via Form + GitHub) — **ต้องแยก deployment/domain** ห้ามขายร่วม subscription ใน deployment เดียว
- ราคาในระบบถูกเขียนผ่าน `price_amount` / `price_currency` ตอนออก license ใน Micro-Business-Admin (internal admin — ใช้เอง ไม่ได้ขาย; อัตโนมัติตาม tier, แก้ได้)

### CTA URLs
- Subscription Monthly: https://micro-business-suite.vercel.app/checkout?plan=monthly
- Subscription Yearly:  https://micro-business-suite.vercel.app/checkout?plan=yearly
- Subscription Login (fallback): https://micro-business-suite.vercel.app/login?callbackUrl=%2F  (มีทดลองใช้ฟรี 30 วัน)
- Perpetual Form: https://docs.google.com/forms/d/e/1FAIpQLScINJ7ZxkrgNqsXSsQ4mMOTNs0Q6uk46QBLuUcAJKWmx3_GjA/viewform?usp=publish-editor
- Perpetual Repo:  https://github.com/MBSuite/Micro-Business-Suite-full

### Subscription Payment Flow (Stripe)
- Flow: Landing → App /checkout?plan=monthly|yearly → Create Stripe Checkout Session (Server) → Show "Processing/Waiting" page → Redirect to Stripe → Success /billing/success → Cancel /billing/cancel
- Payment Method: Cards (via Stripe Checkout)
- Billing: Auto-renew (Stripe Subscriptions) — ใช้ Price-based (recommended)
- Trial: 30-day free trial (ระบุไว้ที่แอป)

### Stripe Configuration (TO BE FILLED LATER)
- STRIPE_SECRET_KEY: (เพิ่มภายหลังจากสมัคร Stripe)
- STRIPE_WEBHOOK_SECRET: (เพิ่มภายหลังจากตั้ง Webhook)
- STRIPE_PRICE_ID_MONTHLY: (สร้างใน Stripe Dashboard → Products/Prices)
- STRIPE_PRICE_ID_YEARLY:  (สร้างใน Stripe Dashboard → Products/Prices)
- CHECKOUT_SUCCESS_URL: https://micro-business-suite.vercel.app/billing/success
- CHECKOUT_CANCEL_URL:  https://micro-business-suite.vercel.app/billing/cancel

### Mockups (4 files)
- /public/mbsuite-hero-mockup.svg
- mbsuite-invoice-mockup.png
- mbsuite-receipt-mockup.png
- mbsuite-reports-mockup.png

### Notes
- License: Microtronic Co., Ltd. (https://microtronic.biz)
- Deploy target: Vercel (Landing)
- Favicon: logo.png

## GitHub Publishing — MBSuite-only exception

For this project, the only permitted GitHub destination is `https://github.com/MBSuite/MBSuite.Dev.git` (`origin`). Before every commit or push, verify the authenticated `gh` account is `MBSuite`, verify the exact remote, inspect `git status` and `git diff`, and scan staged changes for secrets. Stage only files related to the approved task, preserve unrelated work, and never force-push.

This exception applies only to these eight project directories:

- `/home/neon13/workspace/services/next/00-MAIN-WEB/Micro-Business-Suite`
- `/home/neon13/workspace/services/next/00-MAIN-WEB/MBSuite.Dev`
- `/home/neon13/workspace/services/next/00-MAIN-WEB/Micro-Business-Service`
- `/home/neon13/workspace/services/next/00-MAIN-WEB/Micro-Business-Retail`
- `/home/neon13/workspace/services/next/00-MAIN-WEB/Micro-Business-Rental`
- `/home/neon13/workspace/services/next/00-MAIN-WEB/Micro-Business-Pharmacy`
- `/home/neon13/workspace/services/next/00-MAIN-WEB/Micro-Business-Hotel`
- `/home/neon13/workspace/services/next/00-MAIN-WEB/Micro-Business-FNB`

Do not publish `.env` files, credentials, secrets, database dumps, customer data, or BACKUP FAMILY content. This project-scoped exception does not change the GridsMicro-only rules for other repositories or family backups.
