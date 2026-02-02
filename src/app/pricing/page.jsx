import EverythingTogether from "./EverythingTogether/EverythingTogether";
import FAQ from "./FAQ/FAQ";
import PricingHero from "./PricingHero/PricingHero";
import PricingPlans from "./PricingPlans/PricingPlans";
import SafeToExplore from "./SafeToExplore/SafeToExplore";
import SubscriptionValue from "./SubscriptionValue/SubscriptionValue";
import TakeYourTimeCTA from "./TakeYourTimeCTA/TakeYourTimeCTA";

export default function AboutPage() {
  return (
    <div>
      <section>
        <PricingHero />
      </section>
      <section>
        <SubscriptionValue />
      </section>
      <section>
        <PricingPlans />
      </section>
      <section>
        <EverythingTogether />
      </section>
      <section>
        <SafeToExplore />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <TakeYourTimeCTA />
      </section>
    </div>
  );
}
