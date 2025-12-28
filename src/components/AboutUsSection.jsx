import "./AboutUsSection.css";
import AboutUsImage from '../assets/image2.jpeg';

export default function AboutUsSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Heading */}
        <div className="about-heading">
          <h2>RAJWADI CHA NI JAMAVAT ☕</h2>
          <div className="about-underline"></div>
        </div>

        {/* Layout */}
        <div className="about-grid">

          {/* Left Content */}
          <div className="about-left">
            <h3>Experience the Royal Essence of Rajwadi Cha Ni Jamavat</h3>

            <p>
              Rajwadi Cha Ni Jamavat is a premium Indian tea brand celebrated for its rich aroma, authentic flavor, and time-honored tea-making traditions. Rooted in Indian culture and crafted with passion, our chai represents warmth, hospitality, and the true essence of desi tea.
            </p>

            <p>
              What began as a family-driven passion for serving great chai has grown into a trusted name among tea lovers. With each outlet, we continue to spread the joy of authentic Rajwadi-style chai, offering a place where people connect, relax, and enjoy memorable moments over a cup of tea.
            </p>

            <p>
              We are committed to delivering exceptional quality tea prepared in a clean, hygienic environment while maintaining a consistent taste that our customers love. Every cup of Rajwadi Cha Ni Jamavat is brewed using carefully selected tea leaves and natural Indian spices, creating a perfect balance of strength, flavor, and freshness.
            </p>

            <div className="about-block">
              <h4>Contact</h4>
              <p>Ravi Sathvara</p>
              <a href="tel:+917226880794">📞 +91 72268 80794</a>
              <p>
                📧{" "}
                <a href="mailto:Rajwadichanijamavat@gmail.com">
                  Rajwadichanijamavat@gmail.com
                </a>
              </p>
            </div>

            <div className="about-tags">
              {[
                "#RajwadiCha",
                "#ChaNiJamavat",
                "#RajwadiChaNiJamavat",
                "#OriginalRajwadiTaste",
                "#Franchise",
              ].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            {/* Features */}
            <div className="about-features">
              <div className="feature-card">
                👥
                <p>Expert Team training</p>
              </div>
              <div className="feature-card">
                💼
                <p>Franchise running 21+ cities</p>
              </div>
               <div className="feature-card">
                ☕️
                <p>Taste ++</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="about-right">
            <img
              src={AboutUsImage}
              alt="Manufacturing facility"
            />

            <div className="outlet-badge">
              <p className="years">30+</p>
              <p>Outlets</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
