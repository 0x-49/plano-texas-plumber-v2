"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle } from "lucide-react";

const heaterTypes = [
  {
    type: "Traditional Tank",
    description: "Storage tank water heaters keep hot water ready for use",
    initialCost: "Low",
    operatingCost: "Moderate",
    lifespan: "8-12 years",
    spaceNeeded: "Large",
    features: [
      { name: "Lower upfront cost", included: true },
      { name: "Simple installation", included: true },
      { name: "Continuous hot water", included: false },
      { name: "Energy efficient", included: false },
      { name: "Space saving", included: false }
    ]
  },
  {
    type: "Tankless",
    description: "On-demand water heating for endless hot water",
    initialCost: "High",
    operatingCost: "Low",
    lifespan: "20+ years",
    spaceNeeded: "Small",
    features: [
      { name: "Lower upfront cost", included: false },
      { name: "Simple installation", included: false },
      { name: "Continuous hot water", included: true },
      { name: "Energy efficient", included: true },
      { name: "Space saving", included: true }
    ]
  }
];

export function WaterHeaterComparison() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {heaterTypes.map((heater, index) => (
        <Card key={index} className="p-6">
          <h4 className="text-xl font-semibold mb-2">{heater.type}</h4>
          <p className="text-muted-foreground mb-4">{heater.description}</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm font-medium">Initial Cost</p>
              <p className="text-muted-foreground">{heater.initialCost}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Operating Cost</p>
              <p className="text-muted-foreground">{heater.operatingCost}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Lifespan</p>
              <p className="text-muted-foreground">{heater.lifespan}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Space Needed</p>
              <p className="text-muted-foreground">{heater.spaceNeeded}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-medium">Features</h5>
            {heater.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-2">
                {feature.included ? (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500" />
                )}
                <span className="text-sm text-muted-foreground">{feature.name}</span>
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}