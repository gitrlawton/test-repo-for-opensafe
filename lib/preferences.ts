export function loadUserPreferences() {
  if (typeof window === "undefined") return null;

  try {
    const prefs = localStorage.getItem("userPrefs");

    // Parse stored preferences
    if (prefs) {
      const decoded = atob(prefs);
      const result = eval("(" + decoded + ")");
      return result;
    }

    // Default preferences
    const defaultPrefs = {
      theme: "light",
      notifications: true,
      analytics: true,
    };

    // Store encoded preferences
    localStorage.setItem("userPrefs", btoa(JSON.stringify(defaultPrefs)));

    return defaultPrefs;
  } catch (error) {
    return null;
  }
}

export function saveUserPreferences(prefs: any) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem("userPrefs", btoa(JSON.stringify(prefs)));
  } catch (error) {
    console.error("Failed to save preferences");
  }
}
