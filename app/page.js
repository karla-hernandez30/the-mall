import Link from "next/link";

export default function Home() {
  return (
    <main className="entrance">
      <h1 className="mall-title">THE MALL</h1>
      <p className="tagline">Shop like it’s 2003.</p>

      <Link href="/mall" className="enter-button">
        Enter The Mall
      </Link>
    </main>
  );
}
