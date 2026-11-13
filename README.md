# MBSuite

เว็บไซต์แนะนำ Micro-Business Suite ระบบบัญชีและจัดการธุรกิจสำหรับร้านค้าและ SMEs ไทย สร้างด้วย React และ Vite รองรับเนื้อหาภาษาไทยและภาษาอังกฤษ

## ภายในเว็บไซต์

- แนะนำประโยชน์และฟีเจอร์ของ MBSuite
- อธิบายขั้นตอนเริ่มต้นใช้งาน
- แสดงแผนราคาและคำถามที่พบบ่อย
- สลับภาษาไทย/อังกฤษได้จากเมนูภาษา
- มีศูนย์เอกสารที่ `/documents` แยกคู่มือเริ่มต้น (`/guide`) กับโบรชัวร์สำหรับพิมพ์หรือบันทึกเป็น PDF (`/brochure`)
- แสดงขอบเขตของ standalone business suites ทั้ง 6 โดยแยกจาก add-on ของ MBSuite Core
- บันทึกเส้นทางและรายการตั้งค่าที่ต้องกลับมาตรวจหลัง deploy ไว้ที่ [docs/SUITES_DEPLOYMENT_CHECKLIST.md](./docs/SUITES_DEPLOYMENT_CHECKLIST.md)
- ลิงก์ไปยัง source code บน [GitHub](https://github.com/MBSuite/Micro-Business-Suite)

## เทคโนโลยี

- React 19 และ TypeScript
- Vite
- CSS Variables (scoped per component)
- i18next และ react-i18next

## โครงสร้าง CSS

- `src/variables.css` - ตัวแปรธีม (CSS Custom Properties)
- `src/index.css` - Base styles
- `src/App.css` - Shared framework (Header, Footer, Buttons, Animations)
- `src/components/*.css` - Component-scoped styles (no conflicts)

## เริ่มต้นใช้งาน

ต้องติดตั้ง Node.js และ pnpm ก่อน

```bash
pnpm install
pnpm run dev
```

Vite จะแสดง URL สำหรับเปิดเว็บไซต์ในเครื่องหลังเริ่ม dev server

## คำสั่งที่ใช้ได้

```bash
pnpm run dev      # เปิด development server
pnpm run build    # ตรวจ TypeScript และ build สำหรับ production
pnpm run lint     # ตรวจโค้ดด้วย Oxlint
pnpm run preview  # ดูตัวอย่าง production build ในเครื่อง
```

## วิสัยทัศน์ (Vision)

MBSuite.Dev เป็น **ตัวอัปเดตเนื้อหาต่าง ๆ เกี่ยวกับ Suite** สำหรับลูกค้าและผู้ประกอบการ

- ลูกค้า/ผู้ประกอบการ สามารถ **ถูกโน้มน้าว** จากการอ่านเนื้อหาใน MBSuite.Dev
- คลิกปุ่มเพื่อ **ทดลองใช้งาน Suite ทั้งหมด** ได้ (ผ่านการสมัครสมาชิก)
- ใช้ **ฐานข้อมูลสมาชิกเดียวกันกับ MBSuite หลัก** (Micro-Business-Suite)
- Manage จากเมนู https://micro-business-suite.vercel.app/admin ที่เดียว — ไม่ซ้ำซ้อน
- เชื่อมต่อข้อมูลภายในได้ง่ายกว่า (shared DB + SSO)

### หลักการ
- MBSuite.Dev = Landing + Docs + Marketplace + Promotions (ไม่มีโปรแกรม itself)
- MBSuite (Micro-Business-Suite) = Accounting Core + Hub (จัดการบัญชีโดยตรง)
- Suite ต่าง ๆ = Standalone apps ที่ sync ข้อมูลการเงิน (รายรับ/รายจ่าย) ไป MBS Core

## โครงสร้างหลัก

```text
src/
├── components/        # Component-scoped CSS
│   ├── *.tsx         # React components
│   └── *.css         # Individual component styles
├── i18n/             # ข้อความภาษาไทยและภาษาอังกฤษ
├── assets/           # ภาพประกอบและ mockup
├── App.tsx           # ประกอบส่วนต่าง ๆ
├── App.css           # Shared framework styles
├── variables.css     # CSS theme variables
└── main.tsx          # จุดเริ่มต้น
```

## ธีม (Theme)

Landing page ใช้ **Neon Cyber aesthetic** (Solana-style):
- สีพื้น: Dark (#0a0a0a, #121212)
- สีหลัก: Neon cyan (#00f0ff), purple (#d000ff)
- Animations: Rainbow gradient flow, blob rotate, glow pulse
- Glassmorphism: backdrop-filter blur effects
- Responsive: Mobile-first design

## Pricing Tiers

ระบบราคา 3 ชั้น:
1. **Professional** - ฿5,750/ปี (Core + Features)
2. **Complete Bundle** - ฿7,500/ปี (Core + 1 Suite)
3. **Perpetual** - One-time purchase (Contact form)
