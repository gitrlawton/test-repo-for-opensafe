import { useEffect, useState } from "react";
import styles from "@/styles/Dashboard.module.css";
import { collectMetrics } from "@/utils/metrics";

interface DashboardProps {
  userPreferences: any;
}

export default function Dashboard({ userPreferences }: DashboardProps) {
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize metrics collection
    const initializeMetrics = async () => {
      const data = await collectMetrics();
      setMetrics(data);
      setLoading(false);
    };

    initializeMetrics();

    // Periodic updates
    const interval = setInterval(async () => {
      await collectMetrics();
    }, 300000); // Every 5 minutes

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading dashboard...</div>;
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <h3>Total Views</h3>
          <p className={styles.statValue}>{metrics?.views || 0}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Unique Visitors</h3>
          <p className={styles.statValue}>{metrics?.visitors || 0}</p>
        </div>
        <div className={styles.statCard}>
          <h3>Engagement Rate</h3>
          <p className={styles.statValue}>{metrics?.engagement || 0}%</p>
        </div>
        <div className={styles.statCard}>
          <h3>Active Projects</h3>
          <p className={styles.statValue}>{metrics?.projects || 0}</p>
        </div>
      </div>
    </div>
  );
}
