// TODO: 
// - Make the button navigate the user back to the home page

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import BotPage from '../pages/BotsPage'

const GoHomeButton = () => {
  return (
    <Link to='/'>
      <button className="ui button fluid">
          Go Home
      </button>
    </Link>
  )
}

export default GoHomeButton;