
import PricingTemplate from "@/app/components/PricingTemplate";
export default function StarterPage() {
  return (
    <PricingTemplate
  title="Starter Package"
  description="Perfect for small businesses that need a clean professional presence."
  price="$150"
  features={[
    "Responsive modern website design",
    "Up to 3 pages",
    "Basic SEO setup",
    "Contact from integration",
    "Performance optimization",
    "Clean scalable architecture",
  ]}
  />
);
}

