import { useTranslation } from 'react-i18next'

export default function LangToggle() {
  const { i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'th' ? 'en' : 'th')
  }

  return (
    <button
      onClick={toggle}
      className="px-3 py-1 text-sm border border-gray-200 rounded hover:bg-gray-50"
      type="button"
    >
      {i18n.language === 'th' ? 'EN' : 'TH'}
    </button>
  )
}
