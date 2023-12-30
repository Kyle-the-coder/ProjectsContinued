import "../styles/contactus.css";

export default function ContactUs() {
  return (
    <div className="contact-main-container">
      <div className="contact-left-display-container">
        <h1 className="m0">Get In Touch</h1>
        <p>
          Timothy Patrick Jewelers, established in 2009, is a distinguished name
          in the world of fine jewelry, renowned for its exquisite craftsmanship
          and personalized service. With a commitment to creating timeless
          pieces that capture the essence of life's most precious moments, our
          artisans blend passion and expertise to bring dreams to life. Discover
          a world of elegance and sophistication at Timothy Patrick Jewelers,
          where every piece is a testament to the artistry and dedication that
          define our legacy.
        </p>
      </div>
      <div className="contact-right-form-container">
        <form className="contact-form">
          <div className="contact-form-input-container">
            <div className="input-container">
              <label>Name:</label>
              <input type="text" className="input-field" />
            </div>
            <div className="input-container">
              <label>Email Address:</label>
              <input type="text" className="input-field" />
            </div>
          </div>
          <div className="contact-form-input-container">
            <div className="input-container">
              <label>Phone:</label>
              <input type="text" className="input-field" />
            </div>
            <div className="input-container">
              <label>Interested In:</label>
              <select id="choice" className="input-field">
                <option value="">Wedding Rings</option>
                <option value="">Engagement Rings</option>
                <option value="">Jewelry</option>
                <option value="">Other</option>
              </select>
            </div>
          </div>
          <div className="contact-form-input-container">
            <div className="input-container area">
              <label>Message:</label>
              <textarea
                className="input-field"
                rows={5}
                cols={10}
                type="text"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <button className="contact-form-button">Contact Us</button>
        </form>
      </div>
    </div>
  );
}
