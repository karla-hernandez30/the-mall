export default function StorefrontCard({ store }) {
  const openStore = () => {
    window.open(store.url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="storefront"
      onClick={openStore}
      style={{ textAlign: "left" }}
      aria-label={`Open ${store.displayName}`}
    >
      <div
        className="signGlow"
        style={{
          background: `radial-gradient(circle at 20% 15%, ${store.accentColor}, transparent 55%)`
        }}
      />

      <div className="sign">
        <span>{store.displayName}</span>
        <span style={{ fontSize: 12, opacity: 0.75 }}>Enter →</span>
      </div>

      <div className="meta">
        Inspired by {store.inspiredBy} • {store.category}
      </div>

      <div className="window">
        <div style={{ fontWeight: 850, marginBottom: 6 }}>Window Display</div>
        <div style={{ fontSize: 13, opacity: 0.9, fontWeight: 650 }}>
          {store.windowDisplay}
        </div>
        <div className="glass" />
      </div>
    </button>
  );
}
