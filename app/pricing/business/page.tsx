"use client";

import PricingTemplate from "@/app/components/PricingTemplate";

export default function Business() {
    return (
        <PricingTemplate
            title="Business Package"
            price="$750"
            description="Best for growing businesses."
            features={[
                "Up to 10 pages website",
                "Custom UI/UX design",
                "SEO optimization",
                "CMS integration",
                "priority support",
            ]}
            />
        );
    }