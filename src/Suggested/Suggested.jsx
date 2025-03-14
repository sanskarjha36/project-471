import './Suggested.css';
import { useNavigate } from 'react-router-dom';
import pic1 from '../assets/s_img1.jpeg';
import pic2 from '../assets/s_img2.jpeg';
import pic3 from '../assets/s_img3.jpeg';
import pic4 from '../assets/s_img4.jpeg';
import pic5 from '../assets/s_img5.jpeg';
import pic6 from '../assets/s_img6.jpeg';
import pic7 from '../assets/s_img7.jpeg';
import pic8 from '../assets/s_img8.jpeg';
import pic9 from '../assets/s_img2.jpeg';

export const Suggested = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/view-service');
  };

  return (
    <>
      <div className='card-container'>
        {/* Card 1 with Image 1 */}
        <div className='card card1' onClick={handleCardClick}>
          <img src={pic1} alt="Card 1" className="pic pic1" />
          <div className='Title t1'>Home Cleaning Service</div>
          <div className='row'>
            <div className='Location l1'>Calgary, AB</div>
            <div className='Price p1'>$25/hr</div>
          </div>
          <div className='Description d1'>
            Our professional home cleaning service ensures a spotless, fresh, and healthy living space with trained cleaners, eco-friendly products, and flexible scheduling. From deep cleaning to regular maintenance, we customize our services to meet your needs. Whether it's a one-time clean or recurring service, we guarantee high-quality results, reliability, and customer satisfaction.
          </div>
        </div>

        {/* Card 2 with Image 2 */}
        <div className='card card2' onClick={handleCardClick}>
          <img src={pic2} alt="Card 2" className="pic pic2" />
          <div className='Title t2'>John Wood Works</div>
          <div className='row'>
            <div className='Location l2'>Calgary, AB</div>
            <div className='Price p2'>$43/hr</div>
          </div>
          <div className='Description d2'>
            At John Wood Works, we specialize in high-quality woodworking and custom carpentry that brings craftsmanship and durability to every project. From custom furniture and cabinetry to home renovations and fine wood detailing, our skilled artisans turn wood into timeless, handcrafted pieces.
            <br /><br />
            Whether you need bespoke designs, restorations, or professional woodwork solutions, we ensure precision, creativity, and premium materials in every creation. Choose John Wood Works for craftsmanship that lasts a lifetime.
            <br /><br />
            🔨 Custom. Quality. Crafted. 🌿
          </div>
        </div>

        {/* Card 3 (Can be customized later) */}
        <div className='card card3' onClick={handleCardClick}>
          <img src={pic3} alt="Card 3" className="pic pic3" />
          <div className='Title t3'>Local Towing Services</div>
          <div className='row'>
            <div className='Location l3'>Calgary, AB</div>
            <div className='Price p3'>$120/hr</div>
          </div>
          <div className='Description d3'>
            Local Towing Services provides 24/7 emergency towing, roadside assistance, and vehicle recovery to get you back on the road quickly and safely. Whether you’re dealing with a breakdown, accident, flat tire, dead battery, or lockout, our professional team is just a call away.
            <br /><br />
            With fast response times, affordable rates, and skilled operators, we ensure your vehicle is handled with care. No matter where you are, trust Local Towing Services for safe, efficient, and hassle-free towing solutions.
            <br /><br />
            🚗 Stranded? Call us – We’ll Tow You Home! 🚨
          </div>
        </div>

        {/* Card 4 */}
        <div className='card card4' onClick={handleCardClick}>
          <img src={pic4} alt="Card 4" className="pic pic4" />
          <div className='Title t4'>Home Cleaning Service</div>
          <div className='row'>
            <div className='Location l4'>Calgary, AB</div>
            <div className='Price p4'>$25/hr</div>
          </div>
          <div className='Description d4'>
            Our professional home cleaning service ensures a spotless, fresh, and healthy living space with trained cleaners, eco-friendly products, and flexible scheduling. From deep cleaning to regular maintenance, we customize our services to meet your needs. Whether it's a one-time clean or recurring service, we guarantee high-quality results, reliability, and customer satisfaction.
          </div>
        </div>

        {/* Card 5 */}
        <div className='card card5' onClick={handleCardClick}>
          <img src={pic5} alt="Card 5" className="pic pic5" />
          <div className='Title t5'>John Wood Works</div>
          <div className='row'>
            <div className='Location l5'>Calgary, AB</div>
            <div className='Price p5'>$43/hr</div>
          </div>
          <div className='Description d5'>
            At John Wood Works, we specialize in high-quality woodworking and custom carpentry that brings craftsmanship and durability to every project. From custom furniture and cabinetry to home renovations and fine wood detailing, our skilled artisans turn wood into timeless, handcrafted pieces.
            <br /><br />
            Whether you need bespoke designs, restorations, or professional woodwork solutions, we ensure precision, creativity, and premium materials in every creation. Choose John Wood Works for craftsmanship that lasts a lifetime.
            <br /><br />
            🔨 Custom. Quality. Crafted. 🌿
          </div>
        </div>

        {/* Card 6 */}
        <div className='card card6' onClick={handleCardClick}>
          <img src={pic6} alt="Card 6" className="pic pic6" />
          <div className='Title t6'>Local Towing Services</div>
          <div className='row'>
            <div className='Location l6'>Calgary, AB</div>
            <div className='Price p6'>$120/hr</div>
          </div>
          <div className='Description d6'>
            Local Towing Services provides 24/7 emergency towing, roadside assistance, and vehicle recovery to get you back on the road quickly and safely. Whether you’re dealing with a breakdown, accident, flat tire, dead battery, or lockout, our professional team is just a call away.
            <br /><br />
            With fast response times, affordable rates, and skilled operators, we ensure your vehicle is handled with care. No matter where you are, trust Local Towing Services for safe, efficient, and hassle-free towing solutions.
            <br /><br />
            🚗 Stranded? Call us – We’ll Tow You Home! 🚨
          </div>
        </div>

        {/* Card 7 */}
        <div className='card card7' onClick={handleCardClick}>
          <img src={pic7} alt="Card 7" className="pic pic7" />
          <div className='Title t7'>Home Cleaning Service</div>
          <div className='row'>
            <div className='Location l7'>Calgary, AB</div>
            <div className='Price p7'>$25/hr</div>
          </div>
          <div className='Description d7'>
            Our professional home cleaning service ensures a spotless, fresh, and healthy living space with trained cleaners, eco-friendly products, and flexible scheduling. From deep cleaning to regular maintenance, we customize our services to meet your needs. Whether it's a one-time clean or recurring service, we guarantee high-quality results, reliability, and customer satisfaction.
          </div>
        </div>

        {/* Card 8 */}
        <div className='card card8' onClick={handleCardClick}>
          <img src={pic8} alt="Card 8" className="pic pic8" />
          <div className='Title t8'>John Wood Works</div>
          <div className='row'>
            <div className='Location l8'>Calgary, AB</div>
            <div className='Price p8'>$43/hr</div>
          </div>
          <div className='Description d8'>
            At John Wood Works, we specialize in high-quality woodworking and custom carpentry that brings craftsmanship and durability to every project. From custom furniture and cabinetry to home renovations and fine wood detailing, our skilled artisans turn wood into timeless, handcrafted pieces.
            <br /><br />
            Whether you need bespoke designs, restorations, or professional woodwork solutions, we ensure precision, creativity, and premium materials in every creation. Choose John Wood Works for craftsmanship that lasts a lifetime.
            <br /><br />
            🔨 Custom. Quality. Crafted. 🌿
          </div>
        </div>

        {/* Card 9 */}
        <div className='card card9' onClick={handleCardClick}>
          <img src={pic9} alt="Card 9" className="pic pic9" />
          <div className='Title t9'>Local Towing Services</div>
          <div className='row'>
            <div className='Location l9'>Calgary, AB</div>
            <div className='Price p9'>$120/hr</div>
          </div>
          <div className='Description d9'>
            Local Towing Services provides 24/7 emergency towing, roadside assistance, and vehicle recovery to get you back on the road quickly and safely. Whether you’re dealing with a breakdown, accident, flat tire, dead battery, or lockout, our professional team is just a call away.
            <br /><br />
            With fast response times, affordable rates, and skilled operators, we ensure your vehicle is handled with care. No matter where you are, trust Local Towing Services for safe, efficient, and hassle-free towing solutions.
            <br /><br />
            🚗 Stranded? Call us – We’ll Tow You Home! 🚨
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggested;
