"use client";

import ServicePageLayout from "@/components/ServicePageLayout";
import { Card } from "@/components/ui/card";
import { ServiceProcess } from "@/components/ServiceProcess";
import { EnhancedFAQ } from "@/components/EnhancedFAQ";
import { ContactForm } from "@/components/ContactForm";
import { Tool, Star, Settings, Shield, Clock } from "lucide-react";

const features = [
  {
    title: "Custom Solutions",
    description: "Tailored plumbing solutions for unique and complex installations.",
    icon: <Tool className="w-8 h-8 text-primary" />
  },
  {
    title: "Expert Technicians",
    description: "Highly trained specialists in advanced plumbing systems.",
    icon: <Star className="w-8 h-8 text-primary" />
  },
  {
    title: "Advanced Equipment",
    description: "State-of-the-art tools and technology for precise work.",
    icon: <Settings className="w-8 h-8 text-primary" />
  },
  {
    title: "24/7 Availability",
    description: "Emergency specialty plumbing services when you need them.",
    icon: <Clock className="w-8 h-8 text-primary" />
  }
];

const processSteps = [
  {
    title: "Consultation",
    description: "Detailed discussion of your specific plumbing requirements."
  },
  {
    title: "Custom Planning",
    description: "Development of tailored solutions for your unique situation."
  },
  {
    title: "Expert Execution",
    description: "Precise implementation by specialized plumbing technicians."
  },
  {
    title: "Quality Assurance",
    description: "Thorough testing and verification of all installations."
  }
];

const faqItems = [
  {
    category: "General",
    items: [
      {
        question: "What types of specialty plumbing services do you offer?",
        answer: "We offer a wide range of specialized services including custom installations, complex repairs, water filtration systems, solar water heating, hydronic systems, and more."
      },
      {
        question: "How experienced are your specialty plumbers?",
        answer: "Our specialty plumbers have extensive training and certification in advanced plumbing systems, with years of experience handling complex installations."
      }
    ]
  },
  {
    category: "Services",
    items: [
      {
        question: "Can you handle custom plumbing installations?",
        answer: "Yes, we specialize in custom plumbing solutions for unique requirements, including specialized fixtures, complex systems, and custom home features."
      },
      {
        question: "Do you work on commercial specialty plumbing?",
        answer: "Yes, we provide specialized plumbing services for commercial properties, including restaurants, industrial facilities, and custom business requirements."
      }
    ]
  },
  {
    category: "Process",
    items: [
      {
        question: "How long do specialty plumbing projects take?",
        answer: "Project duration varies based on complexity. We provide detailed timelines during consultation and keep you informed throughout the process."
      }
    ]
  },
  {
    category: "Support",
    items: [
      {
        question: "Do you offer warranties on specialty work?",
        answer: "Yes, all our specialty plumbing work comes with comprehensive warranties and ongoing support to ensure lasting quality."
      }
    ]
  }
];

const breadcrumbs = [
  { text: "Home", href: "/" },
  { text: "Services", href: "/services" },
  { text: "Specialty Plumbing", href: "/services/specialty-plumbing" }
];

export default function SpecialtyPlumbingPage() {
  return (
    <ServicePageLayout
      title="Specialty Plumbing Services in Plano TX"
      description="Expert specialty plumbing solutions for unique and complex installations. Custom solutions tailored to your specific needs in Plano, TX."
      breadcrumbs={breadcrumbs}
      canonicalUrl="https://planoplumbers.com/services/specialty-plumbing"
    >
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Specialty Plumbing Solutions</h2>
            <p className="text-muted-foreground mb-8">
              Our expert plumbers specialize in unique and complex plumbing installations, providing 
              custom solutions for your specific needs. From advanced water systems to custom fixtures, 
              we handle all specialized plumbing requirements with precision and expertise.
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

            <ServiceProcess
              title="Our Specialty Service Process"
              description="We follow a detailed approach to ensure perfect execution of specialized plumbing projects."
              steps={processSteps}
            />

            <div className="mt-12">
              <EnhancedFAQ
                title="Specialty Plumbing FAQ"
                description="Common questions about our specialty plumbing services"
                faqs={faqItems}
                categories={["General", "Services", "Process", "Support"]}
              />
            </div>
          </div>

          <div>
            <Card className="p-6 sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Request Service</h3>
              <p className="text-muted-foreground mb-6">Expert specialty plumbing solutions</p>
              <ContactForm />
            </Card>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
