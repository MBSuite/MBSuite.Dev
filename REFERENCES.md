# MBSuite.Dev — Landing Page Strategy (จากการวิเคราะห์คู่แข่ง)

> สร้างใน MBSuite.Dev เพื่อไม่กระทบ repo หลัก (`Micro-Business-Suite`)

---

## อ้างอิงจากการวิเคราะห์ (ไม่แก้ repo หลัก)

เอกสารวิเคราะห์คู่แข่งที่สร้างใน repo หลัก (`/home/neon13/workspace/services/next/00-MAIN-WEB/Micro-Business-Suite/docs/`):

- `docs/COMPETITOR-ANALYSIS-FLOWACCOUNT.md` (คัดลอกมาไว้ใน MBSuite.Dev — ไม่กระทบ repo หลัก) — วิเคราะห์ FlowAccount (`flowaccount.com`)
- `docs/COMPETITOR-COMPARISON-MBS.md` (คัดลอกมาไว้ใน MBSuite.Dev) — เปรียบเทียบ MBS กับ AccCloud + FlowAccount + กลยุทธ์การสู้

---

## กลยุทธ์ที่สรุป (ใช้สร้าง Landing Page นี้)

**ไม่สู้ด้าน "เนื้อหายาว" หรือ "Social Proof จำนวนผู้ใช้" — สู้ด้าน Structural Advantage ของ MBS:**

1. **AI ที่ทำงานจริง** — AI Auditor (`npm run ai:audit`) + Tax Automator (`npm run tax:update`) — ไม่ใช่แค่ "ถามข้อมูล"
2. **Google-First Automation** — Auto-backup DB → Drive (ทุกวัน 02:00) + Sheets Dashboard (02:05) + Calendar
3. **Perpetual License** — ขายขาด (`PRODUCT_MODE=perpetual`) + Docker (`docker compose up`) — ไม่ต้องจ่ายรายเดือนตลอด
4. **Modular** — เปิด-ปิดโมดูล (`NEXT_PUBLIC_MODULE_*`) — จ่ายเฉพาะสิ่งที่ใช้
5. **Tax Readiness ลึก** — `lib/rd-api.ts` + Template `.txt` ภ.พ.30 / ภ.ง.ด.53 — เชื่อมต่อ RD API โดยตรง

---

## โครงสร้างหน้า Landing ที่ปรับ

| ส่วน | การเปลี่ยนแปลง |
|---|---|
| `Hero` | เน้น 5 Advantage (แทน "ระบบบัญชีทั่วไป") + CTA ไปดูฟีเจอร์ |
| `Benefits` | เปลี่ยนจาก "เหตุผลทั่วไป" → 4 ข้อได้เปรียบเชิงโครงสร้าง |
| `Features` | เพิ่ม Feature Cards 5 ข้อ + Info Content สั้น (AI / Tax / Google / License / Modular) |
| `HowItWorks` | คงไว้ (สมัคร → ตั้งค่า → เริ่มใช้) — ไม่เปลี่ยนมาก |
| `Pricing` | เพิ่มตารางเปรียบเทียบ Perpetual vs Subscription + เน้น "ไม่ต้องจ่ายรายเดือนตลอด" |
| `FAQ` | เพิ่มคำถามเกี่ยวกับ Perpetual License + Docker + AI Audit |
| `CTA` | คงไว้ — "เริ่มใช้งาน" |

---

## ข้อห้าม

- **ไม่แก้ไฟล์ใน repo `Micro-Business-Suite`** — งานทั้งหมดทำที่ `/home/neon13/workspace/services/next/00-MAIN-WEB/MBSuite.Dev` เท่านั้น
- **ไม่สร้าง Blog/Articles ยาว** — ใช้ Info Content สั้น (ไม่ต้อง WordPress แบบ AccCloud)
- **ไม่สร้าง Free Tier** — ถ้าไม่พร้อมรองรับ Scale — ใช้ Trial 30 วัน ที่มีอยู่แล้ว
- **ไม่สร้าง Partner Program** — ถ้าไม่มีฐานลูกค้า 6,000+ — เน้น Self-service + Docker แทน
