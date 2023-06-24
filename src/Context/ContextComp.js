import React, { useContext } from "react";
import { messageContext } from "../App";

const ContextComp = () => {

  const message = useContext(messageContext)
  console.log(message)
  return (
    <div>
      ContextComp
      {/* <messageContext.Consumer>
        {(value) => <h2>{value}</h2>}
      </messageContext.Consumer> */}
      <h2>{message.str}</h2>
    </div>
  );
};

export default ContextComp;
