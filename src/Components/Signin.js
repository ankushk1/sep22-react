import React from "react";
import { useFormHook } from "../utils/CustomHooks";

const Signin = () => {

  const {inputVal,  handleInputChange} = useFormHook();

  return (
    <div>

      <h2 className="mt-5">Signin</h2>
      <form action="" className=" d-flex align-items-center flex-column">
        <input
          type="email"
          className="w-50 form-control my-2"
          placeholder="Email"
          value={inputVal.email}
          name="email"
          onChange={(event) => handleInputChange(event)}
        />
        <input
          type="password"
          className="w-50 form-control my-2"
          placeholder="Password"
          value={inputVal.password}
          name="password"
          onChange={(event) => handleInputChange(event)}
        />
      </form>
    </div>
  );
};

export default Signin;
