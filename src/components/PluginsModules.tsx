import { useTranslation } from 'react-i18next'

type Pack = { name: string; desc: string }
type Suite = { name: string; desc: string; status: string }

export default function PluginsModules() {
  const { t } = useTranslation()
  const packs = t('plugins.packs', { returnObjects: true }) as Pack[]
  const suites = t('plugins.suites', { returnObjects: true }) as Suite[]

  return (
    <section id="plugins" className="plugins-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{t('plugins.kicker')}</span>
          <h2>{t('plugins.title')}</h2>
          <p>{t('plugins.subtitle')}</p>
        </div>
        <div className="plugin-pack-grid">
          {packs.map((pack) => (
            <article key={pack.name} className="plugin-pack-card">
              <h3>{pack.name}</h3>
              <p>{pack.desc}</p>
            </article>
          ))}
        </div>
        <div className="section-heading">
          <span className="section-kicker">{t('plugins.suitesKicker')}</span>
          <h2>{t('plugins.suitesTitle')}</h2>
          <p>{t('plugins.suitesSubtitle')}</p>
        </div>
        <div className="suites-grid">
          {suites.map((suite) => {
            // Extract URL from status text like "Live - https://..."
            const urlMatch = suite.status.match(/https:\/\/[^\s]+/)
            const url = urlMatch ? urlMatch[0] : undefined
            const statusLabel = suite.status.replace(urlMatch ? urlMatch[0] : '', '').replace(/\s*-\s*$/, '').trim()

            return (
              <article key={suite.name} className="suite-showcase-card">
                <div className="suite-header">
                  <h3>{suite.name}</h3>
                  <span className="suite-badge">{statusLabel}</span>
                </div>
                <p className="suite-desc">{suite.desc}</p>
                {url && (
                  <a href={url} className="suite-cta" target="_blank" rel="noopener noreferrer">
                    Get started <span aria-hidden="true">→</span>
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
