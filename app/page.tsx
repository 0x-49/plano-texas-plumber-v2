import ServiceHero from "@/components/ServiceHero";
import ServiceCards from "@/components/ServiceCards";
import { Reviews } from "@/components/Reviews";
import { ContactForm } from "@/components/ContactForm";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="w-full">
      <ServiceHero
        title="Expert Plumbing Services in Plano, TX"
        description="Professional plumbing solutions for your home and business"
        image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80"
      />
      
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <ServiceCards />
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Customers Say</h2>
          <Reviews />
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="p-8 shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
            <ContactForm />
          </Card>
        </div>
      </section>
    </div>
  );
}