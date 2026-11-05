import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>

  return (
    <section id="faq" className="faq-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{t('faq.kicker')}</span>
          <h2>{t('faq.title')}</h2>
          <p>{t('faq.subtitle')}</p>
        </div>
        <div className="faq-list">
          {items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
