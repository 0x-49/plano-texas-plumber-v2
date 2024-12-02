"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle,
  AlertTriangle,
  Info,
  Clock
} from "lucide-react";

const checklistItems = [
  {
    category: "Regular Maintenance",
    items: [
      {
        task: "Annual Safety Inspection",
        description: "Complete system check and safety verification",
        frequency: "Yearly",
        importance: "Critical"
      },
      {
        task: "Gas Meter Check",
        description: "Inspection of meter and connections",
        frequency: "6 Months",
        importance: "High"
      },
      {
        task: "Appliance Service",
        description: "Maintenance of gas appliances",
        frequency: "Yearly",
        importance: "High"
      }
    ]
  },
  {
    category: "Safety Checks",
    items: [
      {
        task: "Leak Detection",
        description: "Professional gas leak testing",
        frequency: "Yearly",
        importance: "Critical"
      },
      {
        task: "Ventilation Check",
        description: "Inspection of ventilation systems",
        frequency: "6 Months",
        importance: "Critical"
      },
      {
        task: "Carbon Monoxide Test",
        description: "CO detector testing and calibration",
        frequency: "Monthly",
        importance: "Critical"
      }
    ]
  }
];

function getImportanceColor(importance: string) {
  switch (importance.toLowerCase()) {
    case 'critical':
      return 'bg-red-100 text-red-800';
    case 'high':
      return 'bg-orange-100 text-orange-800';
    default:
      return 'bg-blue-100 text-blue-800';
  }
}

function getImportanceIcon(importance: string) {
  switch (importance.toLowerCase()) {
    case 'critical':
      return <AlertTriangle className="w-4 h-4" />;
    case 'high':
      return <Info className="w-4 h-4" />;
    default:
      return <CheckCircle className="w-4 h-4" />;
  }
}

export function GasServiceChecklist() {
  return (
    <div className="space-y-6">
      {checklistItems.map((section, index) => (
        <div key={index}>
          <h4 className="font-semibold mb-4">{section.category}</h4>
          <div className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <Card key={itemIndex} className="p-4">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getImportanceIcon(item.importance)}
                      <h5 className="font-medium">{item.task}</h5>
                      <Badge variant="secondary" className={getImportanceColor(item.importance)}>
                        {item.importance}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {item.frequency}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}