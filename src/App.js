import logo from "./logo.svg";
import "./App.css";
import Component1 from "./Components/Component1";
import Component2 from "./Components/component2";
import StateComp from "./Components/StateComp";
import StateComp2 from "./Components/StateComp2";
import ObjComp from "./Components/ObjComp";
import PropsComp from "./Components/PropsComp";
import ChildComp1 from "./Components/ChildComp1";
import { createContext, useState } from "react";
import UseEffectComp from "./Components/UseEffectComp";

export const messageContext = createContext(null);
messageContext.displayName = "messageProvider";

function App() {

  const [mount, setMount] = useState(true)

  return (
    <div className="App">
      {/* <StateComp/> */}
      {/* <StateComp2/> */}
      {/* <ObjComp/> */}
      {/* <PropsComp
        username={username}
        userage={40}
        isActive={true}
        arr={[1, 2, 3]}
        obj={{
          name:"user2",
          address: {
            city: "delhi"
          }
        }}
        printSomething={printSomething}
      /> */}

      {/* <messageContext.Provider
        value={{
          str: "Message from App.js"
        }}
      >
        <PropsComp />
      </messageContext.Provider> */}
      {mount && <UseEffectComp/>}
      <div>
        <button onClick={() => setMount(!mount)}>Mount/Unmount</button>
      </div>
    </div>
  );
}

export default App;
