import { useTranslation } from 'react-i18next'

type Pack = { name: string; desc: string }

export default function PluginsModules() {
  const { t } = useTranslation()
  const packs = t('plugins.packs', { returnObjects: true }) as Pack[]

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
        <p className="plugin-howto">{t('plugins.howTo')}</p>
        <a className="article-read-link" href="/marketplace">
          {t('marketplace.cta')} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
