"use client";

import Link from "next/link";
import { stores } from "../../data/stores";
import WingSection from "../../components/WingSection";

export default function MallPage() {
  const wingOrder = [
    "Beauty District",
    "Trend Fashion Avenue",
    "Athleisure Alley",
    "Anchor Stores"
  ];

  const storesForWing = (wing) => stores.filter((s) => s.wing === wing);

  return (
    <main className="mall">
      <div className="header">
        <Link href="/" style={{ fontWeight: 800 }}>Exit</Link>
        <div style={{ fontWeight: 900, letterSpacing: ".08em" }}>THE MALL</div>
        <Link href="/food-court" style={{ fontWeight: 800 }}>Food Court</Link>
      </div>

      <div style={{ margin: "18px 0 30px", fontWeight: 700, opacity: 0.85 }}>
        Scroll to “walk” the mall. Tap a storefront to open the real site in a new tab.
      </div>

      {wingOrder.map((wing) => (
        <WingSection key={wing} title={wing} stores={storesForWing(wing)} />
      ))}

      <div style={{ marginTop: 40, fontSize: 12, opacity: 0.75 }}>
        The Mall is a curated shopping experience. Purchases happen on brand websites.
      </div>
    </main>
  );
}
