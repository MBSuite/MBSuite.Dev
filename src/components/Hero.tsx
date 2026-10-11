import { useTranslation } from 'react-i18next'
const heroMockup = new URL('../assets/mockups/mbsuite-hero-mockup.svg', import.meta.url).href

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            {t('hero.subtitle')}
          </p>
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://micro-business-suite.vercel.app/"
              className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              {t('hero.ctaPrimary')}
            </a>
            <a
              href="#features"
              className="px-6 py-3 border border-gray-200 rounded hover:bg-gray-50"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src={heroMockup} alt="MBSuite dashboard" className="w-full max-w-xl rounded shadow" />
        </div>
      </div>
    </section>
  )
}
