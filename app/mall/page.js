"use client";

import Link from "next/link";
import { stores } from "../../data/stores";
import StoreRoom from "../../components/StoreRoom";

export default function MallPage() {
  return (
    <main className="towerPage">
      <div className="towerHeader">
        <Link href="/" className="towerNav">Exit</Link>
        <div className="towerTitle">THE MALL</div>
        <Link href="/food-court" className="towerNav">Food Court</Link>
      </div>

      <div className="towerHint">
        Scroll the building. Tap any room to enter the real store.
      </div>

      <div className="towerGrid">
        {stores.map((store) => (
          <StoreRoom key={store.id} store={store} />
        ))}
      </div>
    </main>
  );
}
