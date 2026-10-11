import { useTranslation } from 'react-i18next'
import logo from '/logo.png'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="w-full border-t border-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex items-center gap-2">
            <img src={logo} alt="MBSuite" className="h-8 w-auto" />
            <span className="font-semibold">{t('common.brand')}</span>
          </div>
          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <a href="https://microtronic.biz/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Powered by Microtronic © 2026 Microtronic Co., Ltd.
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
