import { useTranslation } from 'react-i18next'

type Suite = { name: string; desc: string; status: string; logo?: string }

export default function PluginsModules() {
  const { t } = useTranslation()
  const suites = t('plugins.suites', { returnObjects: true }) as Suite[]

  // Module logos mapping
  const moduleLogos: Record<string, string> = {
    'MBSuite Core': '/favicon.png',
    'Service Suite': '/Service.png',
    'Retail Suite': '/Retail2.png',
    'F&B Suite': '/F&B.png',
    'Hotel Suite': '/Hotel.png',
    'Rental Suite': '/Rental.png',
    'Pharmacy Suite': '/Pharmacy.png',
  }

  return (
    <section id="plugins" className="plugins-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{t('plugins.kicker')}</span>
          <h2>{t('plugins.title')}</h2>
          <p>{t('plugins.subtitle')}</p>
        </div>
        <div className="suites-grid">
          {suites.map((suite) => {
            const urlMatch = suite.status.match(/https:\/\/[^\s]+/)
            const url = urlMatch ? urlMatch[0] : undefined
            const statusLabel = suite.status.replace(urlMatch ? urlMatch[0] : '', '').replace(/\s*-\s*$/, '').trim()
            const logoUrl = moduleLogos[suite.name]

            return (
              <article key={suite.name} className="suite-showcase-card">
                {logoUrl && (
                  <div className="suite-logo-container">
                    <img src={logoUrl} alt={`${suite.name} logo`} className="suite-logo" />
                  </div>
                )}
                <div className="suite-header">
                  <h3>{suite.name}</h3>
                  <span className="suite-badge">{statusLabel}</span>
                </div>
                <p className="suite-desc">{suite.desc}</p>
                {url && (
                  <a href={url} className="suite-cta" target="_blank" rel="noopener noreferrer">
                    {t('common.getStarted')} <span aria-hidden="true">→</span>
                  </a>
                )}
              </article>
            )
          })}
        </div>
        <p className="plugin-howto">{t('plugins.howTo')}</p>
      </div>
    </section>
  )
}
