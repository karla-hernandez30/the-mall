export default function MallProp({ title, detail }) {
  return (
    <div className="mallProp">
      <b>{title}</b>
      <div style={{ marginTop: 6 }}>
        <small>{detail}</small>
      </div>
    </div>
  );
}
