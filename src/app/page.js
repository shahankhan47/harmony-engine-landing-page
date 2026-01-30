import AskAnything from './home/AskAnything/AskAnything'
import BigPicture from './home/BigPicture/BigPicture'
import HeroSection from './home/HeroSection/HeroSection'
import Partners from './home/Partners/Partners'
import ReadyCTA from './home/ReadyCTA/ReadyCTA'
import Timeline from './home/Timeline/Timeline'

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
        <AskAnything />
      </section>
      <section>
        <BigPicture />
      </section>
      <section>
        <Timeline />
      </section>
      <section>
        <ReadyCTA />
      </section>
    </div>
  )
}