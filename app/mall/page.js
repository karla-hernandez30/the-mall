"use client";

import Link from "next/link";
import MallProp from "../../components/MallProp";
import WingSection from "../../components/WingSection";
import { stores } from "../../data/stores";

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

      <p style={{ margin: "16px 0 28px", fontWeight: 600 }}>
        Scroll to “walk” the mall. Tap a storefront to open the real site.
      </p>

      <MallProp
        title="Directory Kiosk"
        detail="Tap storefronts to enter. Use wings like mall zones. Sparkles are optional but encouraged."
      />

      <MallProp
        title="Fountain Court"
        detail="A tiny glitter fountain moment because every good mall has one."
      />

      {wingOrder.map((wing) => (
        <WingSection
          key={wing}
          title={wing}
          stores={storesForWing(wing)}
        />
      ))}
    </main>
  );
}
