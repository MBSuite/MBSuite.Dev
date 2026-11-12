import { useTranslation } from 'react-i18next'
import './BenefitsShowcase.css'

interface Benefit {
  title: string
  desc: string
}

export default function BenefitsShowcase() {
  const { t } = useTranslation()
  const sectionData = t('benefits', { returnObjects: true }) as any
  const items = sectionData?.items as Benefit[] | undefined

  if (!items || items.length === 0) return null

  return (
    <section id="benefits" className="benefits-showcase section-pad">
      <div className="content-wrap">
        <div className="section-heading mb-12">
          <span className="section-kicker">{sectionData?.kicker}</span>
          <h2>{sectionData?.title}</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((benefit, idx) => (
            <article key={benefit.title} className="benefit-showcase-card">
              <div className="benefit-badge">{String(idx + 1).padStart(2, '0')}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
              <div className="benefit-underline"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
