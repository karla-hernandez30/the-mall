"use client";

import Link from "next/link";
import { stores } from "../../data/stores";

function StoreBlock({ store }) {
  const open = () => window.open(store.url, "_blank", "noopener,noreferrer");

  return (
    <button
      className="block"
      onClick={open}
      style={{
        gridColumn: `span ${store.col || 2}`,
        gridRow: `span ${store.row || 1}`,
      }}
      aria-label={`Open ${store.name}`}
    >
      <div className="blockFrame">
        <div className="blockArt" style={{ backgroundImage: `url(${store.art})` }} />
        <div className="blockLabel">
          <div className="blockName">{store.name}</div>
          <div className="blockSub">{store.subtitle}</div>
        </div>
      </div>
    </button>
  );
}

export default function MallPage() {
  return (
    <main className="dollhousePage">
      <div className="dollhouseHeader">
        <Link href="/" className="navBtn">Exit</Link>
        <div className="title">THE MALL</div>
        <Link href="/food-court" className="navBtn">Food Court</Link>
      </div>

      <div className="dollhouseWrap">
        <div className="blockWall">
          {stores.map((s) => <StoreBlock key={s.id} store={s} />)}
        </div>
      </div>
    </main>
  );
}
