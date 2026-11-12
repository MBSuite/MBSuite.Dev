import { useTranslation } from 'react-i18next'
import logo from '/logo.png'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer neon-footer">
      <div className="content-wrap footer-inner">
        <a className="brand-lockup" href="/" aria-label={`${t('common.brand')} — ${t('nav.home')}`}>
          <img src={logo} alt="" />
          <span>{t('common.brand')}</span>
        </a>
        <div className="footer-links neon-footer-links">
          <div className="footer-socials">
            <a href="https://discord.gg/5WSDE2KsU" target="_blank" rel="noopener noreferrer" className="social-link" title="Discord">
              <span aria-hidden="true">💬</span> Discord
            </a>
            <a href="https://www.facebook.com/MicrotronicTH" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
              <span aria-hidden="true">f</span> Facebook
            </a>
            <a href="#" className="social-link qr-link" title="Scan QR Code">
              <img src="/2dbarcodes_GW/S_gainfriends_2dbarcodes_GW.png" alt="QR Code" className="qr-code-thumb" />
            </a>
          </div>
          <a className="footer-credit" href="https://microtronic.biz/" target="_blank" rel="noopener noreferrer">
            Powered by Microtronic © 2026 Microtronic Co., Ltd.
          </a>
        </div>
      </div>
    </footer>
  )
}
