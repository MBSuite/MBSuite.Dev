import { useTranslation } from 'react-i18next'
import { getArticles } from '../data/articles'

export default function ArticlesPreview() {
  const { t, i18n } = useTranslation()
  const articles = getArticles(i18n.resolvedLanguage ?? i18n.language).slice(0, 3)

  return (
    <section className="articles-preview-section section-pad neon-dark-section">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker neon-kicker">{t('articles.kicker')}</span>
          <h2 className="neon-gradient-text">{t('articles.title')}</h2>
          <p>{t('articles.subtitle')}</p>
        </div>
        <div className="article-grid">
          {articles.map((article, index) => (
            <article key={article.slug} className="article-card neon-glass-card">
              <div className={`article-art article-art-${index + 1} neon-art`} aria-hidden="true">
                <span className="neon-badge">{article.category}</span>
              </div>
              <div className="article-card-body">
                <div className="article-meta neon-meta">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="neon-card-title"><a href={`/articles/${article.slug}`}>{article.title}</a></h3>
                <p className="neon-card-text">{article.excerpt}</p>
                <a className="neon-card-link" href={`/articles/${article.slug}`}>
                  {t('articles.readMore')} <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="articles-preview-action">
          <a className="btn-neon" href="/articles">{t('articles.viewAll')}</a>
        </div>
      </div>
    </section>
  )
}
