import React, { useState } from "react";

const ObjComp = () => {
  // const [userData, setUserData] = useState({
  //   firstName: "Jon",
  //   lastName: "Doe"
  // });

  // const changeFirstName = () => {
  //   setUserData({ ...userData, firstName: "SAM" });
  // };

  // const changeLastName = () => {
  //   setUserData({ ...userData, lastName: "XYZ" });
  // };

  const [userArr, setUserArr] = useState([
    {
      id: Math.floor(Math.random() * 10),
      age: Math.floor(Math.random() * 100)
    }
  ]);

  const addNewUser = () => {
    // const cloneArr = [...userArr];
    // cloneArr.push({
    //   id: Math.floor(Math.random() * 10),
    //   age: Math.floor(Math.random() * 100)
    // });
    setUserArr([
      ...userArr,
      {
        id: Math.floor(Math.random() * 10),
        age: Math.floor(Math.random() * 100)
      }
    ]);
  };

  console.log(userArr);
  return (
    <div>
      <div>
        <button onClick={addNewUser}>Change </button>
      </div>
    </div>
  );
};

export default ObjComp;
