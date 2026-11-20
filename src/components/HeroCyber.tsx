import { useTranslation } from 'react-i18next'
import './HeroCyber.css'

export default function HeroCyber() {
  const { t } = useTranslation()

  return (
    <section className="hero-cyber">
      <div className="hero-cyber-backdrop" aria-hidden="true">
        <span className="hero-cyber-grid" />
        <span className="hero-cyber-glow" />
        <span className="hero-cyber-vignette" />
      </div>
      <div className="hero-cyber-content">
        <h1 className="hero-cyber-title">{t('hero.title')}</h1>
        <span className="hero-cyber-rule" aria-hidden="true" />
        <p className="hero-cyber-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-cyber-cta">
          <a href="#pricing" className="btn-neon btn-neon-fill">{t('common.getStarted')}</a>
          <a href="#capabilities" className="btn-neon">Learn More</a>
        </div>
      </div>
    </section>
  )
}
