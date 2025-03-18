import './Header.css';
import { FaHome, FaMapMarkerAlt, FaTruck, FaUtensils } from 'react-icons/fa'; // Importing Icons

const Header = () => {
  return (
    <>
      <div className='Header'>
        <div className='HD1'>The GiGa Store of Services</div>
      </div>

      <div className='card-container-1'>
        <div className='card-1 c1'>
          <FaHome className="icon" /> Home Services
        </div>
        <div className='card-1 c2'>
          <FaMapMarkerAlt className="icon" /> Services Near Me
        </div>
        <div className='card-1 c3'>
          <FaTruck className="icon" /> Towing Services
        </div>
        <div className='card-1 c4'>
          <FaUtensils className="icon" /> Kitchen Services
        </div>
      </div>

      <div className='Lists'>
        <div className='search'>Search</div>
      </div>
    </>
  );
}

export default Header;