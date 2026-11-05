import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import type { Article } from '../data/articles'
import { getArticles } from '../data/articles'

type ArticlesPageProps = {
  article?: Article
  notFound?: boolean
}

export default function ArticlesPage({ article, notFound = false }: ArticlesPageProps) {
  const { t, i18n } = useTranslation()
  const articles = getArticles(i18n.resolvedLanguage ?? i18n.language)

  useEffect(() => {
    const pageTitle = article
      ? `${article.title} | MBSuite`
      : `${t('articles.title')} | MBSuite`
    document.title = pageTitle
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      article?.excerpt ?? t('articles.subtitle'),
    )
  }, [article, i18n.language, t])

  if (notFound) {
    return (
      <section className="articles-page section-pad">
        <div className="content-wrap article-not-found">
          <h1>{t('articles.notFound')}</h1>
          <a className="button-primary" href="/articles">{t('articles.backToList')}</a>
        </div>
      </section>
    )
  }

  if (!article) {
    return (
      <section className="articles-page section-pad">
        <div className="content-wrap">
          <a className="article-back-link" href="/">{t('articles.backHome')}</a>
          <div className="section-heading articles-page-heading">
            <span className="section-kicker">{t('articles.kicker')}</span>
            <h1>{t('articles.title')}</h1>
            <p>{t('articles.subtitle')}</p>
          </div>
          <div className="article-grid article-grid-all">
            {articles.map((item, index) => (
              <article key={item.slug} className="article-card">
                <div className={`article-art article-art-${(index % 3) + 1}`} aria-hidden="true">
                  <span>{item.category}</span>
                </div>
                <div className="article-card-body">
                  <div className="article-meta">
                    <span>{item.category}</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h2><a href={`/articles/${item.slug}`}>{item.title}</a></h2>
                  <p>{item.excerpt}</p>
                  <a className="article-read-link" href={`/articles/${item.slug}`}>
                    {t('articles.readMore')} <span aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <article className="article-detail section-pad">
      <div className="article-reading-wrap">
        <nav className="article-breadcrumbs" aria-label={t('articles.breadcrumbs')}>
          <a href="/">{t('nav.home')}</a>
          <span aria-hidden="true">/</span>
          <a href="/articles">{t('articles.kicker')}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{article.category}</span>
        </nav>
        <header className="article-detail-header">
          <span className="article-category-pill">{article.category}</span>
          <h1>{article.title}</h1>
          <p className="article-lead">{article.excerpt}</p>
          <div className="article-detail-meta">
            <span>{t('articles.author')}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
          </div>
        </header>
        <div className="article-cover" aria-hidden="true">
          <span>{article.category}</span>
        </div>
        <div className="article-body">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points ? (
                <ul>
                  {section.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              ) : null}
            </section>
          ))}
          <aside className="article-takeaway">
            <strong>{t('articles.keyTakeaway')}</strong>
            <p>{article.takeaway}</p>
          </aside>
          <p className="article-disclaimer">{t('articles.disclaimer')}</p>
        </div>
        <div className="article-detail-footer">
          <a className="article-back-link" href="/articles">← {t('articles.backToList')}</a>
          <a className="button-primary" href="/#pricing">{t('articles.exploreSuite')}</a>
        </div>
      </div>
    </article>
  )
}
