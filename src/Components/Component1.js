import Component2 from "./component2";
import "./components.css";


const user = "SAM"
const age = 20
const arr = [1,2,3]
const obj  = {
  name  : "ABC",
  age: 40
}


const Component1 = () => {
  return (
    <>
      <h3>
        The user name is {user}
      </h3>
      <h4>His age is {age}</h4>
      <h4>{arr}</h4>

      <div>
        {obj.name}
        {obj.age}
      </div>
    </>
  );
};

export default Component1;
