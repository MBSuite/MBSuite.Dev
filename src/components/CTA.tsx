import { useTranslation } from 'react-i18next'

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section className="w-full py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">{t('cta.title')}</h2>
        <p className="mt-2 text-gray-600">{t('cta.subtitle')}</p>
        <div className="mt-6">
          <a
            href="https://micro-business-suite-mbs9-c3cc.vercel.app/checkout?plan=monthly"
            className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {t('cta.button')}
          </a>
        </div>
      </div>
    </section>
  )
}
