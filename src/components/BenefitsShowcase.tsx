import { useTranslation } from 'react-i18next'

interface Benefit {
  title: string
  desc: string
}

export default function BenefitsShowcase() {
  const { t } = useTranslation()
  const sectionData = t('benefits', { returnObjects: true }) as any
  const items = sectionData?.items as Benefit[] | undefined

  if (!items || items.length === 0) return null

  return (
    <section id="benefits" className="benefits-showcase section-pad">
      <div className="content-wrap">
        <div className="section-heading mb-12">
          <span className="section-kicker">{sectionData?.kicker}</span>
          <h2>{sectionData?.title}</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((benefit, idx) => (
            <article key={benefit.title} className="benefit-showcase-card group">
              <div style={{
                display: 'flex',
                height: '48px',
                width: '48px',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00f0ff, #0080ff)',
                color: '#000',
                fontWeight: 'bold',
                fontSize: '1.125rem',
                marginBottom: '24px',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)'
              }} className="group-hover:scale-110 transition-transform">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.desc}</p>
              <div style={{
                marginTop: '16px',
                height: '2px',
                width: '0',
                background: 'linear-gradient(90deg, #00f0ff, #d000ff)',
                transition: 'width 300ms ease'
              }} className="group-hover:w-12" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
