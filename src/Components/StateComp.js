import React, { useState } from "react";

const StateComp = () => {
  // let index = 0;

  const [index, setIndex] = useState(1);
  // const [num, setNum] = useState(5)

  function increase() {
    // setIndex(index + 1);
    // setIndex((prevState) => prevState + 1); // 1
    // setIndex((prevState) => prevState + 1); // 2
    index += 1;
  }

  // const increaseNum = (incrementer) => {
  //   setNum(num + incrementer)
  // }

  return (
    <div>
      {index} <br />
      {/* <div>
        {num}
      </div> */}
      <button onClick={increase}>Increase</button>
      <div>
        {/* <button onClick={() => increaseNum(5)}>Increase Num</button> */}
      </div>
    </div>
  );
};

export default StateComp;
