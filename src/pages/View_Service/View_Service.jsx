import './View_Service.css';
import carpenterImg from '../../assets/s_img1.jpeg'; // Replace with actual image path

const View_Service = () => {
  return (
    <div className="service-container">
      {/* Left Side: Image and Buttons */}
      <div className="service-left">
        <div className="service-image">
          <img src={carpenterImg} alt="Carpenter Service" />
        </div>

        {/* Action Buttons BELOW the image */}
        <div className="service-buttons">
          <button className="btn-contact">Contact Us</button>
          <button className="btn-book">Book It</button>
        </div>
      </div>

      {/* Right Side: Details */}
      <div className="service-details">
        <div className="service-header">
          <h2>Carpenter Service</h2>
          <span className="service-location">Calgary, AB</span>
          <div className="service-price">$20/hr</div>
          <div className="service-rating">★ ★ ★ ★ ★</div>
        </div>

        {/* Service Info Box */}
        <div className="service-info">
          <h3>Need a Skilled Carpenter? <span>We've Got You Covered!</span></h3>
          <p>Whether you're building your dream home, updating your space, or need a quick repair, our expert carpenters are here to help!</p>
          <ul>
            <li>🔨 <strong>Custom Woodwork</strong> – Cabinets, shelving, and furniture made to your specifications.</li>
            <li>🏠 <strong>Home Repairs</strong> – Fix that door, window, or anything else around the house.</li>
            <li>🛠 <strong>Renovations & Remodels</strong> – From kitchens to basements, we'll bring your vision to life.</li>
            <li>🌳 <strong>Decks & Outdoor Projects</strong> – Enjoy your yard with a custom deck or patio!</li>
          </ul>
          <h4>Why Choose Us?</h4>
          <ul>
            <li>✅ Experienced, skilled craftsmen</li>
            <li>✅ Reliable, on-time service</li>
            <li>✅ Affordable pricing</li>
            <li>✅ Fully insured and guaranteed work</li>
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="reviews-container">
          <div className="reviews-head">
            <div className='vs-r1'>Reviews</div>
            <button className="btn-review">Add Review</button>
          </div>

          <div className="reviews-grid">
            <div className="review">
              <div className="review-header">
                <span className="review-name">John Smith</span>
                <span className="review-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className='vs-text'>Absolutely thrilled with the work! The carpenter was professional, efficient, and crafted beautiful custom shelves that perfectly fit our space—highly recommend!</p>
            </div>

            <div className="review">
              <div className="review-header">
                <span className="review-name">George W.</span>
                <span className="review-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className='vs-text'>Fantastic experience from start to finish! The craftsmanship was top-notch, and the project was completed on time and within budget.</p>
            </div>

            <div className="review">
              <div className="review-header">
                <span className="review-name">Mary J.</span>
                <span className="review-stars">⭐⭐⭐⭐⭐</span>
              </div>
              <p className='vs-text'>I couldn't be happier with the results! The carpenter brought my vision to life with precision and care, and the quality of work is outstanding.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default View_Service;
