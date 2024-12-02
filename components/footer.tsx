import Link from "next/link";
import { WrenchIcon } from "lucide-react";
import { Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <WrenchIcon className="h-6 w-6" style={{ color: "#0caadc" }} />
              <span className="font-bold text-xl">Plano Plumbers</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Professional plumbing services in Plano, Texas. Available 24/7 for all your plumbing needs.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <Link href="tel:+1234567890" className="text-sm font-medium hover:text-primary flex items-center gap-2">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </Link>
            </div>
          </div>

          {/* Services Columns */}
          <div className="space-y-2.5">
            <h3 className="text-sm font-bold tracking-wide uppercase text-foreground/80">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/emergency-plumbing" className="text-muted-foreground hover:text-primary">Emergency Services</Link></li>
              <li><Link href="/services/residential-plumbing" className="text-muted-foreground hover:text-primary">Residential Plumbing</Link></li>
              <li><Link href="/services/commercial-plumbing" className="text-muted-foreground hover:text-primary">Commercial Plumbing</Link></li>
              <li><Link href="/services/drain-and-sewer" className="text-muted-foreground hover:text-primary">Drain & Sewer</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h3 className="text-sm font-bold tracking-wide uppercase text-foreground/80">More Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/water-heater-services" className="text-muted-foreground hover:text-primary">Water Heater</Link></li>
              <li><Link href="/services/bathroom-remodeling" className="text-muted-foreground hover:text-primary">Bathroom Remodeling</Link></li>
              <li><Link href="/services/gas-plumbing" className="text-muted-foreground hover:text-primary">Gas Plumbing</Link></li>
              <li><Link href="/services/outdoor-plumbing" className="text-muted-foreground hover:text-primary">Outdoor Plumbing</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h3 className="text-sm font-bold tracking-wide uppercase text-foreground/80">Additional</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/pipework-services" className="text-muted-foreground hover:text-primary">Pipework</Link></li>
              <li><Link href="/services/water-treatment-services" className="text-muted-foreground hover:text-primary">Water Treatment</Link></li>
              <li><Link href="/services/specialty-plumbing" className="text-muted-foreground hover:text-primary">Specialty Services</Link></li>
            </ul>
          </div>

          <div className="space-y-2.5">
            <h3 className="text-sm font-bold tracking-wide uppercase text-foreground/80">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about-us" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container py-3">
          <p className="text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Plano Plumbers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}