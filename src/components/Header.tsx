import { useTranslation } from 'react-i18next'
import LangToggle from './LangToggle'
import logo from '/logo.png'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 w-full bg-white/95 backdrop-blur border-b border-gray-100 z-10">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="MBSuite logo" className="h-8 w-auto" />
          <span className="font-bold text-lg">{t('common.brand')}</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features">{t('nav.features')}</a>
          <a href="#howitworks">{t('nav.howItWorks')}</a>
          <a href="#pricing">{t('nav.pricing')}</a>
          <a href="#faq">{t('nav.faq')}</a>
        </nav>
        <LangToggle />
      </div>
    </header>
  )
}
