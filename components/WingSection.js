import StorefrontCard from "./StorefrontCard";

export default function WingSection({ title, stores }) {
  return (
    <section className="wing">
      <h2 style={{ margin: "0 0 14px" }}>{title}</h2>
      <div className="store-grid">
        {stores.map((store) => (
          <StorefrontCard key={store.id} store={store} />
        ))}
      </div>
    </section>
  );
}
