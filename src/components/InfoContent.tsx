import { useTranslation } from 'react-i18next'

export default function InfoContent() {
  const { t } = useTranslation()
  const info = t('infoContent', { returnObjects: true }) as {
    title: string
    subtitle: string
    aiTitle: string
    aiDesc: string
    googleTitle: string
    googleDesc: string
    licenseTitle: string
    licenseDesc: string
    taxTitle: string
    taxDesc: string
  }

  const cards = [
    { title: info.aiTitle, desc: info.aiDesc, label: "AI" },
    { title: info.googleTitle, desc: info.googleDesc, label: "Google" },
    { title: info.licenseTitle, desc: info.licenseDesc, label: "License" },
    { title: info.taxTitle, desc: info.taxDesc, label: "Tax" },
  ]

  return (
    <section id="info" className="info-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{t('infoContent.kicker')}</span>
          <h2>{info.title}</h2>
          <p>{info.subtitle}</p>
        </div>
        <div className="info-grid">
          {cards.map((card) => (
            <article key={card.label} className="info-card">
              <span className="info-label">{card.label}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
