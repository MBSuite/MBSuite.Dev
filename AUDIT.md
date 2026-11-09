# Source Audit — MBSuite.Dev

**วันที่ตรวจ:** 2026-11-08  
**ขอบเขต:** static review ของเว็บ React/Vite, เอกสาร และ local lint/build  
**ผลทดสอบ Production:** ไม่ได้ทดสอบและไม่สามารถยืนยันสถานะ Production จากการตรวจนี้ได้

## สรุป

Repository นี้เป็นเว็บเนื้อหา/เอกสารที่ใช้ React 19, TypeScript และ Vite; จาก source ที่ตรวจไม่พบ API หรือการเชื่อมฐานข้อมูลสำหรับสมาชิก/SSO ภายในแอป การมีแนวคิดดังกล่าวใน README ไม่ได้ยืนยันว่าฟังก์ชันทำงานจริง

## ประเด็นที่พบ

| ระดับ | ประเด็น | หลักฐานจาก source | ข้อเสนอแนะ |
|---|---|---|---|
| กลาง | README กล่าวถึง shared database, SSO และการจัดการผ่าน Core แต่การตรวจ repository นี้พบ frontend เป็นหลัก จึงยังยืนยัน workflow เหล่านั้นจากโค้ดเว็บนี้ไม่ได้ | [README.md](./README.md), [src/App.tsx](./src/App.tsx) | ระบุข้อความเหล่านี้เป็น vision/แผนอย่างชัดเจน หรือเชื่อมไปยังหลักฐาน implementation และ E2E เมื่อมี |
| ต่ำ | CTA ลงทะเบียนนำไปยังหน้า register ของ Core ซึ่งเป็นปลายทางภายนอกเว็บนี้ ไม่ใช่การลงทะเบียนเฉพาะ MBSuite.Dev | [src/components/CTA.tsx](./src/components/CTA.tsx) | ตรวจปลายทางจริงและให้ข้อความ CTA สื่อว่าเป็นการสมัครผ่าน Core |

## ผลการตรวจ

- `pnpm run lint`: ผ่าน
- `pnpm run build`: ผ่าน; TypeScript build และ Vite production build สำเร็จ
- Footer แสดงข้อความ “Powered by Microtronic © 2026 Microtronic Co., Ltd.” และลิงก์ไป `https://microtronic.biz/`
- ไม่ทดสอบลิงก์ภายนอกหรือ Production; ไม่อ่าน env/secret และไม่เชื่อมฐานข้อมูล

## ข้อจำกัดและสิ่งที่ยังไม่ยืนยัน

- ไม่มี E2E run กับบริการ Core หรือการสมัครจริง
- การ audit นี้ยืนยันได้เฉพาะ source/build ของเว็บ ไม่ยืนยันการทำงานของระบบปลายทางที่ CTA เชื่อมไป
- พบ `AGENTS.md` ที่มีการแก้ไขอยู่ก่อน; ไม่ได้แก้ไขหรือลบไฟล์นั้น
