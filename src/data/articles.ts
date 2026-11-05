export type ArticleSection = {
  heading: string
  paragraphs: string[]
  points?: string[]
}

export type Article = {
  slug: string
  category: string
  readTime: string
  title: string
  excerpt: string
  sections: ArticleSection[]
  takeaway: string
}

const articles = {
  th: [
    {
      slug: 'repair-job-profit-costs',
      category: 'ต้นทุนงานบริการ',
      readTime: 'อ่าน 4 นาที',
      title: 'งานซ่อมมีกำไรจริงไหม? วิธีแยกค่าอะไหล่ ค่าแรง และค่าใช้จ่าย',
      excerpt: 'เห็นต้นทุนของแต่ละงานชัดขึ้น ด้วยการบันทึกอะไหล่ ค่าแรง และค่าใช้จ่ายให้ครบตั้งแต่รับงานจนส่งมอบ',
      sections: [
        {
          heading: 'เริ่มจากแยกต้นทุนต่อใบงาน',
          paragraphs: [
            'ธุรกิจรับซ่อมอาจมีรายรับหลายส่วนในใบงานเดียว ทั้งค่าแรง ค่าตรวจเช็ก และค่าอะไหล่ หากบันทึกเป็นยอดรวมเพียงรายการเดียว จะย้อนดูได้ยากว่างานประเภทใดใช้ทรัพยากรมากกว่าที่คาด',
            'กำหนดเลขที่งานให้ติดตามได้ แล้วบันทึกรายการวัสดุและเวลาทำงานที่เกี่ยวข้องกับงานนั้นโดยตรง วิธีนี้ช่วยให้ข้อมูลจากทีมช่างเชื่อมกับการออกเอกสารและการสรุปผลทางการเงินได้ง่ายขึ้น',
          ],
          points: ['ค่าอะไหล่ที่เบิกใช้และจำนวน', 'ชั่วโมงทำงานหรือค่าบริการ', 'ค่าเดินทางหรือค่าใช้จ่ายเฉพาะงาน'],
        },
        {
          heading: 'อย่าลืมรายการที่เกิดหลังประเมินราคา',
          paragraphs: [
            'บางงานมีการเปลี่ยนอะไหล่เพิ่มเติมหรือใช้เวลาซ่อมนานกว่าที่ประเมิน ควรบันทึกการเปลี่ยนแปลงและผู้อนุมัติ พร้อมสื่อสารกับลูกค้าก่อนดำเนินงานส่วนเพิ่มตามข้อตกลงของธุรกิจ',
            'เมื่อปิดงาน ให้ตรวจว่ารายการที่ใช้จริงตรงกับใบงานและเอกสารเรียกเก็บเงินหรือไม่ การตรวจสั้น ๆ ก่อนปิดงานช่วยลดการตกหล่นและทำให้ประวัติบริการครบถ้วน',
          ],
        },
        {
          heading: 'ใช้ข้อมูลเพื่อปรับการประเมินครั้งถัดไป',
          paragraphs: [
            'เปรียบเทียบต้นทุนที่คาดไว้กับต้นทุนที่เกิดขึ้นจริงในงานลักษณะใกล้เคียงกัน หากพบความต่างซ้ำ ๆ ให้ทบทวนขั้นตอน ราคาอะไหล่ หรือเวลามาตรฐาน โดยพิจารณาคุณภาพงานและเงื่อนไขการรับประกันควบคู่กัน',
          ],
        },
      ],
      takeaway: 'กำไรของงานบริการจะเห็นได้ชัดขึ้น เมื่อทุกค่าใช้จ่ายผูกกับใบงานเดียวกันและมีการตรวจข้อมูลก่อนปิดงาน',
    },
    {
      slug: 'construction-project-cost-control',
      category: 'บริหารโครงการ',
      readTime: 'อ่าน 5 นาที',
      title: 'ติดตามต้นทุนโครงการก่อสร้างให้ทัน ด้วยงบประมาณและข้อมูลหน้างาน',
      excerpt: 'วางแผนเทียบงบกับต้นทุนจริง ติดตามการเบิกวัสดุ และบันทึกการเปลี่ยนแปลงก่อนกระทบผลประกอบการ',
      sections: [
        {
          heading: 'ตั้งงบประมาณให้ตรวจสอบย้อนกลับได้',
          paragraphs: [
            'แยกงบตามโครงการและหมวดต้นทุน เช่น วัสดุ ค่าแรง ผู้รับเหมา และค่าใช้จ่ายหน้างาน ระบุผู้รับผิดชอบและช่วงเวลาที่คาดว่าจะใช้เงิน เพื่อให้ทีมเห็นกรอบเดียวกันตั้งแต่เริ่มโครงการ',
            'ประมาณการเป็นเครื่องมือวางแผน ไม่ใช่ตัวเลขตายตัว ควรเก็บที่มาของราคา ปริมาณ และสมมติฐานไว้ เพื่อให้ทบทวนได้เมื่อขอบเขตงานหรือราคาวัสดุเปลี่ยน',
          ],
        },
        {
          heading: 'เชื่อมใบขอซื้อ การรับของ และการเบิกใช้',
          paragraphs: [
            'การดูเฉพาะยอดสั่งซื้ออาจยังไม่สะท้อนต้นทุนที่เกิดขึ้นจริง ควรติดตามตั้งแต่คำขอซื้อ การอนุมัติ การรับวัสดุ ไปจนถึงการเบิกไปใช้กับโครงการ พร้อมอ้างอิงเอกสารและวันที่ให้ตรงกัน',
          ],
          points: ['ระบุโครงการและหมวดต้นทุนในเอกสาร', 'บันทึกปริมาณรับเข้าและเบิกออก', 'ตรวจรายการค้างส่งหรือคืนวัสดุ'],
        },
        {
          heading: 'ทบทวนความคลาดเคลื่อนเป็นรอบ',
          paragraphs: [
            'กำหนดรอบทบทวนที่เหมาะกับขนาดโครงการ แล้วเปรียบเทียบงบประมาณกับยอดผูกพันและค่าใช้จ่ายที่บันทึกแล้ว หากพบแนวโน้มเกินงบ ให้ตรวจสาเหตุและผลกระทบก่อนอนุมัติการเปลี่ยนแปลง',
            'เมื่อโครงการเสร็จ ควรสรุปบทเรียนเรื่องต้นทุนและระยะเวลาไว้ใช้วางแผนงานถัดไป โดยแยกข้อเท็จจริงออกจากประมาณการ',
          ],
        },
      ],
      takeaway: 'การควบคุมต้นทุนโครงการต้องเห็นทั้งงบที่วางไว้ รายการที่สั่งซื้อ และวัสดุที่ใช้จริงในบริบทเดียวกัน',
    },
    {
      slug: 'payroll-month-end-checklist',
      category: 'เงินเดือนและบุคลากร',
      readTime: 'อ่าน 4 นาที',
      title: 'เตรียมข้อมูลเงินเดือนให้พร้อม ก่อนถึงรอบจ่ายจริง',
      excerpt: 'จัดข้อมูลเวลาเข้างาน การลา และรายการปรับปรุงให้เป็นรอบ ลดการแก้ไขซ้ำในช่วงปิดเงินเดือน',
      sections: [
        {
          heading: 'กำหนดวันตัดรอบและผู้ส่งข้อมูล',
          paragraphs: [
            'กำหนดช่วงเวลาที่ใช้คำนวณเงินเดือน วันสุดท้ายที่รับข้อมูล และผู้รับผิดชอบตรวจสอบให้ชัดเจน แจ้งแนวทางให้พนักงานและหัวหน้าทีมทราบล่วงหน้า เพื่อให้ข้อมูลมาถึงฝ่ายเงินเดือนทันเวลา',
            'แยกข้อมูลที่ใช้คำนวณประจำออกจากรายการเปลี่ยนแปลง เช่น การเริ่มงาน การเปลี่ยนตำแหน่ง หรือรายการหักที่ต้องมีเอกสารรองรับ',
          ],
        },
        {
          heading: 'ตรวจเวลาและการลาอย่างเป็นระบบ',
          paragraphs: [
            'ก่อนสรุปรอบ ให้ตรวจรายการขาด ลา มาสาย หรือเวลาที่แก้ไขย้อนหลัง โดยเทียบกับคำขออนุมัติและกติกาที่บริษัทประกาศไว้ หากข้อมูลไม่ครบ ควรส่งกลับให้ผู้เกี่ยวข้องยืนยันแทนการคาดเดา',
          ],
          points: ['ตรวจผู้อนุมัติและวันที่ของคำขอลา', 'ทวนรายการเวลาที่ผิดปกติหรือไม่มีข้อมูล', 'เก็บประวัติการแก้ไขและเหตุผล'],
        },
        {
          heading: 'ตรวจยอดรวมก่อนส่งจ่าย',
          paragraphs: [
            'ทำรายการสรุปก่อนอนุมัติจ่าย โดยเปรียบเทียบจำนวนพนักงาน ยอดรวม และรายการเปลี่ยนแปลงกับรอบก่อนหน้า ความแตกต่างที่มากผิดปกติควรได้รับการตรวจสอบโดยผู้มีอำนาจก่อนส่งข้อมูลจ่ายเงินจริง',
            'ข้อมูลเงินเดือนเป็นข้อมูลส่วนบุคคล ควรจำกัดสิทธิ์เข้าถึงและส่งผ่านช่องทางที่องค์กรกำหนด',
          ],
        },
      ],
      takeaway: 'รอบเงินเดือนที่ราบรื่นเริ่มจากปฏิทินตัดรอบที่ชัดเจน ข้อมูลที่ตรวจสอบได้ และการอนุมัติก่อนจ่าย',
    },
    {
      slug: 'purchase-request-to-order-workflow',
      category: 'จัดซื้อและอนุมัติ',
      readTime: 'อ่าน 4 นาที',
      title: 'จัดซื้อให้ต่อเนื่อง: วางขั้นตอนจากคำขอซื้อถึงรับสินค้า',
      excerpt: 'ทำให้ทีมเห็นสถานะคำขอซื้อ ผู้อนุมัติ และกำหนดส่ง ลดการสั่งซ้ำหรือรอเอกสารโดยไม่รู้ความคืบหน้า',
      sections: [
        {
          heading: 'เริ่มคำขอซื้อด้วยข้อมูลที่ครบ',
          paragraphs: [
            'ระบุสิ่งที่ต้องการ จำนวน หน่วย วันที่ต้องใช้ เหตุผล และหน่วยงานหรือโครงการที่เกี่ยวข้อง หากเป็นสินค้าคงคลัง ให้ตรวจยอดคงเหลือและรายการที่กำลังสั่งก่อนเปิดคำขอใหม่',
            'ข้อมูลที่ชัดเจนช่วยให้ผู้อนุมัติประเมินความจำเป็นและงบประมาณได้ โดยไม่ต้องถามกลับหลายรอบ',
          ],
        },
        {
          heading: 'กำหนดเส้นทางอนุมัติตามประเภทและวงเงิน',
          paragraphs: [
            'องค์กรควรกำหนดผู้อนุมัติและขอบเขตอำนาจให้สอดคล้องกับนโยบายภายใน ระบุสถานะที่ติดตามง่าย เช่น รอตรวจสอบ อนุมัติแล้ว สั่งซื้อแล้ว และรับสินค้าแล้ว พร้อมเก็บเวลาและผู้ดำเนินการ',
          ],
          points: ['แยกผู้ขอ ผู้ตรวจ และผู้อนุมัติ', 'บันทึกเหตุผลเมื่อขอแก้ไขหรือปฏิเสธ', 'แจ้งผู้เกี่ยวข้องเมื่อสถานะเปลี่ยน'],
        },
        {
          heading: 'ปิดวงจรด้วยการรับและตรวจเอกสาร',
          paragraphs: [
            'เมื่อสินค้าเข้ามา ให้ตรวจจำนวนและสภาพเทียบกับคำสั่งซื้อ บันทึกของที่รับไม่ครบหรือส่งคืน และเชื่อมเอกสารรับสินค้าเข้ากับใบสั่งซื้อก่อนส่งต่อข้อมูลให้ฝ่ายบัญชี',
            'การดูรายการค้างส่งเป็นประจำช่วยให้ทีมวางแผนการใช้ของและติดตามผู้ขายได้ก่อนงานสะดุด',
          ],
        },
      ],
      takeaway: 'ขั้นตอนจัดซื้อที่มีสถานะชัดเจนช่วยลดการตกหล่น และทำให้ตรวจสอบย้อนหลังได้ตั้งแต่คำขอจนถึงรับสินค้า',
    },
    {
      slug: 'sales-quotation-follow-up',
      category: 'งานขายและเอกสาร',
      readTime: 'อ่าน 4 นาที',
      title: 'ติดตามใบเสนอราคาอย่างไร ให้ทีมขายเห็นโอกาสที่ต้องดูแล',
      excerpt: 'ใช้สถานะ วันที่ติดตาม และบันทึกการติดต่อช่วยให้ทีมรู้ว่าใบเสนอราคาใดยังรอคำตอบและควรทำอะไรต่อ',
      sections: [
        {
          heading: 'บันทึกข้อมูลที่ช่วยให้ทำงานต่อได้',
          paragraphs: [
            'นอกจากชื่อลูกค้าและยอดเสนอราคา ควรบันทึกผู้ดูแล วันที่ส่ง ช่องทางติดต่อ และสิ่งที่ลูกค้าต้องการ การมีข้อมูลชุดเดียวช่วยให้สมาชิกทีมรับช่วงต่อได้โดยไม่ต้องไล่ค้นบทสนทนาเก่า',
          ],
          points: ['วันที่ส่งและวันที่ควรติดตาม', 'สินค้า บริการ และเงื่อนไขสำคัญ', 'ผู้รับผิดชอบและขั้นตอนถัดไป'],
        },
        {
          heading: 'ใช้สถานะที่สะท้อนความคืบหน้าจริง',
          paragraphs: [
            'กำหนดสถานะที่ทีมเข้าใจตรงกัน เช่น ร่าง ส่งแล้ว รอคำตอบ ต่อรอง ชนะ หรือไม่สำเร็จ อัปเดตสถานะเมื่อมีข้อมูลใหม่ และบันทึกเหตุผลเมื่อปิดโอกาสเพื่อใช้ปรับกระบวนการขาย',
            'อย่าถือว่าการส่งเอกสารหมายถึงลูกค้าได้รับหรือยอมรับแล้ว ควรติดตามตามช่วงเวลาที่เหมาะสมและเคารพความสะดวกของลูกค้า',
          ],
        },
        {
          heading: 'สรุปผลเพื่อปรับแผน',
          paragraphs: [
            'ทบทวนจำนวนใบเสนอราคาที่รอคำตอบ ระยะเวลาตั้งแต่ส่งจนปิดการขาย และเหตุผลที่ลูกค้าไม่เลือกข้อเสนอ ใช้ข้อมูลเหล่านี้ปรับการนำเสนอและการวางแผนทีม โดยไม่สรุปผลจากข้อมูลเพียงช่วงสั้นหรือกลุ่มตัวอย่างน้อยเกินไป',
          ],
        },
      ],
      takeaway: 'การติดตามที่ดีไม่ใช่การส่งข้อความถี่ขึ้น แต่คือการรู้สถานะ บริบท และขั้นตอนต่อไปของแต่ละโอกาส',
    },
    {
      slug: 'inventory-item-codes-units',
      category: 'สินค้าและคลัง',
      readTime: 'อ่าน 4 นาที',
      title: 'รหัสสินค้าและหน่วยนับที่เป็นมาตรฐาน ช่วยให้สต็อกเชื่อถือได้',
      excerpt: 'วางหลักตั้งรหัสและเลือกหน่วยนับให้สม่ำเสมอ ลดสินค้าซ้ำและความคลาดเคลื่อนในการซื้อ ขาย และตรวจนับ',
      sections: [
        {
          heading: 'สร้างรหัสที่ไม่ซ้ำและอ่านต่อได้',
          paragraphs: [
            'เลือกรูปแบบรหัสที่เหมาะกับจำนวนสินค้าและการทำงาน กำหนดผู้รับผิดชอบการสร้างรหัส และหลีกเลี่ยงการนำรหัสเดิมกลับมาใช้กับสินค้าคนละรายการ',
            'ชื่อสินค้าและรายละเอียดควรช่วยแยกความแตกต่าง เช่น ขนาด รุ่น สี หรือบรรจุภัณฑ์ โดยใช้รูปแบบการเขียนที่ทีมค้นหาได้ตรงกัน',
          ],
        },
        {
          heading: 'กำหนดหน่วยหลักและวิธีแปลงหน่วย',
          paragraphs: [
            'สินค้าเดียวกันอาจซื้อเป็นลัง แต่ขายเป็นชิ้น ควรระบุหน่วยหลักและอัตราแปลงให้ชัดเจน พร้อมทดสอบตัวอย่างก่อนเริ่มบันทึกธุรกรรมจริง หากอัตราส่วนไม่แน่นอน ให้ยืนยันกับผู้ขายหรือผู้รับผิดชอบสินค้า',
          ],
          points: ['กำหนดหน่วยซื้อ หน่วยเก็บ และหน่วยขาย', 'ตรวจอัตราแปลงและการปัดเศษ', 'บันทึกบาร์โค้ดหรือรหัสผู้ขายเมื่อจำเป็น'],
        },
        {
          heading: 'ทบทวนรายการซ้ำและตรวจนับเป็นรอบ',
          paragraphs: [
            'ค้นหารายการที่มีชื่อใกล้กันแต่ใช้คนละรหัส และให้ผู้รับผิดชอบอนุมัติก่อนรวมรายการ ตรวจนับสินค้าตามรอบที่เหมาะสมและบันทึกสาเหตุของผลต่าง เพื่อแยกปัญหาการรับเข้า การเบิกใช้ หรือข้อมูลหน่วยนับ',
          ],
        },
      ],
      takeaway: 'ข้อมูลสินค้าเป็นจุดเริ่มต้นของสต็อกและต้นทุน การกำหนดรหัสกับหน่วยนับให้ตรงกันจึงช่วยลดความคลาดเคลื่อนตลอดกระบวนการ',
    },
  ],
  en: [
    {
      slug: 'repair-job-profit-costs',
      category: 'Service costs',
      readTime: '4 min read',
      title: 'Is a repair job profitable? Track parts, labor and other costs',
      excerpt: 'Understand the cost of each service job by recording parts, labor and expenses from intake through delivery.',
      sections: [
        {
          heading: 'Start with costs tied to each job',
          paragraphs: [
            'A repair can include labor, diagnostics and replacement parts on a single work order. If everything is recorded as one total, it is difficult to see which types of jobs use more resources than expected.',
            'Give each job a traceable reference and record the materials and work time related to it. This helps service records connect with billing documents and financial summaries.',
          ],
          points: ['Parts used and quantities', 'Hours worked or service fees', 'Travel or job-specific expenses'],
        },
        {
          heading: 'Record changes after the initial estimate',
          paragraphs: [
            'A job may need additional parts or take longer than expected. Record changes and approvals, and communicate additional work with the customer before proceeding according to your business terms.',
            'Before closing a job, check that actual materials and work match the work order and billing documents. A short review can prevent missed charges and incomplete service history.',
          ],
        },
        {
          heading: 'Use actual costs to improve future estimates',
          paragraphs: [
            'Compare expected costs with actual costs for similar jobs. If the same differences appear repeatedly, review your process, parts pricing or standard labor time while considering quality and warranty obligations.',
          ],
        },
      ],
      takeaway: 'Service job profitability is easier to understand when costs are linked to a work order and reviewed before it is closed.',
    },
    {
      slug: 'construction-project-cost-control',
      category: 'Project management',
      readTime: '5 min read',
      title: 'Keep construction project costs visible with budgets and site records',
      excerpt: 'Compare budgets with actual costs, track material use and record changes before they affect project results.',
      sections: [
        {
          heading: 'Build a budget that can be reviewed',
          paragraphs: [
            'Separate each project budget into cost categories such as materials, labor, contractors and site expenses. Assign owners and expected timing so the team works from the same plan.',
            'An estimate is a planning tool, not a fixed number. Keep the sources for prices, quantities and assumptions so they can be reviewed when scope or material prices change.',
          ],
        },
        {
          heading: 'Connect purchase requests, receiving and usage',
          paragraphs: [
            'Purchase orders alone may not show the actual costs incurred. Track the flow from request and approval through receiving and issuing materials to a project, with matching references and dates.',
          ],
          points: ['Assign each document to a project and cost category', 'Record quantities received and issued', 'Review open deliveries and returned materials'],
        },
        {
          heading: 'Review variances regularly',
          paragraphs: [
            'Set a review cadence that fits the project, then compare the budget with committed and recorded expenses. Investigate emerging overruns before approving a change.',
            'When a project closes, capture lessons about cost and timing for future planning, distinguishing actual results from estimates.',
          ],
        },
      ],
      takeaway: 'Project cost control requires a shared view of the original budget, ordered items and materials actually used.',
    },
    {
      slug: 'payroll-month-end-checklist',
      category: 'Payroll and people',
      readTime: '4 min read',
      title: 'Get payroll information ready before payday',
      excerpt: 'Collect attendance, leave and adjustments on a schedule to reduce last-minute corrections during payroll close.',
      sections: [
        {
          heading: 'Set a cutoff date and clear owners',
          paragraphs: [
            'Define the payroll period, the last day for submitting information and who is responsible for review. Share the schedule with employees and team leads so information reaches payroll on time.',
            'Separate recurring pay details from changes such as new starters, role changes or deductions that need supporting records.',
          ],
        },
        {
          heading: 'Review attendance and leave consistently',
          paragraphs: [
            'Before closing a period, check missing, late or amended time records against leave approvals and the company policy. Ask the relevant owner to confirm incomplete information rather than guessing.',
          ],
          points: ['Check approvers and dates for leave requests', 'Review unusual or missing time entries', 'Keep an audit trail of edits and reasons'],
        },
        {
          heading: 'Reconcile totals before payment',
          paragraphs: [
            'Prepare a summary for approval by comparing headcount, totals and changes with the prior period. Investigate material differences with an authorized reviewer before submitting payment instructions.',
            'Payroll information is personal data. Restrict access and use the channels approved by your organization.',
          ],
        },
      ],
      takeaway: 'A smoother payroll cycle starts with a clear cutoff calendar, verifiable information and approval before payment.',
    },
    {
      slug: 'purchase-request-to-order-workflow',
      category: 'Purchasing and approvals',
      readTime: '4 min read',
      title: 'Keep purchasing moving from request through delivery',
      excerpt: 'Make request status, approvals and delivery dates visible to help prevent duplicate orders and untracked delays.',
      sections: [
        {
          heading: 'Start each request with the right details',
          paragraphs: [
            'Include the item, quantity, unit, required date, reason and related team or project. For inventory items, check on-hand stock and open orders before raising another request.',
            'Complete information helps approvers review business need and budget without repeated clarification.',
          ],
        },
        {
          heading: 'Set approval paths by category and authority',
          paragraphs: [
            'Define approvers and authority limits in line with internal policy. Use clear statuses such as under review, approved, ordered and received, and retain the date and person responsible for each action.',
          ],
          points: ['Separate requesters, reviewers and approvers', 'Record reasons for changes or rejection', 'Notify owners when status changes'],
        },
        {
          heading: 'Close the loop with receiving records',
          paragraphs: [
            'When goods arrive, check their quantity and condition against the order. Record short shipments or returns, and link receiving records to the purchase order before sending information to accounting.',
            'Reviewing outstanding deliveries helps the team plan usage and follow up with vendors before work is disrupted.',
          ],
        },
      ],
      takeaway: 'Visible purchasing steps reduce missed handoffs and make the process traceable from request through delivery.',
    },
    {
      slug: 'sales-quotation-follow-up',
      category: 'Sales and documents',
      readTime: '4 min read',
      title: 'Help sales teams follow up on quotations with clear next steps',
      excerpt: 'Track status, follow-up dates and customer conversations so the team knows which quotations still need attention.',
      sections: [
        {
          heading: 'Keep the details that help the next person',
          paragraphs: [
            'Along with customer and quote totals, record the owner, date sent, contact channel and customer needs. A shared record lets teammates continue the conversation without searching through old messages.',
          ],
          points: ['Date sent and next follow-up date', 'Products, services and key terms', 'Owner and next action'],
        },
        {
          heading: 'Use statuses that reflect real progress',
          paragraphs: [
            'Agree on statuses such as draft, sent, awaiting response, negotiating, won or closed. Update them when new information arrives and record why an opportunity closes to help improve the sales process.',
            'Sending a document does not confirm that a customer received or accepted it. Follow up at a suitable time and respect the customer’s preferences.',
          ],
        },
        {
          heading: 'Review outcomes to improve planning',
          paragraphs: [
            'Review open quotations, time to close and reasons customers did not proceed. Use the information to refine presentations and team planning, while avoiding conclusions from very short periods or small samples.',
          ],
        },
      ],
      takeaway: 'Good follow-up is not about sending more messages; it is about knowing each opportunity’s status, context and next step.',
    },
    {
      slug: 'inventory-item-codes-units',
      category: 'Products and inventory',
      readTime: '4 min read',
      title: 'Consistent item codes and units make inventory more reliable',
      excerpt: 'Set clear item-code and unit-of-measure rules to reduce duplicates and errors across purchasing, sales and counts.',
      sections: [
        {
          heading: 'Create unique codes that are easy to maintain',
          paragraphs: [
            'Choose a code format that fits the catalog and assign an owner for creating new codes. Avoid reusing an existing code for a different product.',
            'Product names and descriptions should distinguish relevant details such as size, model, color or packaging, using terms the team can search consistently.',
          ],
        },
        {
          heading: 'Define a base unit and conversion rules',
          paragraphs: [
            'An item may be purchased by the case and sold individually. Define the base unit and conversion rate, then test examples before recording live transactions. Confirm uncertain ratios with the supplier or item owner.',
          ],
          points: ['Define purchasing, stocking and selling units', 'Check conversion rates and rounding', 'Record barcodes or supplier codes where useful'],
        },
        {
          heading: 'Review duplicates and count inventory',
          paragraphs: [
            'Look for similar descriptions under different codes and require an owner’s approval before consolidating records. Count inventory on an appropriate schedule and record the reason for variances to distinguish receiving, issuing and unit errors.',
          ],
        },
      ],
      takeaway: 'Product data is the starting point for inventory and cost records, so consistent codes and units help reduce errors throughout the process.',
    },
  ],
} satisfies Record<'th' | 'en', Article[]>

export function getArticles(language: string): Article[] {
  return language.startsWith('th') ? articles.th : articles.en
}

export function getArticleBySlug(slug: string, language: string): Article | undefined {
  return getArticles(language).find((article) => article.slug === slug)
}
