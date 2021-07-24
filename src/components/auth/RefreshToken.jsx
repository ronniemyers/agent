import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../AuthContext";
import jwt_decode from "jwt-decode";

function RefreshToken({payload}) {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const tokenObj = jwt_decode(auth.user.token);

  let currentDate = new Date();
  if (tokenObj.exp * 1000 < currentDate.getTime()) {
    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    fetch(`http://localhost:5000/refresh_token`, init)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 403) {
          return null;
        }
        return Promise.reject(`Something unexpected went wrong`);
      })
      .then((data) => {
        if (data) {
          auth.login(data.jwt_token);
        } else {
          history.push("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("token refreshed");
  }
  return <></>;
}

export default RefreshToken;
