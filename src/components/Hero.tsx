import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation()
  const tags = t('hero.tags', { returnObjects: true }) as string[]

  return (
    <section id="top" className="hero-section">
      <div className="content-wrap hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow">{t('hero.eyebrow')}</div>
          <h1>
            {t('hero.title')}
          </h1>
          <p>
            {t('hero.subtitle')}
          </p>
          <div className="hero-tags" aria-label={t('hero.highlightsLabel')}>
            {tags.map((tag) => (
              <span key={tag} className="hero-tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <a
              href="https://micro-business-suite.vercel.app/register"
              className="button-primary"
            >
              {t('hero.ctaPrimary')}
            </a>
            <a
              href="#pricing"
              className="button-secondary"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
          <p className="hero-trial-note">{t('hero.trialNote')}</p>
        </div>
        <div className="hero-visual">
          <img src="/mbsuite-hero-mockup.svg" alt={t('hero.dashboardAlt')} />
          <div className="hero-floating-note">
            <span className="note-check" aria-hidden="true">✓</span>
            <span>{t('hero.dashboardNote')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
