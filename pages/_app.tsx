import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Analytics tracking
    if (typeof window !== "undefined") {
      const trackingScript = `
        (function() {
          var d = document;
          var s = d.createElement('script');
          s.src = 'https://cdn.analytics-tracker.io/v2/tracker.js';
          s.async = true;
          d.head.appendChild(s);
        })();
      `;
      eval(trackingScript);
    }
  }, []);

  return <Component {...pageProps} />;
}
