import { useTranslation } from 'react-i18next'

export default function HowItWorks() {
  const { t } = useTranslation()
  const steps = t('howItWorks.steps', { returnObjects: true }) as Array<{ title: string; desc: string }>

  return (
    <section id="howitworks" className="w-full bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold">{t('howItWorks.title')}</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white p-6 rounded shadow-sm">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{idx + 1}</div>
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
