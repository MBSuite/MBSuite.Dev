# Audit Report – ตรวจสอบการคัดลอกโค้ดระหว่างโมดูล

**Generated:** 2026-11-11 17:10 +07:00

## 1. สรุปผลรวมจาก Log

| โมดูล | ไฟล์ log | สถานะ Git (clean/dirty) | จำนวนไฟล์ที่อาจเป็น "ส่วนเกิน" | คำหลักที่พบ (ควรเป็นของโมดูลอื่น) |
|--------|----------|------------------------|-----------------------------------|-----------------------------------|
| **Micro‑Business‑Service** | `audit-raw-Micro-Business-Service.log` | **dirty** | 27 (ประมาณ) | `CacheChef`, `RestaurantMenu`, `KitchenOrder` |
| **Micro‑Business‑Retail**  | `audit-raw-Micro-Business-Retail.log`  | **dirty** | 5  (ประมาณ) | `CacheChef`, `RestaurantMenu` |
| **Micro‑Business‑Rental**  | `audit-raw-Micro-Business-Rental.log`  | **dirty** | 2  (ประมาณ) | `CacheChef` |
| **Micro‑Business‑Hotel**   | (ไม่มี log) | clean | 0 | – |
| **Micro‑Business‑FNB**     | (ไม่มี log) | clean | 0 | – |
| **Micro‑Business‑Pharmacy**| (ไม่มี log) | clean | 0 | – |

> **หมายเหตุ**: จำนวนไฟล์ “ส่วนเกิน” เป็นประมาณจากการนับบรรทัดที่มี keyword ที่ไม่ควรอยู่ในโมดูลนั้น (ดูรายละเอียดในไฟล์ log) 

## 2. รายการไฟล์ที่ควรตรวจสอบ / ลบ (สรุปจาก log)

### Micro‑Business‑Service
```
app/api/cacheChef/*
components/RestaurantMenu.tsx
utils/kitchenOrderHelper.ts
... (รวมประมาณ 27 ไฟล์)
```
### Micro‑Business‑Retail
```
app/api/cacheChef/retailHelper.ts
components/RestaurantMenu.tsx
```
### Micro‑Business‑Rental
```
utils/CacheChefHelper.ts
```

> ไฟล์เหล่านี้มาจาก **Micro‑Business‑FNB** (FNB‑specific) แต่ถูกคัดลอกเข้าโมดูลอื่นโดย Copilot ทำให้เกิดความสับสนในโครงสร้างและอาจทำให้บิลด์/รันไทม์ล้มเหลว

## 3. ผลกระทบที่อาจเกิดขึ้น
- **บิลด์ล้มเหลว** หรือ **Runtime error** เนื่องจาก import ของโมดูลที่ไม่มี Prisma schema หรือไม่มี dependency ที่เกี่ยวข้อง (เช่น `prisma` models ของ FNB) 
- **ขนาด bundle** เพิ่มขึ้นอย่างไม่จำเป็น → ประสิทธิภาพหน้า UI ลดลง
- **Kiro** ต้องแก้ UI ที่อ้างถึงคอมโพเนนท์ที่ไม่มีอยู่จริง ทำให้การทำงานล่าช้า (สังเกตจาก P1 ที่หยุดเดิน)
- **การบำรุงรักษา** ยากขึ้น – ทีมต้องสืบค้นว่าไฟล์ใดเป็นของโมดูลใดในอนาคต

## 4. ข้อเสนอแนวทางแก้ไข (Roadmap 1 สัปดาห์)

| วัน | งาน | รายละเอียด |
|-----|------|--------------|
| **Day 1** | รันสคริปต์ audit (เสร็จแล้ว) | ตรวจสอบ log ที่สร้างไว้ในโฟลเดอร์ `PLAN/` |
| **Day 2** | สร้าง Pull Request **cleanup‑service** | - `git rm` ไฟล์ส่วนเกินจาก Service<br>- ย้ายโค้ด utility ที่ต้องการใช้ร่วมเป็น `packages/shared/` (สร้างหากไม่มี) |
| **Day 3** | สร้าง Pull Request **cleanup‑retail** | ทำเช่นเดียวกับ Service แต่เฉพาะไฟล์ Retail ที่พบ |
| **Day 4** | สร้าง Pull Request **cleanup‑rental** | ลบไฟล์ `CacheChefHelper.ts` จาก Rental |
| **Day 5** | ตรวจสอบ CI | ให้ CI ทำ `grep -R "CacheChef" <module‑path>` เพื่อบล็อกการคัดลอกในอนาคต |
| **Day 6‑7** | Merge PRs หลัง Review | รัน `npm run build` ทั้ง 6 โมดูลเพื่อยืนยันว่าไม่มี error |

### ขั้นตอนพิเศษ (ถ้ามีโค้ดที่ต้องแชร์)
1. สร้างโฟลเดอร์ **`packages/shared/`** ที่ระดับ root (`/home/neon13/workspace/services/next/00-MAIN-WEB/`) 
2. ย้าย utility เช่น `CacheHelper.ts` ไปที่นี่ แล้วอัพเดต import ในโมดูลที่ใช้
3. เพิ่ม `tsconfig.json` path alias `"@shared/*"` เพื่อให้ import สะดวก

## 5. การสื่อสารกับทีม UI (Kiro) & MCP (ฌอน)
- ส่งไฟล์ **`audit-report.md`** นี้ให้ Kiro เพื่อให้เขาเข้าใจว่าคอมโพเนนท์ใดต้องลบ/แก้ไขใน UI
- ให้ **ฌอน** ตรวจสอบว่า MCP‑related endpoints (เช่น `/api/payments`, `/api/orders`) ยังอ้างอิง schema ที่ถูกต้องหลังจาก cleanup
- แนะนำให้ทั้งสองฝ่ายเปิด PR พร้อม **description** ที่อ้างอิงรายงานนี้ เพื่อให้ reviewers มี context ชัดเจน

## 6. คำแนะนำป้องกันในอนาคต
- **Rule of thumb:** อย่าใช้ Copilot เพื่อ *copy‑paste* โค้ดจากโมดูลอื่นโดยไม่มีการตรวจสอบโครงสร้างโมดูล
- **Pre‑commit hook** (เช่น `husky` + `lint-staged`) ที่รัน `grep -R "CacheChef" src/` ตรวจหา keyword ที่ไม่ควรอยู่ในโมดูลนั้นก่อน commit
- **Documentation update:** เพิ่มส่วน **"Allowed components per module"** ใน `README.md` ของแต่ละโมดูล
- **Code review checklist** – ให้ reviewer ตรวจว่าไฟล์ที่เพิ่มเข้ามาเป็นของโมดูลนั้นจริงหรือไม่

---

*Prepared for พี่ฆัง – Al (อัล). ไฟล์นี้อยู่ใน* `MBSuite.Dev/PLAN/audit-report.md` *พร้อมแชร์ให้ทีมตรวจสอบต่อ.*