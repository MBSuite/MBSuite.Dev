import { useEffect } from 'react'
import { CUSTOMER_DOCS } from '../data/customerDocs'
import './CustomerDocs.css'

export default function CustomerDocsHome() {
  useEffect(() => {
    document.title = 'คู่มือสำหรับลูกค้า | MBSuite'
  }, [])

  return (
    <section className="cdoc-home section-pad">
      <div className="content-wrap">
        <a className="cdoc-back" href="/documents">← กลับศูนย์เอกสาร</a>
        <header className="cdoc-heading">
          <span className="section-kicker">เอกสารสำหรับลูกค้า</span>
          <h1>คู่มือเลือกและเริ่มใช้ MBSuite</h1>
          <p>
            เขียนสำหรับนักบัญชีและเจ้าของกิจการ ใช้ภาษาง่าย ๆ ไม่ต้องรู้เรื่องเขียนโปรแกรม
            อ่านแล้วจะรู้ว่าแต่ละโปรแกรมเหมาะกับใคร ทำอะไรได้บ้าง และควรลองอะไรก่อนตัดสินใจ
          </p>
        </header>

        <div className="cdoc-notice">
          <strong>อ่านก่อนทดลอง</strong>
          <p>
            แต่ละโปรแกรมใช้งานได้อิสระ และสามารถผูกกับระบบบัญชีหลักเพื่อรวมข้อมูลด้านการเงินได้
            รายงานภาษีเป็นข้อมูลช่วยตรวจทาน ไม่ใช่การยื่นแบบแทน ควรตรวจเอกสารต้นทางและข้อกำหนดปัจจุบันก่อนใช้งานจริง
          </p>
        </div>

        <div className="cdoc-grid">
          {CUSTOMER_DOCS.map((doc) => (
            <article className="cdoc-card" key={doc.slug}>
              <span className="cdoc-card-number" aria-hidden="true">{doc.number}</span>
              <p className="cdoc-card-label">{doc.fullName}</p>
              <h2>{doc.name}</h2>
              <p className="cdoc-card-tagline">{doc.tagline}</p>
              <p className="cdoc-card-audience"><strong>เหมาะกับ:</strong> {doc.audience.slice(0, 2).join(', ')}</p>
              <a className="cdoc-card-link" href={`/documents/products/${doc.slug}`}>
                อ่านคู่มือ <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>

        <div className="cdoc-footer-note">
          <p>Powered by Microtronic © 2026 Microtronic Co., Ltd.</p>
          <a href="https://microtronic.biz/" target="_blank" rel="noopener noreferrer">microtronic.biz ↗</a>
        </div>
      </div>
    </section>
  )
}
