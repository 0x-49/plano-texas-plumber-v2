"use client";

import ReadingProgress from "./ReadingProgress";
import ScrollToTop from "./ScrollToTop";
import { TableOfContents } from "./TableOfContents";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  showTableOfContents?: boolean;
  contentId?: string;
}

export default function PageLayout({
  children,
  showTableOfContents = false,
  contentId = "main-content"
}: PageLayoutProps) {
  return (
    <>
      <ReadingProgress />
      <div className="relative flex flex-col xl:flex-row max-w-[1920px] mx-auto">
        <div
          id={contentId}
          className={cn(
            "flex-1 container mx-auto",
            showTableOfContents && "xl:max-w-[calc(100%-320px)]"
          )}
        >
          {children}
        </div>
        {showTableOfContents && (
          <div className="hidden xl:block xl:w-[280px] shrink-0">
            <div className="fixed right-8 top-24 w-[280px] z-20">
              <TableOfContents contentId={contentId} />
            </div>
          </div>
        )}
      </div>
      <ScrollToTop />
    </>
  );
}