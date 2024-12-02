'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import ServiceHero from "@/components/ServiceHero";

interface ServiceHeroProps {
  title?: any;
  description?: any;
  image?: any;
}

const ServiceHero = ({ title, description, image }: ServiceHeroProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default ServiceHero;