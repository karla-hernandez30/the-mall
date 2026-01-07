export default function StoreRoom({ store }) {
  const openStore = () => window.open(store.url, "_blank", "noopener,noreferrer");

  return (
    <button
      className="room"
      onClick={openStore}
      style={{
        gridColumn: `span ${store.colSpan || 1}`,
        gridRow: `span ${store.rowSpan || 1}`,
        borderColor: store.color
      }}
      aria-label={`Open ${store.name}`}
    >
      <div className="roomGlow" style={{ background: store.color }} />

      <div className="roomTop">
        <div className="roomSign">
          <span className="roomIcon">{store.icon}</span>
          <span className="roomName">{store.name}</span>
        </div>
        {store.subtitle ? <div className="roomSub">{store.subtitle}</div> : null}
      </div>

      <div className="roomScene">
        {(store.decor || []).map((d, idx) => (
          <span key={idx} className="roomSticker">{d}</span>
        ))}
      </div>

      <div className="roomFooter">
        <span className="roomVibe">{store.vibe}</span>
        <span className="roomEnter">Enter →</span>
      </div>
    </button>
  );
}
