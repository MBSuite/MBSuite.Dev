import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('howItWorks.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <section id="howitworks" className="steps-section section-pad neon-dark-section">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker neon-kicker">{t('howItWorks.kicker')}</span>
          <h2 className="neon-gradient-text">{t('howItWorks.title')}</h2>
          <p>{t('howItWorks.subtitle')}</p>
        </div>
        <div className="steps-grid">
          {steps.map((step, idx) => (
            <article key={step.title} className="step-card neon-glass-card">
              <span className="step-number neon-step">{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="neon-card-title">{step.title}</h3>
              <p className="neon-card-text">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
