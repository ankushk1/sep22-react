import React, { useState } from "react";
import { Input } from "reactstrap";
import { useFormHook } from "../utils/CustomHooks";

const FormComp = () => {
  // const [userInfo, setUserInfo] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   password: "",
  //   isActive: "",
  //   selectVal: null
  // });

  // const handleInputChange = (event, type = null) => {
  //   if (type === "checkbox") {
  //     setUserInfo({ ...userInfo, [event.target.name]: event.target.checked });
  //   } else {
  //     setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  //   }
  // };

  const {inputVal, handleInputChange} = useFormHook();

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
        <div>
          <input
            type="checkbox"
            id="cb-1"
            className="me-2"
            checked={inputVal.isActive}
            name="isActive"
            onChange={(e) =>
              // setUserInfo({ ...inputVal, isActive: e.target.checked })
              handleInputChange(e, "checkbox")
            }
          />
          <label htmlFor="cb-1">Is Active</label>
        </div>

        <select
          name="selectVal"
          className="w-50 form-control my-2"
          value={inputVal.selectVal}
          onChange={(event) => handleInputChange(event)}
        >
          <option value="" hidden>Select One</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </form>
    </div>
  );
};

export default FormComp;
