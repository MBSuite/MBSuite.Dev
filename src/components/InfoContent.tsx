import { useTranslation } from 'react-i18next'
import './InfoContent.css'

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
    <section id="info" className="info-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{t('infoContent.kicker')}</span>
          <h2>{info.title}</h2>
          <p>{info.subtitle}</p>
        </div>
        <div className="info-grid">
          {info.items.map((card) => (
            <article key={card.label} className="info-card">
              <span className="info-label">{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              {card.url && (
                <a href={card.url} className="info-card-link" target="_blank" rel="noopener noreferrer">
                  {t('common.getStarted')} <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>
        <p className="info-fit-note">{info.fitNote}</p>
      </div>
    </section>
  )
}
