import React, { useState } from "react";

const StateComp2 = () => {
  // const [arr, setArr] = useState([1, 2, 3]);

  // const changeArr = () => {
  //   // Creating the copy of the array
  //   const copyArr = [...arr];
  //   // Updatting the copy
  //   copyArr[2] = 40;

  //   // Updating the state
  //   setArr(copyArr);
  // };

  const [obj, setObj] = useState({
    name: "ABC",
    age: 20,
    address: {
      houseNum: 30,
      city: "delhi",
      hobbies: {
        name: "Cricket"
      }
    }
  });

  const change = () => {
    // const cloneObj = { ...obj , name: "XYZ" };
    // setObj(cloneObj);
    // setObj(
    //   prevState => ({...prevState,
    //   address: {...prevState.address, city: "Mumbai"}
    // }));

    const cloneObj = {
      ...obj,
      address: {
        ...obj.address,
        houseNum: 40,
        city: "Mumbai",
        hobbies: { name: "Football" }
      }
    };
    // const cloneObj = { ...obj};
    // cloneObj.address.city = "Mumbai"
    // cloneObj.address.houseNum = 40
    // cloneObj.address.hobbies.name = "Football"
    setObj(cloneObj);
  };

  return (
    <div>
      StateComp2
      <div>{obj.name}</div>
      <div>{obj.age}</div>
      <div>{obj.address.city}</div>
      <div>
        <button onClick={() => change()}>Change</button>
      </div>
    </div>
  );
};

export default StateComp2;
