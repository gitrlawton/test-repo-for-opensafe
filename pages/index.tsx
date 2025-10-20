import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";
import Dashboard from "@/components/Dashboard";
import { loadUserPreferences } from "@/lib/preferences";

export default function Home() {
  const [userPrefs, setUserPrefs] = useState<any>(null);

  useEffect(() => {
    // Load user preferences from localStorage
    const prefs = loadUserPreferences();
    setUserPrefs(prefs);
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio Dashboard - Your Professional Hub</title>
        <meta
          name="description"
          content="Manage your portfolio and analytics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.header}>
          <h1>Welcome to Portfolio Dashboard</h1>
          <p>
            Your all-in-one solution for managing your professional presence
          </p>
        </div>
        <Dashboard userPreferences={userPrefs} />
      </main>
    </>
  );
}
