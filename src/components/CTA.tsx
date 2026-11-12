import { useTranslation } from 'react-i18next'
import './CTA.css'

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section className="cta-section">
      <div className="content-wrap cta-inner">
        <h2>{t('cta.title')}</h2>
        <p>{t('cta.subtitle')}</p>
        <div>
          <a href="https://micro-business-suite.vercel.app/register" className="btn-neon btn-neon-fill">
            {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  )
}
