import React, { useState } from "react";
import { Navigate , useNavigate} from "react-router-dom";
const Home = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const redirectFn = () => {

    // We validate the inputs
    // we hit api to check creds
    // get response

    navigate('/contact?id=20&name=user1' , {
      state: "Message from Home.js",
      // replace: true
    })
  }

  return (
    <div>
      Home
      {/* {redirect && <Navigate to={"/about"} />} */}

      <button onClick={() => redirectFn()}>Redirect</button>
    </div>
  );
};

export default Home;
