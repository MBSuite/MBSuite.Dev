import { useTranslation } from 'react-i18next'

export default function LangToggle() {
  const { i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'th' ? 'en' : 'th')
  }

  return (
    <button
      onClick={toggle}
      className="language-toggle"
      type="button"
      aria-label={i18n.language === 'th' ? 'Switch language to English' : 'เปลี่ยนภาษาเป็นไทย'}
    >
      {i18n.language === 'th' ? 'EN' : 'TH'}
    </button>
  )
}
