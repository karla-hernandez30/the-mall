"use client";

import Link from "next/link";
import { stores } from "../../data/stores";

function StoreRoom({ store }) {
  const openStore = () => window.open(store.url, "_blank", "noopener,noreferrer");

  return (
    <button className="room" onClick={openStore} style={{ borderColor: store.accentColor }}>
      <div className="roomSign" style={{ background: store.accentColor }}>
        {store.displayName}
      </div>
      <div className="roomMeta">Inspired by {store.inspiredBy}</div>
      <div className="roomWindow">
        <div className="roomWindowTitle">Display</div>
        <div className="roomWindowText">{store.windowDisplay}</div>
      </div>
      <div className="roomEnter">Enter →</div>
    </button>
  );
}

export default function MallTowerPage() {
  const maxFloor = Math.max(...stores.map(s => s.floor));
  const columns = 4;

  const getStoreAt = (floor, slot) =>
    stores.find(s => s.floor === floor && s.slot === slot);

  return (
    <main className="towerPage">
      <div className="towerHeader">
        <Link href="/" className="towerNav">Exit</Link>
        <div className="towerTitle">THE MALL</div>
        <Link href="/food-court" className="towerNav">Food Court</Link>
      </div>

      <div className="towerHint">Scroll down through the building. Tap any room to enter the real store.</div>

      <div className="tower">
        {Array.from({ length: maxFloor }, (_, i) => {
          const floor = i + 1;
          return (
            <div key={floor} className="floorRow">
              <div className="floorLabel">Floor {floor}</div>
              <div className="floorGrid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                {Array.from({ length: columns }, (_, c) => {
                  const slot = c + 1;
                  const store = getStoreAt(floor, slot);
                  return store ? (
                    <StoreRoom key={store.id} store={store} />
                  ) : (
                    <div key={`${floor}-${slot}`} className="room empty">
                      <div className="emptyText">Empty</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
