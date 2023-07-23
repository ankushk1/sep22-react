import React, { useEffect, useState, useCallback } from "react";

const set = new Set();

const UseCallbackHook = () => {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(5);

  const incrementNum = () => {
    setNum(num + 1);
  };

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  set.add(incrementCount);
  console.log(set)
  useEffect(() => {
    console.log("useEffect Called");
  }, [incrementCount]);

  return (
    <div>
      <h3>Number - {num}</h3>
      <h3>Count - {count}</h3>

      <div>
        <button className="mt-4 btn btn-light" onClick={incrementNum}>
          Increment Num
        </button>
      </div>
      <div>
        <button className="my-2 btn btn-light" onClick={incrementCount}>
          Increment Count
        </button>
      </div>
    </div>
  );
};

export default UseCallbackHook;
