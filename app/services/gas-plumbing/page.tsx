"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Card } from "@/components/ui/card";
import { ServiceProcess } from "@/components/ServiceProcess";
import { EnhancedFAQ } from "@/components/EnhancedFAQ";
import { GasServiceChecklist } from "@/components/GasServiceChecklist";
import { Flame, Shield, Tools, AlertTriangle } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

const features = [
  {
    title: "Licensed Gas Fitters",
    description: "Our team of certified gas plumbers ensures safe and compliant installations.",
    icon: <Shield className="w-8 h-8 text-primary" />
  },
  {
    title: "Gas Leak Detection",
    description: "Advanced equipment to detect and locate gas leaks quickly and accurately.",
    icon: <AlertTriangle className="w-8 h-8 text-primary" />
  },
  {
    title: "Gas Line Installation",
    description: "Expert installation of new gas lines for appliances and home additions.",
    icon: <Tools className="w-8 h-8 text-primary" />
  },
  {
    title: "24/7 Emergency Service",
    description: "Round-the-clock availability for urgent gas plumbing issues.",
    icon: <Flame className="w-8 h-8 text-primary" />
  }
];

const processSteps = [
  {
    title: "Initial Assessment",
    description: "Thorough inspection of your gas system to identify issues or requirements."
  },
  {
    title: "Safety Check",
    description: "Comprehensive safety evaluation of existing gas lines and connections."
  },
  {
    title: "Expert Service",
    description: "Professional gas plumbing service using industry-best practices."
  },
  {
    title: "Final Testing",
    description: "Rigorous testing to ensure safe and efficient operation."
  }
];

const faqItems = [
  {
    category: "General",
    items: [
      {
        question: "What gas plumbing services do you offer?",
        answer: "We provide comprehensive gas plumbing services including installation, repair, leak detection, and safety inspections for both residential and commercial properties."
      },
      {
        question: "Are your gas plumbers licensed?",
        answer: "Yes, all our gas plumbers are fully licensed, insured, and certified to work with gas systems in Plano, TX."
      }
    ]
  },
  {
    category: "Safety",
    items: [
      {
        question: "What should I do if I smell gas?",
        answer: "If you smell gas, immediately evacuate the building, avoid using any electrical switches, and call us from a safe location. We provide 24/7 emergency response."
      },
      {
        question: "How often should gas lines be inspected?",
        answer: "We recommend annual safety inspections of your gas system to ensure proper operation and identify potential issues early."
      }
    ]
  },
  {
    category: "Installation",
    items: [
      {
        question: "Can you install gas lines for outdoor appliances?",
        answer: "Yes, we can install gas lines for outdoor kitchens, grills, fire pits, and other outdoor appliances, ensuring proper installation and safety."
      }
    ]
  },
  {
    category: "Maintenance",
    items: [
      {
        question: "How long do gas lines typically last?",
        answer: "With proper installation and maintenance, gas lines can last 50+ years. However, regular inspections are important to ensure continued safe operation."
      }
    ]
  }
];

const breadcrumbs = [
  { text: "Home", href: "/" },
  { text: "Services", href: "/services" },
  { text: "Gas Plumbing", href: "/services/gas-plumbing" }
];

export default function GasPlumbingPage() {
  return (
    <ServicePageLayout
      title="Professional Gas Plumbing Services in Plano TX"
      description="Expert gas line installation, repair, and safety services in Plano, TX. Licensed gas fitters available 24/7 for emergencies."
      breadcrumbs={breadcrumbs}
      canonicalUrl="https://planoplumbers.com/services/gas-plumbing"
      image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Expert Gas Plumbing Solutions</h2>
            <p className="text-muted-foreground mb-8">
              Our licensed gas fitters provide comprehensive gas plumbing services with a focus on safety 
              and reliability. From leak detection to new installations, we ensure your gas system meets 
              all safety standards and operates efficiently.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>

            <Card className="p-6 mb-12">
              <h3 className="text-xl font-bold mb-6">Gas Safety Checklist</h3>
              <GasServiceChecklist />
            </Card>

            <ServiceProcess
              title="Our Service Process"
              description="We follow a systematic approach to ensure safe and reliable gas services."
              steps={processSteps}
            />

            <div className="mt-12">
              <EnhancedFAQ
                title="Gas Plumbing FAQ"
                description="Common questions about gas plumbing services"
                faqs={faqItems}
                categories={["General", "Safety", "Installation", "Maintenance"]}
              />
            </div>
          </div>

          <div>
            <Card className="p-6 sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Gas Service Request</h3>
              <p className="text-muted-foreground mb-6">Licensed gas plumbers available 24/7</p>
              <ContactForm emergency />
            </Card>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}