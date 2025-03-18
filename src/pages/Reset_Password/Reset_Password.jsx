import { useNavigate } from "react-router-dom";

const Reset_Password = () => {
    const navigate = useNavigate();
    return (
      <>
      <div className='d3-1'>
          <div className='t3-1'>Reset Password</div>
          <div className='d3-2'>
            <div className="d3-3">
              <div className='f1'>Create A New Password</div>
              <button className='Button-1' onClick={() => navigate("/sign-in")}>
                Save & Proceed
              </button>
            </div>
          </div>
        </div>
      </>
    )
}

export default Reset_Password