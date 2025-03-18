import { useNavigate } from "react-router-dom";
import './SFooter.css'

export const SFooter = () => {
  const navigate = useNavigate(); // Hook for navigation
  return (
    <>
    <div className="row1"> {/* Apply row1 styling */}
      <button className='suggest'>Suggested Services</button>
      <button className='provider' onClick={() => navigate("/become_service_provider")}>Become A Service Provider</button>
    </div>
    </>
  );
}

export default SFooter;