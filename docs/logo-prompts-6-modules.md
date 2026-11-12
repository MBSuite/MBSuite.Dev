# MBSuite — ชุด Prompt โลโก้ 6 โมดูล (Bold Duotone Icon · v2)

ไฟล์นี้คือ **ชุด prompt สำหรับนำไปให้ Gemini gen รูปเอง** (ไม่ได้ gen รูปในนี้)

> **v2 — แก้จาก v1:** v1 เป็นเส้นบางล้วน พอย่อขนาดแล้วอ่านไม่ออก
> v2 เปลี่ยนเป็น **ทึบ 2 เฉด (duotone) + เส้นหนา** ลดรายละเอียดรก และบังคับว่า
> "ต้องอ่านรู้เรื่องเมื่อย่อถึง 32px"

## สถานะการนำไปใช้งาน (อัปเดท 2026-11-12)

- v2 ถูกนำไปผสมกับโมดูลทั้ง 6 แล้วและเป็น **โลโก้ล่าสุด**ที่ถูกนำไปใช้กับหน้า Landing (`ModuleShowcase` ผ่าน `lib/module-logos.ts`)
- ไฟล์โลโก้จริงหลัง gen ถูกเก็บใน `public/` (ชื่อเดิมที่ owner ใช้) ของ `MBSuite.Dev` และ `Micro-Business-Suite`:
  - `F&B.png` — ร้านอาหาร/คาเฟ่ (F&B)
  - `Hotel.png` — โรงแรม/ที่พัก (Hotel)
  - `Pharmacy.png` — ร้านขายยา (Pharmacy)
  - `Rental.png` — ธุรกิจเช่า/ให้เช่า (Rental)
  - `Retail2.png` — ค้าปลีก/ค้าส่ง (Retail)
  - `Service.png` — ธุรกิจบริการ/บริการ (Service)
- mapping อยู่ที่ `lib/module-logos.ts` (Single Source of Truth) — ห้าม hardcode path ใน UI เพื่อให้โลโก้ในอนาคตแก้ที่ mapping เดียว

---

## บรีฟที่ล็อกไว้

| หัวข้อ | ค่า |
| --- | --- |
| สไตล์ | Bold duotone icon — ตัวหลักทึบสีโมดูล + ดีเทลรองทึบสีเข้มกว่า 1 ระดับ |
| เส้น | หนาสม่ำเสมอ ~8px @512px (ห้ามบางกว่านี้ / ห้าม hairline) |
| ความมีมิติ | 2 เฉดไล่ระดับความเข้ม + เงาสั้นนุ่มใต้ตัวหลัก |
| สี | 6 สีแยก 6 โมดูล |
| ตัวอักษรในโลโก้ | ไม่มี (ไอคอนล้วน) |
| สัดส่วน | สี่เหลี่ยมจัตุรัส 1:1 · ไอคอนกินพื้นที่ ~70% ของภาพ |
| พื้นหลัง | ขาวล้วน |
| เกณฑ์ผ่าน | ย่อเหลือ 32px แล้วยังบอกได้ว่าคืออะไร |

**ลำดับตายตัวของ 6 โมดูล (ซ้าย→ขวา, บน→ล่าง):**

| # | โมดูล | สีหลัก | สีเข้ม (เงา/ดีเทลรอง) |
| --- | --- | --- | --- |
| 1 | Retail (ค้าปลีก) | `#F97316` | `#C2410C` |
| 2 | Rental (เช่า) | `#7C3AED` | `#5B21B6` |
| 3 | Hotel (โรงแรม) | `#06B6D4` | `#0E7490` |
| 4 | F&B (อาหารและเครื่องดื่ม) | `#E11D48` | `#9F1239` |
| 5 | Service (บริการ) | `#2563EB` | `#1E40AF` |
| 6 | Pharmacy (ขายยา) | `#10B981` | `#047857` |

---

## วิธีใช้

1. อยากได้ครบ 6 อันพร้อมกัน → ใช้ **SET PROMPT** (ข้อ 1) ก๊อปทั้งบล็อกวางใน Gemini ทีเดียวจบ
2. อยากปรับเฉพาะอัน → ใช้ **prompt เดี่ยว** (ข้อ 3) ตามหมายเลข
3. หลัง gen ทุกครั้ง ให้ **ย่อรูปดูที่ 32px** ถ้ายังไม่อ่านออก ให้ gen ใหม่พร้อมเติม `simplify to fewer shapes, thicker strokes`

---

## 1) SET PROMPT — gen ทีเดียวได้ครบ 6 อัน

```text
Create one single square image: a clean 3-column by 2-row grid of six BOLD
duotone app icons, on a plain pure white background, evenly spaced, in this exact
fixed order (left to right, then top to bottom):

1) a shopping bag, filled solid with #F97316, with a small rectangular price tag
   filled solid with #C2410C attached at the top right
2) a key standing upright, filled solid with #7C3AED, with a circular arrow
   wrapped around its head filled solid with #5B21B6
3) a bed seen from the front, filled solid with #06B6D4, with a simple triangular
   roof above it filled solid with #0E7490
4) a dome food cloche, filled solid with #E11D48, with two short steam curls
   above it filled solid with #9F1239
5) a wrench filled solid with #2563EB, crossed with a thick checkmark filled
   solid with #1E40AF
6) a mortar filled solid with #10B981, with a pestle and one capsule filled solid
   with #047857

Rules for all six icons: bold heavy shapes with thick uniform strokes (about
8px at 512px, never thinner), rounded corners on every shape, at most three
simple shapes per icon, no hairlines, no thin interior outlines, no fine detail,
high contrast, each icon filling about 70% of its cell with even padding, all six
identical in visual weight and size and aligned to the same baseline. A subtle
sense of depth from the two-tone layering and a very short soft shadow under the
main shape. Clean modern vector SaaS brand mark, crisp edges, instantly readable
when scaled down to 32px.

Under each icon place one tiny lowercase English label in a thin light-gray
sans-serif font, in this order: retail, rental, hotel, food and drink, service,
pharmacy.

No gradient mesh, no 3D render, no bevel, no glow, no photorealism, no texture,
no noise, no background scenery, no extra props, no frame, no border, no
watermark, no additional text, no numbers, no other letters.
```

**ถ้าป้ายชื่อสะกดเพี้ยน:** ใช้ prompt นี้แทน (ไม่มีป้าย) แล้วยึดลำดับตายตัวด้านบน

```text
Create one single square image: a clean 3-column by 2-row grid of six BOLD
duotone app icons on a plain pure white background, evenly spaced in this exact
fixed order (left to right, then top to bottom):

1) shopping bag + price tag            (solid #F97316 + #C2410C)
2) key + circular arrow around head    (solid #7C3AED + #5B21B6)
3) bed + roof above it                 (solid #06B6D4 + #0E7490)
4) food cloche + two steam curls       (solid #E11D48 + #9F1239)
5) wrench crossed with a checkmark     (solid #2563EB + #1E40AF)
6) mortar + pestle + one capsule       (solid #10B981 + #047857)

Bold heavy shapes, thick uniform strokes (about 8px at 512px, never thinner),
rounded corners, at most three shapes per icon, no hairlines, no fine detail,
high contrast, each icon filling about 70% of its cell, all six identical in
visual weight and size, subtle depth from the two-tone layering and a very short
soft shadow under the main shape, instantly readable at 32px.

Strictly no text, no letters, no numbers, no labels, no gradient mesh, no 3D, no
glow, no texture, no frame, no watermark.
```

---

## 2) BLOCKS ที่ใช้ร่วม (สำหรับ gen เดี่ยว)

**BASE** — แทน `{COLOR}` และ `{DARK}` ด้วยรหัสสีของโมดูลนั้น

```text
Bold flat duotone app icon, 1:1 square composition, plain pure white background.
One main silhouette filled solid with {COLOR}, with its secondary detail filled
solid with {DARK}. Thick uniform strokes (about 8px at 512px, never thinner),
rounded corners on every shape, at most three simple shapes, generous even
padding so the icon fills about 70% of the canvas, no hairlines, no thin interior
outlines, no fine detail, high contrast. A subtle sense of depth from the
two-tone layering and a very short soft shadow under the main shape. Clean modern
vector SaaS brand mark, crisp edges, instantly readable when scaled down to 32px.
```

**NEGATIVE** — ต้องมีทุกอัน

```text
No thin lines, no hairline strokes, no outline-only shapes, no gradient mesh,
no 3D render, no bevel, no glow, no photorealism, no texture, no noise, no
background scenery, no extra props, no frame, no border, no watermark, no text,
no letters, no numbers.
```

---

## 3) Prompt เดี่ยว (gen แยกทีละอัน / แก้เฉพาะอัน)

### 3.1 Retail — ค้าปลีก · ส้ม `#F97316` + `#C2410C`

แนวคิด: ถุงช้อปปิ้งทึบ + ป้ายราคาสีเข้ม → ขายของ/หน้าร้าน (อ่านออกแม้ย่อเล็ก)

```text
A bold shopping bag seen from the front, filled solid with #F97316, with a small
rectangular price tag filled solid with #C2410C attached at the top right of the
bag. Bold flat duotone app icon, 1:1 square composition, plain pure white
background, thick uniform strokes (about 8px at 512px, never thinner), rounded
corners on every shape, at most three simple shapes, generous even padding so the
icon fills about 70% of the canvas, no hairlines, no thin interior outlines, no
fine detail, high contrast. Subtle depth from the two-tone layering and a very
short soft shadow under the main shape. Clean modern vector SaaS brand mark,
crisp edges, instantly readable when scaled down to 32px. No thin lines, no
outline-only shapes, no gradient mesh, no 3D render, no bevel, no glow, no
photorealism, no texture, no noise, no background scenery, no extra props, no
frame, no border, no watermark, no text, no letters, no numbers.
```

### 3.2 Rental — เช่า · ม่วง `#7C3AED` + `#5B21B6`

แนวคิด: กุญแจทึบ + ลูกศรวนรอบหัวกุญแจ → สัญญาเช่า/ต่ออายุ (ใช้ได้ทั้งห้องและรถ)

```text
A bold key standing upright, filled solid with #7C3AED, with a circular renewal
arrow wrapped around the head of the key filled solid with #5B21B6. Bold flat
duotone app icon, 1:1 square composition, plain pure white background, thick
uniform strokes (about 8px at 512px, never thinner), rounded corners on every
shape, at most three simple shapes, generous even padding so the icon fills about
70% of the canvas, no hairlines, no thin interior outlines, no fine detail, high
contrast. Subtle depth from the two-tone layering and a very short soft shadow
under the main shape. Clean modern vector SaaS brand mark, crisp edges, instantly
readable when scaled down to 32px. No thin lines, no outline-only shapes, no
gradient mesh, no 3D render, no bevel, no glow, no photorealism, no texture, no
noise, no background scenery, no extra props, no frame, no border, no watermark,
no text, no letters, no numbers.
```

### 3.3 Hotel — โรงแรม · ฟ้า `#06B6D4` + `#0E7490`

แนวคิด: เตียงทึบ + หลังคาสีเข้มเหนือเตียง → พักรายวัน (ไม่ต้องมีดีเทลขา/หมอนเล็กๆ)

```text
A bold bed seen from the front, filled solid with #06B6D4, with a simple
triangular roof floating above it filled solid with #0E7490. Bold flat duotone
app icon, 1:1 square composition, plain pure white background, thick uniform
strokes (about 8px at 512px, never thinner), rounded corners on every shape, at
most three simple shapes, generous even padding so the icon fills about 70% of
the canvas, no hairlines, no thin interior outlines, no fine detail, high
contrast. Subtle depth from the two-tone layering and a very short soft shadow
under the main shape. Clean modern vector SaaS brand mark, crisp edges, instantly
readable when scaled down to 32px. No thin lines, no outline-only shapes, no
gradient mesh, no 3D render, no bevel, no glow, no photorealism, no texture, no
noise, no background scenery, no extra props, no frame, no border, no watermark,
no text, no letters, no numbers.
```

### 3.4 F&B — อาหารและเครื่องดื่ม · แดง `#E11D48` + `#9F1239`

แนวคิด: ฝาครอบอาหารทึบ + ไอร้อน 2 เส้น (ลดจาก 3 เพื่อไม่ให้รก) → ครัว/เสิร์ฟ

```text
A bold dome food cloche, filled solid with #E11D48, with two short thick steam
curls above it filled solid with #9F1239. Bold flat duotone app icon, 1:1 square
composition, plain pure white background, thick uniform strokes (about 8px at
512px, never thinner), rounded corners on every shape, at most three simple
shapes, generous even padding so the icon fills about 70% of the canvas, no
hairlines, no thin interior outlines, no fine detail, high contrast. Subtle depth
from the two-tone layering and a very short soft shadow under the main shape.
Clean modern vector SaaS brand mark, crisp edges, instantly readable when scaled
down to 32px. No thin lines, no outline-only shapes, no gradient mesh, no 3D
render, no bevel, no glow, no photorealism, no texture, no noise, no background
scenery, no extra props, no frame, no border, no watermark, no text, no letters,
no numbers.
```

### 3.5 Service — บริการ · น้ำเงิน `#2563EB` + `#1E40AF`

แนวคิด: ประแจทึบ + เครื่องหมายถูกเส้นหนา ไขว้กัน → งานบริการที่ปิดจ็อบ

```text
A bold wrench filled solid with #2563EB, crossed with a thick checkmark filled
solid with #1E40AF, the two shapes sharing one clean intersection. Bold flat
duotone app icon, 1:1 square composition, plain pure white background, thick
uniform strokes (about 8px at 512px, never thinner), rounded corners on every
shape, at most three simple shapes, generous even padding so the icon fills about
70% of the canvas, no hairlines, no thin interior outlines, no fine detail, high
contrast. Subtle depth from the two-tone layering and a very short soft shadow
under the main shape. Clean modern vector SaaS brand mark, crisp edges, instantly
readable when scaled down to 32px. No thin lines, no outline-only shapes, no
gradient mesh, no 3D render, no bevel, no glow, no photorealism, no texture, no
noise, no background scenery, no extra props, no frame, no border, no watermark,
no text, no letters, no numbers.
```

### 3.6 Pharmacy — ขายยา · เขียวมรกต `#10B981` + `#047857`

แนวคิด: ครกทึบ + สากและเม็ดแคปซูลสีเข้ม → ร้านขายยา

```text
A bold mortar filled solid with #10B981, with a pestle inside it and one capsule
pill beside it, both filled solid with #047857. Bold flat duotone app icon, 1:1
square composition, plain pure white background, thick uniform strokes (about 8px
at 512px, never thinner), rounded corners on every shape, at most three simple
shapes, generous even padding so the icon fills about 70% of the canvas, no
hairlines, no thin interior outlines, no fine detail, high contrast. Subtle depth
from the two-tone layering and a very short soft shadow under the main shape.
Clean modern vector SaaS brand mark, crisp edges, instantly readable when scaled
down to 32px. No thin lines, no outline-only shapes, no gradient mesh, no 3D
render, no bevel, no glow, no photorealism, no texture, no noise, no background
scenery, no extra props, no frame, no border, no watermark, no text, no letters,
no numbers.
```

---

## 4) เคล็ดลับตอน gen

| อาการ | เติมข้อความนี้ |
| --- | --- |
| ยังบาง/ยังรก | `simplify to fewer shapes, thicker strokes, larger icon` |
| มีมิติไม่พอ | `increase depth: add a second darker shade layer and a short soft shadow` |
| เส้นหนาไม่เท่ากัน | `identical stroke weight on every shape, same corner radius everywhere` |
| อยากได้ฉากหลังโปร่งใส | `transparent background instead of white` |
| อยากได้ชุดขาว (dark mode) | `all shapes pure white with a light cyan #31b5be secondary tone on a dark navy #0c4778 background` |

**เกณฑ์ตัดสินง่ายๆ:** ย่อรูปเป็น 32px แล้วยังบอกได้ว่าอันไหนคือโมดูลไหน = ผ่าน
ถ้าต้องเพ่ง = gen ใหม่

**หมายเหตุพาเลตต์:** 6 สีนี้อยู่ร่วมกับสีแบรนด์เดิมของ MBSuite.Dev ได้
(น้ำเงินเข้ม `#0c4778`, cyan `#31b5be`, ink `#102b46`) — ใช้เป็นพื้นหลังหรือสีตัวอักษรประกอบได้
