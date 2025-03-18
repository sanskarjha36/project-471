import { useNavigate } from "react-router-dom";
import './Sign_In.css';

const Sign_In = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <>
      <div className='d3-1'>
        <div className='t3-1'>Sign In</div>
        <div className='d3-2'>
          <div className="d3-3">
            <div className='f1'>Enter Your Email Address</div>
            <div className='f2'>Enter Your Password</div>
            <button className='Button-1' onClick={() => navigate("/")}>
              Log In
            </button>
            <button className='Button-2' onClick={() => navigate("/forgot-password")}>
              Forgot Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign_In;
