# Release Gate Checklist — Dev signup/delete and 2FA (ยังไม่ผ่าน)

อัปเดตล่าสุด: 2026-11-09

> **สถานะ: Release gates ยังไม่ผ่าน.** เจ้าของกำหนดลำดับให้ทดสอบสมัครสมาชิกและ
> ลบสมาชิกบนฐาน Dev ก่อน จากนั้นทำและตรวจ 2FA แล้วจึงพิจารณา Production.
> Production database อยู่บน Supabase; ห้ามใช้ Supabase Production เป็นฐานทดสอบ.
>
> เจ้าของยืนยันว่า Neon เป็นฐาน Dev และ Supabase เป็นฐาน Production. ยังไม่ได้
> ทดสอบ signup/delete จริงบนฐาน Dev หรือเขียนข้อมูลลง Supabase Production.

## Release gates

1. **Dev signup/delete — pending:** สมัครสมาชิกและลบสมาชิกจริงบนฐาน Dev พร้อมยืนยัน
   ว่าไม่มี test user/company ค้าง
2. **2FA — pending:** เริ่มทำและตรวจหลัง Gate 1 ผ่าน
3. **Production — blocked:** ห้ามพิจารณา deploy จนกว่า 2FA ผ่านและได้รับอนุมัติ

## ผลตรวจเดิม (ไม่ใช่ Production sign-off)

รายการที่ทำเครื่องหมายด้านล่างเป็นบันทึกผลเดิม ณ 2026-11-07
ไม่ใช่การรับรอง production ปัจจุบันหรือการยืนยัน signup/delete บน Dev และ 2FA

### Build & Quality
- [x] `npm run build` — ผ่าน (Compiled successfully)
- [x] `tsc --noEmit` — ผ่าน (0 errors)
- [x] `npm run lint` — 0 errors (327 warnings)
- [x] `pnpm test` — 27 passed, 12 skipped, 0 failed (local workspace, 2026-11-09)
- [x] Lint errors 23 รายการ — แก้หมด (TDZ, unescaped entities, `any`, Date.now, `<a>`→`<Link>`, setState-in-effect)

### Security
- [x] Security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy) — `next.config.ts`
- [x] Rate limiting (login 10/min, API 120/min per IP) — `proxy.ts`
- [x] Debug endpoints ปิด (`/api/debug/auth` → 404)
- [x] Cookie `session-token`: httpOnly, secure (prod), sameSite=lax
- [x] DB SSL strict (`rejectUnauthorized: true`)
- [x] Runtime DDL ถอดออก (AUD-02) — ไม่มี CREATE/ALTER ใน `app/` `lib/`
- [x] `.env*` + `.secure/` gitignored
- [x] License key valid (perpetual, PROFESSIONAL) — `MBS_LICENSE_KEY` ตั้งแล้ว

### Database
- [x] Migrations apply บน Neon — 53 tables
- [x] Column types ตรง (expenses, invoices, payment_vouchers) — `check:column-types` 3/3
- [x] Company settings + tenant scope migrations applied
- [x] Bootstrap runner idempotent (`scripts/bootstrap-init-db.mjs`)

### Performance
- [x] Dashboard queries parallelized (`Promise.all`) — TTFB ลดจาก ~5s → ~0.5s
- [x] `optimizePackageImports` (lucide, framer-motion, recharts, date-fns)
- [x] Favicon ตั้งค่า (`public/favicon.png` + metadata icons)

### UI / Bug fixes
- [x] Mobile sidebar scroll (bounded height + `min-h-0`)
- [x] Sidebar brand text: `MBSuite`

### Google Drive Integration
- [x] OAuth 2.0 Client ID สร้าง (MBSuite Web, Web application)
- [x] API Key สร้าง (HTTP referrers + Drive/Picker APIs)
- [x] `.env.local` ตั้งค่าครบ:
  - `NEXT_PUBLIC_GOOGLE_CLIENT_ID` ✅
  - `GOOGLE_CLIENT_ID` ✅
  - `GOOGLE_CLIENT_SECRET` ✅
  - `GOOGLE_REDIRECT_URI` ✅
  - `NEXT_PUBLIC_GOOGLE_API_KEY` ✅
  - `GOOGLE_TOKEN_ENCRYPTION_KEY` ✅
  - `GMAIL_FROM` ✅
  - `GMAIL_APP_PASSWORD` ✅
  - `GEMINI_API_KEY` ✅
  - `RECURRING_SECRET` ✅
  - `CRON_ENABLED` ✅

### Environment
- [x] `NEXTAUTH_URL` = `https://micro-business-suite.vercel.app`
- [x] `SEED_ADMIN_PASSWORD` = strong (24 chars)
- [x] `.secure/initial-admin-credential.txt` ลบแล้ว

---

## ⚠️ ยังไม่ทำ (ขึ้นกับการใช้งาน)

### Secret ที่ต้องตั้ง (ถ้าใช้ feature นั้น)
- [x] **Gmail (email)** — ตั้งแล้ว (`GMAIL_APP_PASSWORD` + `GMAIL_FROM`)
- [x] **Gemini AI (AI auditor)** — ตั้งแล้ว (`GEMINI_API_KEY`)
- [x] **Recurring billing (cron)** — ตั้งแล้ว (`RECURRING_SECRET` + `CRON_ENABLED=true`)

### Testing
- [x] **Integration tests** — 12/12 pass และ registration integration 1/1 pass (2026-11-09) บน disposable Docker container `mbs-integration-pg`; ไม่ใช่ Dev gate หรือ Production acceptance

### Vulnerabilities
- [x] **No actionable vulnerabilities** — transitive deps ของ googleapis (glob/minimatch) ไม่กระทบ core logic และแก้ไม่ได้โดยไม่เสี่ยง build; ไม่ใช่ประเด็นที่ต้องพูดถึง
  - แก้ได้เมื่อ googleapis release version ใหม่ที่ patch แล้ว

### Cold Start (Neon Dev)
- [ ] **Neon scale-to-zero** — ถ้าช้าหลัง deploy:
  - Option 1: ปิด scale-to-zero ใน Neon Console (paid plan)
  - Option 2: Vercel Cron ping `/api/health` ทุก 4 นาที
  - Option 3: In-memory cache สำหรับ company settings/modules

---

## 🚀 Deploy Checklist

> Production deploy is blocked until Dev signup/delete and 2FA pass and deployment
> is explicitly approved. The steps below are not evidence of Production readiness.

- [ ] ตั้ง env ทั้งหมดใน Vercel/Docker (production + preview)
- [ ] Deploy บน Vercel หรือ Docker
- [ ] Smoke test: login → dashboard → สร้าง invoice → ชำระเงิน → รายจ่าย → payroll
- [ ] ตรวจสอบ cold start (ถ้าช้า → เปิด Neon always-on หรือ Vercel Cron)
- [ ] ตรวจสอบ Google Drive connect/disconnect flow
- [ ] ตรวจสอบ health endpoint: `GET /api/health` → 200 OK

---

## สรุป (อัปเดตตาม read-only audit)

**ผ่านด้าน build และการเชื่อมต่อ DB แบบอ่านอย่างเดียว** ✅

- Build / TSC ผ่าน, Lint 0 errors (327 warnings)
- Unit tests 27 pass/12 skipped; integration 12/12 + registration 1/1 pass บน local disposable DB (2026-11-09)
- ทุก env ตั้งครบ (Google Drive, Gmail, Gemini AI, Recurring billing, License, Auth)
- DB: 53 ตาราง, core tables ครบ, column types ตรง

**แก้ไขแล้ว (ตาม audit):**
- Backup route: restrict to superadmin only (ป้องกัน data leakage ข้ามบริษัท)
- Reset billing: superadmin only + transaction + company scope
- auth.ts: ย้าย runtime company_id backfill ไป migration
- CSP: ลบ unsafe-eval, จำกัด connect-src
- start script: เปลี่ยนเป็น node .next/standalone/server.js (consistent with Docker)

**ยังมีข้อจำกัด (ต้องยืนยัน):**
- Rate limiter in-memory (single-instance only)
- CSP ยังมี unsafe-inline (Next.js ต้องการ)
- Historical credentials in git history (ควร rotate ถ้าเคย live)
- เจ้าของยืนยันว่า Neon เป็นฐาน Dev และ Supabase เป็นฐาน Production

**สถานะ Dev gate: ยังไม่ผ่าน** — signup และ delete ยังไม่ได้ยืนยันบนฐาน Dev.
2FA ยังต้องทำต่อหลัง Gate นี้ผ่าน; Production อยู่บน Supabase และไม่ได้ถูกทดสอบหรือแก้ไข
ข้อความสถานะพร้อม production เดิมถูกยกเลิกและห้ามนำไปใช้เป็นการรับรอง deploy
