import { useTranslation } from 'react-i18next'
import logo from '/logo.png'
import './Footer.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="site-footer">
      <div className="content-wrap footer-inner">
        {/* Brand Section */}
        <div className="footer-brand">
          <a className="brand-lockup" href="/" aria-label={`${t('common.brand')} — ${t('nav.home')}`}>
            <img src={logo} alt="" />
            <span>{t('common.brand')}</span>
          </a>
          <p className="footer-brand-desc">Premium business management suite for Thai enterprises. Simple, powerful, affordable.</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <div className="footer-link-group">
            <h3>Product</h3>
            <a href="/#capabilities">Features</a>
            <a href="/#pricing">Pricing</a>
            <a href="/#howitworks">How It Works</a>
          </div>
          <div className="footer-link-group">
            <h3>Resources</h3>
            <a href="/docs">Documentation</a>
            <a href="/guide">User Guide</a>
            <a href="/marketplace">Marketplace</a>
          </div>
        </div>

        {/* Socials Section */}
        <div className="footer-socials">
          <a href="https://discord.gg/5WSDE2KsU" target="_blank" rel="noopener noreferrer" className="social-link" title="Discord">
            <span aria-hidden="true">💬</span> Discord
          </a>
          <a href="https://www.facebook.com/MicrotronicTH" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
            <span aria-hidden="true">f</span> Facebook
          </a>
          <a href="https://lin.ee/pg0Cn6v" className="social-link qr-link" title="Scan QR Code">
            <img src="/2dbarcodes_GW/S_gainfriends_2dbarcodes_GW.png" alt="QR Code" className="qr-code-thumb" />
          </a>
        </div>

        {/* Credit */}
        <a className="footer-credit" href="https://microtronic.biz/" target="_blank" rel="noopener noreferrer">
          © 2026 Microtronic Co., Ltd. All rights reserved. | Powered by MBSuite
        </a>
      </div>
    </footer>
  )
}
