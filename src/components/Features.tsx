import { useTranslation } from 'react-i18next'
const inv = new URL('../assets/mockups/mbsuite-invoice-mockup.png', import.meta.url).href
const rec = new URL('../assets/mockups/mbsuite-receipt-mockup.png', import.meta.url).href
const rpt = new URL('../assets/mockups/mbsuite-reports-mockup.png', import.meta.url).href

export default function Features() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <section id="features" className="w-full py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">{t('features.title')}</h2>
        <p className="mt-2 text-gray-600">{t('features.subtitle')}</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="border border-gray-100 p-6 rounded">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <img src={inv} alt="Invoice" className="w-full rounded shadow" />
          <img src={rec} alt="Receipt" className="w-full rounded shadow" />
          <img src={rpt} alt="Reports" className="w-full rounded shadow" />
        </div>
      </div>
    </section>
  )
}
