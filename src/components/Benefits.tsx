import { useTranslation } from 'react-i18next'

export default function Benefits() {
  const { t } = useTranslation()
  const items = t('benefits.items', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <section className="benefits-section">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{t('benefits.kicker')}</span>
          <h2>{t('benefits.title')}</h2>
        </div>
        <div className="benefit-grid">
          {items.map((item, idx) => (
            <article key={item.title} className="benefit-card">
              <span className="card-mark" aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
