import { useTranslation } from 'react-i18next'

type Category = { name: string; desc: string }
type Item = { id: string; name: string; type: string; status: string; desc: string }

export default function Marketplace() {
  const { t } = useTranslation()
  const categories = t('marketplace.categories', { returnObjects: true }) as Category[]
  const items = t('marketplace.items', { returnObjects: true }) as Item[]

  return (
    <section className="marketplace-section section-pad">
      <div className="content-wrap">
        <a className="article-back-link" href="/">{t('articles.backHome')}</a>
        <header className="section-heading">
          <span className="section-kicker">{t('marketplace.kicker')}</span>
          <h1>{t('marketplace.title')}</h1>
          <p>{t('marketplace.subtitle')}</p>
        </header>

        <div className="marketplace-categories">
          {categories.map((c) => (
            <article key={c.name} className="marketplace-category-card">
              <h3>{c.name}</h3>
              <p>{c.desc}</p>
            </article>
          ))}
        </div>

        <div className="marketplace-grid">
          {items.map((item) => (
            <article key={item.id} className="marketplace-card">
              <div className="marketplace-card-head">
                <h3>{item.name}</h3>
                <span className={`marketplace-badge marketplace-badge-${item.type === 'Core' ? 'core' : 'addon'}`}>
                  {item.type}
                </span>
              </div>
              <p className="marketplace-status">{item.status}</p>
              <p className="marketplace-desc">{item.desc}</p>
            </article>
          ))}
        </div>

        <p className="marketplace-note">{t('marketplace.note')}</p>
      </div>
    </section>
  )
}
