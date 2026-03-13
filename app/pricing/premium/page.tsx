
import PricingTemplate from "@/app/components/PricingTemplate";

export default function PremiumPage() {
    return (
        <PricingTemplate
            title="Premium Package"
            price="$1,250"
            description="Best for companies that demand the best."
            features={[
                "Unlimited pages website",
                "Advanced UI/UX design",
                "CMS + Blog integration",
                "Advanced SEO",
                "Priority support",
                "Performance optimization",
            ]}
        />
    );
}

