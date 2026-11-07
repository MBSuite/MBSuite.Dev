import { useTranslation } from 'react-i18next'

export default function Pricing() {
  const { t } = useTranslation()
  const subscriptionFeatures = t('pricing.subscriptionFeatures', { returnObjects: true }) as string[]
  const perpetualFeatures = t('pricing.perpetualFeatures', { returnObjects: true }) as string[]

  return (
    <section id="pricing" className="pricing-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{t('pricing.kicker')}</span>
          <h2>{t('pricing.title')}</h2>
          <p>{t('pricing.subtitle')}</p>
        </div>
        <p className="pricing-note">{t('pricing.compareNote')}</p>

        <div className="pricing-grid">
          <article className="pricing-card">
            <h3>{t('pricing.monthly')}</h3>
            <p className="pricing-price">
              5,750 <span>{t('pricing.perMonth')}</span>
            </p>
            <p className="pricing-detail">{t('pricing.freeTrial')}</p>
            <ul className="pricing-list">
              {subscriptionFeatures.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <a
              href="https://micro-business-suite.vercel.app/checkout?plan=yearly"
              className="button-primary"
            >
              {t('pricing.ctaSubscribe')}
            </a>
          </article>

          <article className="pricing-card pricing-card-featured">
            <div className="pricing-badge">
              {t('pricing.save')}
            </div>
            <h3>{t('pricing.yearly')}</h3>
            <p className="pricing-price">
              {t('pricing.contactForPrice')} <span>{t('pricing.perYear')}</span>
            </p>
            <p className="pricing-detail">{t('pricing.contactDesc')}</p>
            <ul className="pricing-list">
              {perpetualFeatures.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScINJ7ZxkrgNqsXSsQ4mMOTNs0Q6uk46QBLuUcAJKWmx3_GjA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              {t('pricing.ctaContact')}
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
