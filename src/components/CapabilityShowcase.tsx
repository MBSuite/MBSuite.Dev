import { useTranslation } from 'react-i18next'
import './CapabilityShowcase.css'

interface Feature {
  title: string
  desc: string
}

export default function CapabilityShowcase() {
  const { t } = useTranslation()
  const sectionData = t('features', { returnObjects: true }) as any
  const items = sectionData?.items as Feature[] | undefined

  if (!items || items.length === 0) return null

  const coreFeatures = items.filter(item => !item.title.includes('Add-on'))
  const addOns = items.filter(item => item.title.includes('Add-on') || item.title.includes('Inventory') || item.title.includes('ชำระเงิน') || item.title.includes('ปลักอิน') || item.title.includes('ความปลอดภัย'))

  return (
    <section id="capabilities" className="capabilities-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{sectionData?.kicker}</span>
          <h2>{sectionData?.title}</h2>
          <p>{sectionData?.subtitle}</p>
        </div>

        <div className="capabilities-group">
          <h3 className="group-title">เครื่องมือหลัก</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {coreFeatures.slice(0, 2).map((feature, idx) => (
              <article key={feature.title} className="capability-card">
                <div className="capability-badge">{String(idx + 1).padStart(2, '0')}</div>
                <h4>{feature.title}</h4>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="capabilities-group">
          <h3 className="group-title">เครื่องมือเสริม (Add-ons)</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {addOns.map((addon) => (
              <article key={addon.title} className="addon-card">
                <h4>{addon.title}</h4>
                <p>{addon.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
