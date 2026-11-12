import { useTranslation } from 'react-i18next'
import './BusinessFlow.css'

export default function BusinessFlow() {
  const { t } = useTranslation()
  const steps = t('businessFlow.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <section className="business-flow-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{t('businessFlow.kicker')}</span>
          <h2>{t('businessFlow.title')}</h2>
          <p>{t('businessFlow.subtitle')}</p>
        </div>
        <div className="business-flow-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="business-flow-card">
              <span className="business-flow-step">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
