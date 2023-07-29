import React from "react";
import { useFormHook } from "../../utils/CustomHooks";
import { signUp } from "../../utils/ApiUtils";
import { errorToast, successToast } from "../../utils/NotidicationUtils";
import { Link } from "react-router-dom";
const SignUp = () => {
  const { inputVal, handleInputChange } = useFormHook();

  const onSignUpHandler = async () => {
    const apiResponse = await signUp(inputVal);
    if (apiResponse.status === 200) {
      successToast(apiResponse.data.message);
    } else {
      errorToast(apiResponse.data.message);
    }
  };

  return (
    <div>
      <h2 className="mb-3"> Signup Form</h2>

      <form className=" d-flex align-items-center flex-column">
        <input
          type="text"
          className="w-50 form-control my-2"
          placeholder="First name"
          value={inputVal.firstName}
          name="firstName"
          onChange={(event) => handleInputChange(event)}
        />
        <input
          type="text"
          className="w-50 form-control my-2"
          placeholder="Last name"
          value={inputVal.lastName}
          name="lastName"
          onChange={(event) => handleInputChange(event)}
        />
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
        <button className="btn btn-primary mt-2" onClick={onSignUpHandler}>
          Sign up
        </button>
      </div>
      <div className="mt-4">
        Already SignedUp? <Link to="/signin">Signin</Link> here.
      </div>
    </div>
  );
};

export default SignUp;
