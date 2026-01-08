"use client";

export default function StoreBlock({ store }) {
  const open = () => window.open(store.url, "_blank", "noopener,noreferrer");

  return (
    <button className={`store ${store.size}`} onClick={open} aria-label={`Open ${store.name}`}>
      <div className="storeFrame">
        <div className="storeArt" style={{ backgroundImage: `url(${store.art})` }} />
        <div className="storeLabel">
          <div className="storeName">{store.name}</div>
          <div className="storeTap">Tap to enter →</div>
        </div>
      </div>
    </button>
  );
}
