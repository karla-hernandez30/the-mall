export default function StorefrontCard({ store }) {
  const openStore = () => {
    window.open(store.url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="storefront"
      onClick={openStore}
      style={{ borderColor: store.accentColor, textAlign: "left" }}
    >
      <h3 style={{ margin: "0 0 6px" }}>{store.displayName}</h3>
      <div style={{ fontSize: 12, opacity: 0.8, fontWeight: 700, marginBottom: 10 }}>
        Inspired by {store.inspiredBy} • {store.category}
      </div>
      <div style={{ fontSize: 13, opacity: 0.9 }}>
        {store.windowDisplay}
      </div>
      <div style={{ marginTop: 12, fontWeight: 800, fontSize: 12 }}>
        Tap to enter →
      </div>
    </button>
  );
}
