import { useEffect } from 'react'
import type { CustomerDoc } from '../data/customerDocs'
import './CustomerDocs.css'

type Props = {
  doc: CustomerDoc
}

function Section({ number, title, items, ordered = false }: { number: string; title: string; items: string[]; ordered?: boolean }) {
  const List = ordered ? 'ol' : 'ul'
  return (
    <section className="cdoc-section">
      <div className="cdoc-section-heading">
        <span aria-hidden="true">{number}</span>
        <h2>{title}</h2>
      </div>
      <List className="cdoc-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </List>
    </section>
  )
}

export default function CustomerDocPage({ doc }: Props) {
  useEffect(() => {
    document.title = `${doc.name} | คู่มือสำหรับลูกค้า | MBSuite`
  }, [doc.name])

  return (
    <article className="cdoc-page section-pad">
      <div className="content-wrap">
        <div className="cdoc-toolbar">
          <a className="cdoc-back" href="/documents/products">← กลับไปเลือกคู่มือ</a>
          <button className="cdoc-print" type="button" onClick={() => window.print()}>
            <span aria-hidden="true">▤</span> พิมพ์ / บันทึก PDF
          </button>
        </div>

        <header className="cdoc-hero">
          <p className="cdoc-hero-name">{doc.fullName}</p>
          <span className="section-kicker">คู่มือสำหรับลูกค้า · {doc.number}</span>
          <h1>{doc.name}</h1>
          <p className="cdoc-hero-tagline">{doc.tagline}</p>
          <p className="cdoc-hero-overview">{doc.overview}</p>
          <div className="cdoc-actions">
            <a className="cdoc-button-primary" href={`${doc.url}register`} target="_blank" rel="noopener noreferrer">
              สมัครทดลองใช้งาน <span aria-hidden="true">↗</span>
            </a>
            <a className="cdoc-button-secondary" href={`${doc.url}login`} target="_blank" rel="noopener noreferrer">
              เข้าสู่ระบบ <span aria-hidden="true">↗</span>
            </a>
          </div>
        </header>

        <div className="cdoc-layout">
          <nav className="cdoc-toc" aria-label="เนื้อหาในคู่มือ">
            <strong>เนื้อหาในคู่มือ</strong>
            <a href="#cdoc-audience">เหมาะกับใคร</a>
            <a href="#cdoc-can-do">ทำอะไรได้บ้าง</a>
            <a href="#cdoc-start">เริ่มต้นใช้งาน</a>
            <a href="#cdoc-routine">งานประจำ</a>
            <a href="#cdoc-before">ควรรู้ก่อนทดลอง</a>
            <a href="#cdoc-connect">เชื่อมกับระบบบัญชี</a>
          </nav>

          <div className="cdoc-body">
            <section className="cdoc-section" id="cdoc-audience">
              <div className="cdoc-section-heading"><span aria-hidden="true">01</span><h2>เหมาะกับใคร</h2></div>
              <p className="cdoc-intro">โปรแกรมนี้ออกแบบมาสำหรับกิจการลักษณะเหล่านี้</p>
              <ul className="cdoc-list">
                {doc.audience.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <Section number="02" title="ทำอะไรได้บ้าง" items={doc.canDo} />
            <Section number="03" title="เริ่มต้นใช้งาน 4 ขั้นตอน" items={doc.start} ordered />
            <Section number="04" title="งานที่ควรทำเป็นประจำ" items={doc.routine} />

            <section className="cdoc-section cdoc-warning" id="cdoc-before">
              <div className="cdoc-section-heading"><span aria-hidden="true">05</span><h2>ควรรู้ก่อนทดลอง</h2></div>
              <p className="cdoc-intro">เขียนตามความเป็นจริงของโปรแกรมในขณะนี้ เพื่อไม่ให้คาดหวังผิดก่อนตัดสินใจ</p>
              <ul className="cdoc-list">
                {doc.beforeTrial.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="cdoc-section" id="cdoc-connect">
              <div className="cdoc-section-heading"><span aria-hidden="true">06</span><h2>เชื่อมกับระบบบัญชีหลัก</h2></div>
              <p>{doc.connect}</p>
            </section>

            <aside className="cdoc-disclaimer">
              <strong>ข้อควรระวังเรื่องข้อมูลและภาษี</strong>
              <p>
                ตรวจเอกสารต้นทาง การจัดหมวด และข้อกำหนดภาษีปัจจุบันก่อนบันทึกหรือยื่นแบบ
                รายงานในระบบช่วยรวบรวมข้อมูล ไม่ใช่การรับรองความถูกต้องหรือการยื่นแบบอัตโนมัติทุกประเภท
              </p>
            </aside>
          </div>
        </div>

        <div className="cdoc-bottom-links">
          <a className="cdoc-button-secondary" href="/documents/products">← เลือกคู่มือโปรแกรมอื่น</a>
          <a className="cdoc-button-secondary" href="/guide">คู่มือเริ่มต้นใช้งานระบบบัญชี</a>
        </div>

        <div className="cdoc-footer-note">
          <p>Powered by Microtronic © 2026 Microtronic Co., Ltd.</p>
          <a href="https://microtronic.biz/" target="_blank" rel="noopener noreferrer">microtronic.biz ↗</a>
        </div>
      </div>
    </article>
  )
}
