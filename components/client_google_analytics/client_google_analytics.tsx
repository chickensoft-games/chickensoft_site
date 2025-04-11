"use client";

import { GoogleAnalytics } from "nextjs-google-analytics";
import { JSX } from "react";

export default function ClientGoogleAnalytics({
  gtag,
}: {
  gtag: string;
}): JSX.Element {
  return <GoogleAnalytics gaMeasurementId={gtag} trackPageViews />;
}
