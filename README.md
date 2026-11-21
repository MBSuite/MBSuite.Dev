# MBSuite

เว็บไซต์แนะนำ Micro-Business Suite ระบบบัญชีและจัดการธุรกิจสำหรับร้านค้าและ SMEs ไทย สร้างด้วย React และ Vite รองรับเนื้อหาภาษาไทยและภาษาอังกฤษ

## เว็บในเครือ

- https://micro-business-suite.vercel.app/
- https://micro-business-service.vercel.app/
- https://micro-business-retail.vercel.app/
- https://micro-business-rental.vercel.app/
- https://micro-business-pharmacy.vercel.app/
- https://micro-business-hotel.vercel.app/
- https://micro-business-fnb.vercel.app/

## ภายในเว็บไซต์

- แนะนำประโยชน์และฟีเจอร์ของ MBSuite
- อธิบายขั้นตอนเริ่มต้นใช้งาน
- แสดงแผนราคาและคำถามที่พบบ่อย
- สลับภาษาไทย/อังกฤษได้จากเมนูภาษา
- มีศูนย์เอกสารที่ `/documents` แยกคู่มือเริ่มต้น (`/guide`) กับโบรชัวร์สำหรับพิมพ์หรือบันทึกเป็น PDF (`/brochure`)
- มีคู่มือสำหรับลูกค้าที่ `/documents/products` และแยกหน้าตามโปรแกรม `/documents/products/<slug>` (เขียนสำหรับนักบัญชี/เจ้าของกิจการ ไม่ใช้ศัพท์เทคนิค)
- ไฟล์สำหรับพิมพ์/ส่งลูกค้าอยู่ใน [`docs/CUSTOMER/`](./docs/CUSTOMER/) — เนื้อหาคู่กับหน้าเว็บ (แก้ที่ใดให้แก้ทั้งสองที่)
- แสดงขอบเขตของ standalone business suites ทั้ง 6 โดยแยกจาก add-on ของ MBSuite Core
- บันทึกเส้นทางและรายการตั้งค่าที่ต้องกลับมาตรวจหลัง deploy ไว้ที่ [docs/SUITES_DEPLOYMENT_CHECKLIST.md](./docs/SUITES_DEPLOYMENT_CHECKLIST.md)
- ลิงก์ไปยัง source code บน [GitHub](https://github.com/MBSuite/Micro-Business-Suite)

## เทคโนโลยี

- React 19.3.1 และ TypeScript 7.0.2
- Vite 8.3.8
- CSS Variables (scoped per component)
- i18next 27.2.2 และ react-i18next 18.0.3
- ทุก dependency ล็อกเป็นเวอร์ชันล่าสุด ณ 21 พ.ย. 2569 (ตรวจด้วย `pnpm outdated`)

## โครงสร้าง CSS

- `src/variables.css` - ตัวแปรธีม (CSS Custom Properties)
- `src/index.css` - Base styles
- `src/App.css` - Shared framework (Header, Footer, Buttons, Animations)
- `src/components/*.css` - Component-scoped styles (no conflicts)

## เริ่มต้นใช้งาน

ต้องติดตั้ง **Node.js 24 ขึ้นไป** (`engines.node: >=24`) และ pnpm ก่อน — vercel.json ต้องระบุ Node 24 ด้วยหาก deploy ผ่าน Vercel (พี่ฆังทำใน Dashboard)

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

## เอกสารสำหรับลูกค้า (Customer guides)

ชุดเอกสารภาษาไทยสำหรับลูกค้าที่กำลังจะทดลองใช้งาน เขียนให้เข้าใจง่ายสำหรับนักบัญชีและเจ้าของกิจการ

| โปรแกรม | หน้าเว็บ | ไฟล์พิมพ์ |
|---|---|---|
| Micro-Business-Suite (Core) | `/documents/products/micro-business-suite` | `docs/CUSTOMER/01-micro-business-suite.md` |
| Micro-Business-Hotel | `/documents/products/micro-business-hotel` | `docs/CUSTOMER/02-micro-business-hotel.md` |
| Micro-Business-Pharmacy | `/documents/products/micro-business-pharmacy` | `docs/CUSTOMER/03-micro-business-pharmacy.md` |
| Micro-Business-Rental | `/documents/products/micro-business-rental` | `docs/CUSTOMER/04-micro-business-rental.md` |
| Micro-Business-Service | `/documents/products/micro-business-service` | `docs/CUSTOMER/05-micro-business-service.md` |
| Micro-Business-Retail | `/documents/products/micro-business-retail` | `docs/CUSTOMER/06-micro-business-retail.md` |
| Micro-Business-FNB | `/documents/products/micro-business-fnb` | `docs/CUSTOMER/07-micro-business-fnb.md` |

เนื้อหาหน้าเว็บอยู่ที่ `src/data/customerDocs.ts` และแสดงผลโดย `CustomerDocsHome.tsx` / `CustomerDocPage.tsx`
ข้อความในแต่ละเล่มอิงกับสิ่งที่โปรแกรมทำได้จริงตามที่ตรวจสอบจาก repository ของแต่ละโปรแกรม (รวมข้อจำกัดที่ยังทำผ่านหน้าจอไม่ได้)

## ธีม (Theme)

Landing page ใช้ **Neon Cyber aesthetic** (Solana-style):
- สีพื้น: Dark (#0a0a0a, #121212)
- สีหลัก: Neon cyan (#00f0ff), purple (#d000ff)
- Animations: ส่วน Hero ใช้แสงนุ่ม หายใจช้า ตารางเส้นบางเลื่อนช้า และข้อความเข้าสู่จอครั้งเดียว (รองรับ `prefers-reduced-motion`); ส่วนอื่นยังใช้gradientเดิมตามเดิม
- Glassmorphism: backdrop-filter blur effects
- Responsive: Mobile-first design

## Pricing Tiers

ระบบราคา 3 ชั้น:
1. **Professional** - ฿5,750/ปี (Core + Features)
2. **Complete Bundle** - ฿7,500/ปี (Core + 1 Suite)
3. **Perpetual** - One-time purchase (Contact form)
