import React, { useMemo, useState } from "react";

const multiple = (num) => {
  console.log("function called");
  for (var i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const UseMemoHook = () => {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(5);

  // const result =  multiple(num);
  const result = useMemo(() => {
    return multiple(num);
  }, [num]);

  return (
    <div>
      UseMemoHook
      <div>
        <button className="mt-4 btn btn-light" onClick={() => setNum(num + 1)}>
          Increment Num
        </button>
      </div>
      <div>
        <button
          className="my-2 btn btn-light"
          onClick={() => setCount(count + 1)}
        >
          Increment Count
        </button>
      </div>
      <h3>Count - {count}</h3>
      <h3>
        {num} x 2 = {result}
      </h3>
    </div>
  );
};

export default UseMemoHook;
