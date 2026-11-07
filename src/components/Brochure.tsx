import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type BrochureItem = {
  label: string
  title: string
  description: string
}

const APP_URL = 'https://micro-business-suite.vercel.app'

export default function Brochure() {
  const { t } = useTranslation()
  const highlights = t('documents.brochure.highlights', { returnObjects: true }) as BrochureItem[]
  const audiences = t('documents.brochure.audiences', { returnObjects: true }) as BrochureItem[]

  useEffect(() => {
    document.title = `${t('documents.brochure.title')} | MBSuite`
  }, [t])

  return (
    <section className="brochure-page">
      <div className="brochure-toolbar content-wrap">
        <a className="article-back-link" href="/documents">← {t('documents.backToCenter')}</a>
        <button className="button-primary brochure-print-button" type="button" onClick={() => window.print()}>
          <span aria-hidden="true">▤</span> {t('documents.brochure.print')}
        </button>
      </div>

      <article className="brochure content-wrap">
        <header className="brochure-cover">
          <div className="brochure-brand">
            <img src="/logo.png" alt="" />
            <span>MBSuite</span>
          </div>
          <div className="brochure-cover-copy">
            <p className="brochure-eyebrow">{t('documents.brochure.eyebrow')}</p>
            <h1>{t('documents.brochure.title')}</h1>
            <p className="brochure-lead">{t('documents.brochure.subtitle')}</p>
          </div>
          <img
            className="brochure-dashboard"
            width="960"
            height="620"
            src="/mbsuite-hero-mockup.svg"
            alt={t('documents.brochure.imageAlt')}
          />
          <div className="brochure-trial">{t('documents.brochure.trial')}</div>
        </header>

        <section className="brochure-section brochure-highlights">
          <div className="brochure-section-heading">
            <span className="section-kicker">{t('documents.brochure.highlightsKicker')}</span>
            <h2>{t('documents.brochure.highlightsTitle')}</h2>
          </div>
          <div className="brochure-highlight-grid">
            {highlights.map((item, index) => (
              <article className="brochure-highlight" key={item.label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p className="brochure-item-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="brochure-section brochure-audiences">
          <div className="brochure-section-heading">
            <span className="section-kicker">{t('documents.brochure.audiencesKicker')}</span>
            <h2>{t('documents.brochure.audiencesTitle')}</h2>
          </div>
          <div className="brochure-audience-list">
            {audiences.map((item) => (
              <article className="brochure-audience" key={item.label}>
                <span>{item.label}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside className="brochure-note">
          <strong>{t('documents.brochure.noteTitle')}</strong>
          <p>{t('documents.brochure.noteText')}</p>
        </aside>

        <footer className="brochure-cta">
          <div>
            <p className="brochure-eyebrow">{t('documents.brochure.ctaKicker')}</p>
            <h2>{t('documents.brochure.ctaTitle')}</h2>
            <p>{t('documents.brochure.ctaText')}</p>
          </div>
          <a href={`${APP_URL}/login`} target="_blank" rel="noopener noreferrer" className="brochure-cta-link">
            {t('documents.brochure.ctaButton')} <span aria-hidden="true">↗</span>
          </a>
        </footer>
        <p className="brochure-credit">Powered by Microtronic © 2026 Microtronic Co., Ltd.</p>
      </article>
    </section>
  )
}
