import { useEffect, useRef, useState } from "react";

type TurnstileTheme = "light" | "dark" | "auto";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      theme?: TurnstileTheme;
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    }
  ) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileProps = {
  onVerify: (token: string) => void;
  theme?: TurnstileTheme;
  className?: string;
};

const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

function Turnstile({ onVerify, theme = "auto", className }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [missingSiteKey, setMissingSiteKey] = useState(false);

  useEffect(() => {
    if (!siteKey) {
      setMissingSiteKey(true);
      return;
    }

    let cancelled = false;
    let retryTimer: number | undefined;

    const renderWidget = () => {
      if (cancelled || !containerRef.current || widgetIdRef.current) {
        return;
      }

      if (!window.turnstile) {
        retryTimer = window.setTimeout(renderWidget, 100);
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme,
        callback: onVerify,
        "expired-callback": () => onVerify(""),
        "error-callback": () => onVerify(""),
      });
    };

    renderWidget();

    return () => {
      cancelled = true;

      if (retryTimer) {
        window.clearTimeout(retryTimer);
      }

      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [onVerify, theme]);

  if (missingSiteKey) {
    return <p>Turnstile site key is missing.</p>;
  }

  return <div className={className} ref={containerRef} />;
}

export default Turnstile;
