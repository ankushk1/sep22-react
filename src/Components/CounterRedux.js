import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "../Redux/CounterSlice";
const CounterRedux = () => {
  // const [count, setCount] = useState(1);

  const globalCount = useSelector(selectCount);

  const dispatch = useDispatch();

  const onIncrement = () => {
    // setCount(count + 1);
    dispatch(increment(3));
  };

  const onDecrement = () => {
    // setCount(count - 1);
    dispatch(decrement());
  };

  return (
    <div>
      CounterRedux
      <h1>{globalCount}</h1>
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterRedux;
