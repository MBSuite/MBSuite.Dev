import { useTranslation } from 'react-i18next'

export default function Pricing() {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="w-full py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">{t('pricing.title')}</h2>
        <p className="mt-2 text-gray-600">{t('pricing.subtitle')}</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 p-6 rounded flex flex-col">
            <h3 className="font-semibold text-lg">{t('pricing.monthly')}</h3>
            <div className="mt-4 text-3xl font-bold">500 <span className="text-sm font-normal">{t('pricing.perMonth')}</span></div>
            <div className="text-xs text-gray-500 mt-1">{t('pricing.freeTrial')}</div>
            <a
              href="https://micro-business-suite-mbs9-c3cc.vercel.app/checkout?plan=monthly"
              className="mt-6 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700"
            >
              {t('pricing.ctaSubscribe')}
            </a>
          </div>
          <div className="border-2 border-blue-600 p-6 rounded flex flex-col relative shadow-md">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
              {t('pricing.save')}
            </div>
            <h3 className="font-semibold text-lg">{t('pricing.yearly')}</h3>
            <div className="mt-4 text-3xl font-bold">5,750 <span className="text-sm font-normal">{t('pricing.perYear')}</span></div>
            <div className="text-xs text-gray-500 mt-1">{t('pricing.freeTrial')}</div>
            <a
              href="https://micro-business-suite-mbs9-c3cc.vercel.app/checkout?plan=yearly"
              className="mt-6 px-4 py-2 bg-blue-600 text-white text-center rounded hover:bg-blue-700"
            >
              {t('pricing.ctaSubscribe')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
