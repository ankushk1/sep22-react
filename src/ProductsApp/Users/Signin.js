import React from "react";
import { useFormHook } from "../../utils/CustomHooks";
import { signIn } from "../../utils/ApiUtils";
import { errorToast, successToast } from "../../utils/NotidicationUtils";

const Signin = () => {
  const { inputVal, handleInputChange } = useFormHook();

  const onSignInHandler = async () => {
    const apiResponse = await signIn(inputVal);
    if (apiResponse.status === 200) {
      successToast(apiResponse.data.message);
      localStorage.setItem("token", apiResponse.data.token)
    } else {
      errorToast(apiResponse.data.message);
    }
  };

  return (
    <div>
      <h2 className="mb-3"> Signin Form</h2>

      <form className=" d-flex align-items-center flex-column">
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

      <div>
        <button className="btn btn-info mt-2" onClick={onSignInHandler}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Signin;
