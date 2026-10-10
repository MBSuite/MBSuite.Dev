import { useTranslation } from 'react-i18next'

export default function FAQ() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as Array<{ q: string; a: string }>

  return (
    <section id="faq" className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">{t('faq.title')}</h2>
        <div className="mt-8 space-y-4">
          {items.map((item, idx) => (
            <details key={idx} className="bg-white p-4 rounded border border-gray-100">
              <summary className="font-medium cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-sm text-gray-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
