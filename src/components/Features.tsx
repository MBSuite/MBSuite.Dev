import { useTranslation } from 'react-i18next'

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <section id="features" className="features-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{t('features.kicker')}</span>
          <h2>{t('features.title')}</h2>
          <p>{t('features.subtitle')}</p>
        </div>
        <div className="feature-grid">
          {items.map((item, idx) => (
            <article key={item.title} className="feature-card">
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
