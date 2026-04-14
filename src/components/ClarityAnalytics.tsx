"use client";

import Script from "next/script";

export default function ClarityAnalytics() {
  const id = process.env.NEXT_PUBLIC_CLARITY_ID;
  if (!id) return null;

  return (
    <Script
      id="clarity-analytics"
      strategy="afterInteractive"
      src={`https://www.clarity.ms/tag/${id}`}
    />
  );
}
