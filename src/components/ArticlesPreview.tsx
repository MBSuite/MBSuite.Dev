import { useTranslation } from 'react-i18next'
import { getArticles } from '../data/articles'
import './ArticlesPreview.css'

export default function ArticlesPreview() {
  const { t, i18n } = useTranslation()
  const articles = getArticles(i18n.resolvedLanguage ?? i18n.language).slice(0, 3)

  return (
    <section className="articles-preview-section section-pad">
      <div className="content-wrap">
        <div className="section-heading">
          <span className="section-kicker">{t('articles.kicker')}</span>
          <h2>{t('articles.title')}</h2>
          <p>{t('articles.subtitle')}</p>
        </div>
        <div className="article-grid">
          {articles.map((article, index) => (
            <article key={article.slug} className="article-card">
              <div className={`article-art article-art-${index + 1}`} aria-hidden="true">
                <span className="article-badge">{article.category}</span>
              </div>
              <div className="article-card-body">
                <div className="article-meta">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>
                <h3><a href={`/articles/${article.slug}`}>{article.title}</a></h3>
                <p>{article.excerpt}</p>
                <a className="article-card-link" href={`/articles/${article.slug}`}>
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
