import AboutHero from "./AboutHero/AboutHero";
import AboutReadyCTA from "./AboutReadyCTA/AboutReadyCTA";
import BuiltForPeople from "./BuiltForPeople/BuiltForPeople";
import Clarity from "./Clarity/Clarity";
import ReadOnly from "./ReadOnly/ReadOnly";
import TakeYourTime from "./TakeYourTime/TakeYourTime";
import WhyHarmonyExists from "./WhyHarmonyExists/WhyHarmonyExists";

export default function AboutPage() {
  return (
    <div>
      <section>
        <AboutHero />
      </section>
      <section>
        <WhyHarmonyExists />
      </section>
      <section>
        <BuiltForPeople />
      </section>
      <section>
        <ReadOnly />
      </section>
      <section>
        <Clarity />
      </section>
      <section>
        <TakeYourTime />
      </section>
      <section>
        <AboutReadyCTA />
      </section>
    </div>
  );
}
