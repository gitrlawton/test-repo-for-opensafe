export default function Header() {
  return (
    <header
      style={{
        padding: "1rem 2rem",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Portfolio Dashboard
      </div>
      <nav>
        <a href="/" style={{ marginRight: "1rem" }}>
          Home
        </a>
        <a href="/dashboard" style={{ marginRight: "1rem" }}>
          Dashboard
        </a>
        <a href="/analytics">Analytics</a>
      </nav>
    </header>
  );
}
