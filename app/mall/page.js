"use client";

import Link from "next/link";
import { stores } from "../../data/stores";
import StoreBlock from "../../components/StoreBlock";

export default function MallPage() {
  return (
    <main className="dollhousePage">
      <div className="dollhouseHeader">
        <Link href="/" className="navBtn">Exit</Link>
        <div className="title">THE MALL</div>
        <Link href="/food-court" className="navBtn">Food Court</Link>
      </div>

      <div className="hint">Tap any storefront to open the real store.</div>

      <div className="mallGrid">
        {stores.map((s) => (
          <StoreBlock key={s.id} store={s} />
        ))}
      </div>
    </main>
  );
}
