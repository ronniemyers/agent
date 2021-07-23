import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthContext";

function Header() {
  const auth = useContext(AuthContext);
  
  return (
    <div>
      <div className="flex-container">
        <Link to="/">home</Link>
      </div>
      <p className="text-center username">{auth.user ? "[" + auth.user.username + "]" : 
      ""}</p>
    </div>
  );
}

export default Header;
