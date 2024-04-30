// TODO: 
// - Make the button navigate the user back to the home page

import { useNavigate } from "react-router-dom";

const handleClick = () => {
  const navigate = useNavigate();
  navigate(`/`);
  console.log(`take me to home`);
};

const GoHomeButton = () => {
  return (
    <button className="ui button fluid" onClick={handleClick}>
      Go Home
    </button>
  )
}

export default GoHomeButton;