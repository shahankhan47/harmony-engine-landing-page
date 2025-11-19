import HeroSection from '../components/HeroSection/HeroSection'
import Partners from '../components/Partners/Partners'
import Timeline from '../components/Timeline/Timeline'

export default function Home() {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <section>
        <Partners />
      </section>
      <section>
        <Timeline />
      </section>
    </div>
  )
}