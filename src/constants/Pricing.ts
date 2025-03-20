import { pricing } from "@/types/interfaces";

export const pricingItems: pricing[] = [
  {
    title: "freelancer",
    description: "The essentials to provide your best work for your clients.",
    monthlyPrice: 9.99,
    annuallyPrice: 90,
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
    glowPosition: "right",
  },
  {
    title: "Startup",
    description: "A plan that scales with your rapidly growing business.",
    monthlyPrice: 18.99,
    annuallyPrice: 180,
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
    isMostPopular: true,
  },
  {
    title: "enterprise",
    description: "Dedicated support and infrastructure for your company.",
    monthlyPrice: 40,
    annuallyPrice: 360,
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
    glowPosition: "left",
  },
];