import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import LangToggle from './LangToggle'
import logo from '/logo.png'

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = window.location.pathname === '/'
  const navItems = [
    { href: isHome ? '#features' : '/#features', label: t('nav.features') },
    { href: isHome ? '#howitworks' : '/#howitworks', label: t('nav.howItWorks') },
    { href: isHome ? '#pricing' : '/#pricing', label: t('nav.pricing') },
    { href: '/articles', label: t('nav.articles') },
    { href: isHome ? '#faq' : '/#faq', label: t('nav.faq') },
  ]

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand-lockup" href="/" aria-label={`${t('common.brand')} — ${t('nav.home')}`}>
          <img src={logo} alt="" className="h-8 w-auto" />
          <span>{t('common.brand')}</span>
        </a>
        <nav className="header-nav" aria-label={t('nav.mainNavigation')}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-cta" href={isHome ? '#pricing' : '/#pricing'}>{t('common.getStarted')}</a>
          <LangToggle />
          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? t('nav.closeMenu') : t('nav.openMenu')}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label={t('nav.mobileNavigation')}
        hidden={!menuOpen}
      >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
      </nav>
    </header>
  )
}
