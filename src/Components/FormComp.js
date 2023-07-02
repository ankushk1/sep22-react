import React, { useState } from "react";
import { Input } from "reactstrap";

const FormComp = () => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isActive: ""
  });

  const handleInputChange = (event, type = null) => {
    if (type === "checkbox") {
      setUserInfo({ ...userInfo, [event.target.name]: event.target.checked });
    } else {
      setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
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
          value={userInfo.firstName}
          name="firstName"
          onChange={(event) => handleInputChange(event)}
        />
        <input
          type="text"
          className="w-50 form-control my-2"
          placeholder="Last name"
          value={userInfo.lastName}
          name="lastName"
          onChange={(event) => handleInputChange(event)}
        />
        <input
          type="email"
          className="w-50 form-control my-2"
          placeholder="Email"
          value={userInfo.email}
          name="email"
          onChange={(event) => handleInputChange(event)}
        />
        <input
          type="password"
          className="w-50 form-control my-2"
          placeholder="Password"
          value={userInfo.password}
          name="password"
          onChange={(event) =>
            setUserInfo({ ...userInfo, password: event.target.value })
          }
        />
        <div>
          <input
            type="checkbox"
            id="cb-1"
            className="me-2"
            checked={userInfo.isActive}
            name="isActive"
            onChange={(e) =>
              // setUserInfo({ ...userInfo, isActive: e.target.checked })
              handleInputChange(e, "checkbox")
            }
          />
          <label htmlFor="cb-1">Is Active</label>
        </div>
      </form>
    </div>
  );
};

export default FormComp;
