import PricingTemplate from "@/app/components/PricingTemplate";

export default function ProfessionalPricing() {
  return (
    <PricingTemplate
      title="Professional"
      description="Perfect for growing businesses that need more features and support."
      price="$299"
      features={[
        "Up to 10 pages",
        "Custom domain",
        "SSL certificate",
        "Email support",
        "Monthly backups"
      ]}
    />
  );
}
