import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../AuthContext";

function NavBar() {
  const auth = useContext(AuthContext);

  return (
    <div className="item3">
      {!auth.user && (
        <div>
          <Link to="/register" className="btn">
            <i>Register</i>
          </Link>
          <Link to="/login" className="btn">
            <i>Login</i>
          </Link>
        </div>
      )}
      {auth.user && (
        <div className="flex-container button-flex">
          <Link to="/agents" className="btn">
            <i>All Agents</i>
          </Link>
          <Link to="/add" className="btn">
            <i>Add Agent</i>
          </Link>
          <Link to="/login" className="btn" onClick={() => auth.logout()}>
            <i>Logout</i>
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
