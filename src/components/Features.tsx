import { useTranslation } from 'react-i18next'

const mockups = {
  invoice: '/invoice-mockup.svg',
  receipt: '/receipt-mockup.svg',
  reports: '/reports-mockup.svg',
}

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
          <img src={mockups.invoice} alt="Invoice" className="w-full rounded shadow" />
          <img src={mockups.receipt} alt="Receipt" className="w-full rounded shadow" />
          <img src={mockups.reports} alt="Reports" className="w-full rounded shadow" />
        </div>
      </div>
    </section>
  )
}
