import { useTranslation } from 'react-i18next'

export default function HeroCyber() {
  const { t } = useTranslation()

  return (
    <section className="hero-cyber">
      <div className="hero-cyber-content">
        <h1 className="hero-cyber-title">
          {t('hero.title')}
        </h1>
        <p className="hero-cyber-subtitle">
          {t('hero.subtitle')}
        </p>
        <div className="hero-cyber-cta">
          <button className="btn-neon btn-neon-fill">
            {t('common.getStarted')}
          </button>
          <button className="btn-neon">
            {t('common.learnMore') || 'Learn More'}
          </button>
        </div>
      </div>
    </section>
  )
}
