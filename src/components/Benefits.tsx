import { useTranslation } from 'react-i18next'

export default function Benefits() {
  const { t } = useTranslation()
  const items = t('benefits.items', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">{t('benefits.title')}</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow-sm">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
