
import { useNavigate } from "react-router-dom";
import './Forgot_Password.css'

const Forgot_Password = () => {
    const navigate = useNavigate();
  return (
    <>
    <div className='d3-1'>
        <div className='t3-1'>Forgot Password</div>
        <div className='d3-2'>
          <div className="d3-3">
            <div className='f1'>Enter Your Email Address</div>
            <button className='Button-1' onClick={() => navigate("/reset-password")}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forgot_Password