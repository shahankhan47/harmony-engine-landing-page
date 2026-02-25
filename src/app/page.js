import CostSection from './home/CostSection/CostSection'
import FinalCTASection from './home/FinalCTASection/FinalCTASection'
import GainSection from './home/GainSection/GainSection'
import HeroSection from './home/HeroSection/HeroSection'
import HowItWorksSection from './home/HowItWorksSection/HowItWorksSection'
import SituationSection from './home/SituationSection/SituationSection'

export default function Home() {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <section>
        <SituationSection />
      </section>
      <section>
        <CostSection />
      </section>
      <section>
        <HowItWorksSection />
      </section>
      <section>
        <GainSection />
      </section>
      <section>
        <FinalCTASection />
      </section>
    </div>
  )
}