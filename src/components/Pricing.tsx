import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Pricing.css'

export default function Pricing() {
  const { t, i18n } = useTranslation()
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly')
  const pricing = t('pricing', { returnObjects: true }) as any
  const tiers = pricing.tiers as Array<{
    id: string
    name: string
    tagline: string
    description: string
    priceMonthly: number
    priceYearly: number
    pricePerpetual: number
    currencySymbol: string
    features: string[]
    ctaText: string
    ctaLink: string
    highlighted: boolean
    badge?: string
  }>

  // Helper: Get localized period label
  const getPeriodLabel = (cycle: 'monthly' | 'yearly'): string => {
    if (i18n.language === 'th') {
      return cycle === 'monthly' ? '/เดือน' : '/ปี'
    }
    return cycle === 'monthly' ? '/month' : '/year'
  }

  // Helper: Get monthly estimate for yearly billing
  const getMonthlyEstimate = (yearlyPrice: number): string => {
    const monthly = Math.round(yearlyPrice / 12)
    if (i18n.language === 'th') {
      return `≈ ${monthly} บาท/เดือน`
    }
    return `≈ ฿${monthly.toLocaleString()}/month`
  }

  return (
    <section id="pricing" className="pricing-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{pricing.kicker}</span>
          <h2>{pricing.title}</h2>
          <p>{pricing.subtitle}</p>
        </div>

        {/* Billing Toggle */}
        <div className="pricing-toggle">
          <button
            className={`toggle-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('monthly')}
          >
            {pricing.billingToggle.monthly}
          </button>
          <button
            className={`toggle-btn ${billingCycle === 'yearly' ? 'active' : ''}`}
            onClick={() => setBillingCycle('yearly')}
          >
            {pricing.billingToggle.yearly}
            <span className="toggle-badge">{pricing.billingToggle.saveBadge}</span>
          </button>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {tiers.map((tier) => {
            const currentPrice =
              billingCycle === 'monthly'
                ? tier.priceMonthly
                : billingCycle === 'yearly'
                  ? tier.priceYearly
                  : tier.pricePerpetual

            return (
              <article
                key={tier.id}
                className={`pricing-card neon-glass-card ${tier.highlighted ? 'pricing-card-highlighted' : ''}`}
              >
                {tier.badge && (
                  <div className="pricing-card-badge">
                    <span className="badge-star">⭐</span>
                    {tier.badge}
                  </div>
                )}

                <div className="pricing-card-header">
                  <h3>{tier.name}</h3>
                  <p className="pricing-tagline">{tier.tagline}</p>
                </div>

                <p className="pricing-description">{tier.description}</p>

                <div className="pricing-price-section">
                  <div className="pricing-price">
                    <span className="currency">{tier.currencySymbol}</span>
                    <span className="amount">{currentPrice.toLocaleString()}</span>
                    <span className="period">{getPeriodLabel(billingCycle)}</span>
                  </div>
                  {tier.priceMonthly && (
                    <p className="pricing-subtext">
                      {billingCycle === 'yearly' && getMonthlyEstimate(tier.priceYearly)}
                    </p>
                  )}
                </div>

                <p className="pricing-trial">{pricing.notes.trialNote}</p>

                <ul className="pricing-features neon-features">
                  {tier.features.map((feature) => (
                    <li key={feature}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href={tier.ctaLink} className="btn-neon btn-neon-fill">
                  {tier.ctaText}
                  <span aria-hidden="true">→</span>
                </a>
              </article>
            )
          })}
        </div>

        {/* Perpetual License Callout */}
        <div className="perpetual-callout">
          <div className="perpetual-content">
            <h3>{pricing.perpetualCallout.title}</h3>
            <p>{pricing.perpetualCallout.subtitle}</p>

            <div className="perpetual-comparison">
              {pricing.perpetualCallout.comparison.map(
                (item: { label: string; cloud: string; perpetual: string }) => (
                  <div key={item.label} className="comparison-row">
                    <div className="comparison-label">{item.label}</div>
                    <div className="comparison-item">
                      <span className="label">Cloud</span>
                      <span className="value">{item.cloud}</span>
                    </div>
                    <div className="comparison-item highlight">
                      <span className="label">Perpetual</span>
                      <span className="value">{item.perpetual}</span>
                    </div>
                  </div>
                )
              )}
            </div>

            <a href={pricing.perpetualCallout.ctaLink} className="btn-neon btn-neon-fill">
              {pricing.perpetualCallout.cta}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <p className="pricing-note">{pricing.notes.supportNote}</p>
      </div>
    </section>
  )
}
