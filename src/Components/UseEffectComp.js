import React, { useEffect, useState } from "react";

const UseEffectComp = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  // (() => {
  //   console.log("This line gets executed in useEffect");
  // })()

  useEffect(() => {
    console.log("This line gets executed in useEffect 1");
  }, [count]);

  useEffect(() => {
    console.log("This line gets executed in useEffect 2");
  }, [count2]);

  useEffect(() => {
    console.log('UseEffect 3 executes')
    return () => {
      console.log("Unmount Called");
    };
  }, []);

  return (
    <div>
      {console.log("render")}
      <h3>
        Component Rendered {count} {count == 1 ? "time" : "times"}
      </h3>

      <div>
        <button onClick={() => setCount(count + 1)}>Re-render</button>
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>Count 2</button>
      </div>
    </div>
  );
};

export default UseEffectComp;
