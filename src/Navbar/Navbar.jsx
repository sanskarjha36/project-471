import './Navbar.css';
import accountImg from '../assets/account.png'; // Import the account image

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="Searchbar">Search</div>
        {/* Add the account image */}
        <img src={accountImg} alt="Account" className="account-icon" />
      </div>
    </>
  );
};

export default Navbar;
