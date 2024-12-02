"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentId: string;
}

export function TableOfContents({ contentId }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const contentElement = document.getElementById(contentId);
    if (!contentElement) return;

    const elements = Array.from(contentElement.querySelectorAll("h2, h3"));
    const headingElements = elements.map((element) => ({
      id: element.id,
      text: element.textContent ?? "",
      level: Number(element.tagName.charAt(1)),
    }));

    setHeadings(headingElements);
  }, [contentId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    const headingElements = document.querySelectorAll("h2, h3");
    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background/95 backdrop-blur-sm rounded-lg border p-4 shadow-sm">
      <h2 className="text-sm font-semibold mb-3">Table of Contents</h2>
      <nav className="space-y-1">
        {headings.map((heading) => (
          <a
            key={heading.id}
            href={`#${heading.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector(`#${heading.id}`)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className={cn(
              "block text-sm py-1 px-2 rounded-md transition-colors",
              heading.level === 3 && "pl-4",
              activeId === heading.id
                ? "bg-primary/10 text-primary font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-accent",
            )}
          >
            {heading.text}
          </a>
        ))}
      </nav>
    </div>
  );
}