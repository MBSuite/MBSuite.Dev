import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

type GuideSection = {
  id: string
  title: string
  intro: string
  steps: string[]
  links?: Array<{ label: string; path: string }>
  note?: string
}

const APP_URL = 'https://micro-business-suite.vercel.app'

export default function UserGuide() {
  const { t } = useTranslation()
  const sections = t('documents.guide.sections', { returnObjects: true }) as GuideSection[]

  useEffect(() => {
    document.title = `${t('documents.guide.title')} | MBSuite`
  }, [t])

  return (
    <section className="user-guide section-pad">
      <div className="content-wrap">
        <nav className="document-breadcrumbs" aria-label={t('documents.breadcrumbs')}>
          <a href="/">{t('nav.home')}</a>
          <span aria-hidden="true">/</span>
          <a href="/documents">{t('nav.documents')}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{t('documents.guide.shortTitle')}</span>
        </nav>
        <header className="document-page-heading">
          <span className="section-kicker">{t('documents.guide.kicker')}</span>
          <h1>{t('documents.guide.title')}</h1>
          <p>{t('documents.guide.subtitle')}</p>
        </header>
        <div className="guide-layout">
          <nav className="guide-toc" aria-label={t('documents.guide.contents')}>
            <strong>{t('documents.guide.contents')}</strong>
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>{section.title}</a>
            ))}
          </nav>
          <div className="guide-sections">
            {sections.map((section, index) => (
              <section id={section.id} key={section.id} className="guide-section">
                <span className="guide-section-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{section.title}</h2>
                  <p>{section.intro}</p>
                  <ol>
                    {section.steps.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                  {section.note ? <p className="guide-note">{section.note}</p> : null}
                  {section.links?.length ? (
                    <div className="guide-links">
                      {section.links.map((link) => (
                        <a key={link.path} href={`${APP_URL}${link.path}`} target="_blank" rel="noopener noreferrer">
                          {link.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              </section>
            ))}
            <aside className="guide-disclaimer">
              <strong>{t('documents.guide.importantTitle')}</strong>
              <p>{t('documents.guide.importantText')}</p>
            </aside>
          </div>
        </div>
        <div className="document-bottom-links">
          <a className="button-secondary" href="/documents">{t('documents.backToCenter')}</a>
          <a className="button-primary" href="/brochure">{t('documents.brochure.open')}</a>
        </div>
      </div>
    </section>
  )
}
