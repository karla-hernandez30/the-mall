import MallProp from "../../components/MallProp";
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
      <span />
    </div>

    <p style={{ margin: "16px 0 28px", fontWeight: 600 }}>
      Scroll to walk the mall. Tap a storefront to open the real site.
    </p>

    {/* 👇 ADD THESE HERE */}
    <MallProp
      title="Directory Kiosk"
      detail="Tap storefronts to enter. Use wings like mall zones. Sparkles are optional but encouraged."
    />

    <MallProp
      title="Fountain Court"
      detail="A tiny glitter fountain moment because every good mall has one."
    />

    {/* 👇 WINGS START HERE */}
    {wingOrder.map((wing) => (
      <WingSection
        key={wing}
        title={wing}
        stores={stores.filter(store => store.wing === wing)}
      />
    ))}

  </main>
);
      {wingOrder.map((wing) => (
        <WingSection key={wing} title={wing} stores={storesForWing(wing)} />
      ))}

      <div style={{ marginTop: 40, fontSize: 12, opacity: 0.75 }}>
        The Mall is a curated shopping experience. Purchases happen on brand websites.
      </div>
    </main>
  );
}
