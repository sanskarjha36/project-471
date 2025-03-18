import { useNavigate } from "react-router-dom";
import './Sign_Up.css'
const Sign_Up = () => {
    const navigate = useNavigate(); // Hook for navigation

    return (
      <>
        <div className='d3-1'>
          <div className='t3-1'>Create Account</div>
          <div className='d3-2'>
            <div className="d3-3">
              <div className='Sf1'>Enter Your Email Address</div>
              <div className='Sf2'>Enter Your Password</div>
              <div className='Sf3'>Confirm Your Password</div>
              <button className='SButton-1' onClick={() => navigate("/")}>
                Create Account
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Sign_Up;