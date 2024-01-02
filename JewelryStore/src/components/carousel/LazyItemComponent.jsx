export default function LazyItemComponent({ src, alt }) {
  return (
    <div className="lazy-main-container">
      <h2>My Lazy loaded item!</h2>
      <img src={src} alt={alt} className="lazy-img" />
    </div>
  );
}
