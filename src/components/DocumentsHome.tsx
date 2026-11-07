import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type DocumentCard = {
  title: string
  description: string
  label: string
  action: string
  href: string
}

export default function DocumentsHome() {
  const { t } = useTranslation()
  const cards = t('documents.home.cards', { returnObjects: true }) as DocumentCard[]

  useEffect(() => {
    document.title = `${t('documents.home.title')} | MBSuite`
  }, [t])

  return (
    <section className="documents-home section-pad">
      <div className="content-wrap">
        <a className="article-back-link" href="/">{t('articles.backHome')}</a>
        <header className="section-heading documents-heading">
          <span className="section-kicker">{t('documents.home.kicker')}</span>
          <h1>{t('documents.home.title')}</h1>
          <p>{t('documents.home.subtitle')}</p>
        </header>
        <div className="documents-card-grid">
          {cards.map((card, index) => (
            <article key={card.href} className="documents-card">
              <span className={`documents-card-mark documents-card-mark-${index + 1}`} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="documents-card-label">{card.label}</p>
              <h2>{card.title}</h2>
              <p className="documents-card-description">{card.description}</p>
              <a className="article-read-link" href={card.href}>
                {card.action} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
