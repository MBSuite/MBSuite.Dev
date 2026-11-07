import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Features from './components/Features'
import PluginsModules from './components/PluginsModules'
import BusinessFlow from './components/BusinessFlow'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import InfoContent from './components/InfoContent'
import ArticlesPreview from './components/ArticlesPreview'
import ArticlesPage from './components/ArticlesPage'
import DocumentsHome from './components/DocumentsHome'
import Marketplace from './components/Marketplace'
import UserGuide from './components/UserGuide'
import Brochure from './components/Brochure'
import Footer from './components/Footer'
import { getArticleBySlug } from './data/articles'

function App() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage ?? i18n.language
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  const articleSlug = pathname.startsWith('/articles/') ? pathname.slice('/articles/'.length) : ''
  const article = articleSlug ? getArticleBySlug(articleSlug, language) : undefined
  const isArticleRoute = pathname === '/articles' || pathname.startsWith('/articles/')

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{t('common.skipToContent')}</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        {pathname === '/marketplace' ? (
          <Marketplace />
        ) : pathname === '/documents' ? (
          <DocumentsHome />
        ) : pathname === '/guide' ? (
          <UserGuide />
        ) : pathname === '/brochure' ? (
          <Brochure />
        ) : isArticleRoute ? (
          <ArticlesPage article={article} notFound={Boolean(articleSlug) && !article} />
        ) : (
          <>
            <Hero />
            <Benefits />
            <Features />
            <PluginsModules />
            <BusinessFlow />
            <InfoContent />
            <ArticlesPreview />
            <HowItWorks />
            <Pricing />
            <FAQ />
            <CTA />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App
