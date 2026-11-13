import { useTranslation } from 'react-i18next'
import './HeroCyber.css'

export default function HeroCyber() {
  const { t } = useTranslation()

  return (
    <section className="hero-cyber">
      <div className="hero-cyber-content">
        <h1 className="hero-cyber-title">{t('hero.title')}</h1>
        <p className="hero-cyber-subtitle">{t('hero.subtitle')}</p>
        <div className="hero-cyber-cta">
          <a href="#pricing" className="btn-neon btn-neon-fill">{t('common.getStarted')}</a>
          <a href="#capabilities" className="btn-neon">Learn More</a>
        </div>
      </div>
    </section>
  )
}
