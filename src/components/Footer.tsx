import { useTranslation } from 'react-i18next'
import logo from '/logo.png'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="content-wrap footer-inner">
        <a className="brand-lockup" href="/" aria-label={`${t('common.brand')} — ${t('nav.home')}`}>
          <img src={logo} alt="" />
          <span>{t('common.brand')}</span>
        </a>
        <div className="footer-links">
          <a className="footer-credit" href="https://microtronic.biz/" target="_blank" rel="noopener noreferrer">
              Powered by Microtronic © 2026 Microtronic Co., Ltd.
          </a>
        </div>
      </div>
    </footer>
  )
}
