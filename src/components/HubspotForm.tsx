"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const portalId = "27038193";
const formId = "65e0f947-3802-42ba-8cf7-3462817e140c";
const region = "eu1";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: {
          portalId: string;
          formId: string;
          region?: "na1" | "eu1" | string;
          target?: string;
          cssClass?: string;
          onFormReady?: (form: HTMLElement) => void;
        }) => void;
      };
    };
  }
}

export default function HubSpotForm({ type }: { type: "modal" | "footer" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!window.hbspt?.forms || !containerRef.current) return;

    containerRef.current.innerHTML = "";

    window.hbspt.forms.create({
      portalId,
      formId,
      region,
      target: `#hubspot-form-${type}`,
    });
  }, [scriptReady, type]);

  return (
    <div>
      <Script
        id="hsforms"
        src="//js-eu1.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("script loaded");
          setScriptReady(true);
        }}
      />
      <div id={`hubspot-form-${type}`} ref={containerRef} />
    </div>
  );
}
