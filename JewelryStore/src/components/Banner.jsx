import "../styles/banner.css";

export default function Banner({ img, video, title, desc, side, position }) {
  return (
    <div
      className={`${img === null ? "video" : ""} banner-main-container ${
        !side && "right"
      } `}
    >
      {img === null ? (
        <video src={video} className="banner-img" autoPlay muted loop />
      ) : (
        <img
          className="banner-img"
          src={img}
          style={{ objectPosition: position }}
        />
      )}

      <div className="banner-info-container">
        <h1 className="banner-info">{title}</h1>
        <p className="banner-info">{desc}</p>
      </div>
    </div>
  );
}
