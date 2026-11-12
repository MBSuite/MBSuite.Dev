import { useTranslation } from 'react-i18next'

interface InfoCard {
  label: string
  title: string
  desc: string
  url?: string
}

export default function InfoContent() {
  const { t } = useTranslation()
  const info = t('infoContent', { returnObjects: true }) as {
    title: string
    subtitle: string
    fitNote: string
    items: InfoCard[]
  }

  return (
    <section id="info" className="info-section section-pad neon-dark-section">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker neon-kicker">{t('infoContent.kicker')}</span>
          <h2 className="neon-gradient-text">{info.title}</h2>
          <p>{info.subtitle}</p>
        </div>
        <div className="info-grid">
          {info.items.map((card) => (
            <article key={card.label} className="info-card neon-glass-card">
              <span className="info-label neon-label">{card.label}</span>
              <h3 className="neon-card-title">{card.title}</h3>
              <p className="neon-card-text">{card.desc}</p>
              {card.url && (
                <a href={card.url} className="neon-card-link" target="_blank" rel="noopener noreferrer">
                  {t('common.getStarted')} <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
        <p className="info-fit-note neon-subtitle">{info.fitNote}</p>
      </div>
    </section>
  )
}
