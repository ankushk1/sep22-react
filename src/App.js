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
import ApiComp from "./Components/ApiComp";
import FormComp from "./Components/FormComp";
import Signin from "./Components/Signin";
import ApiComp2 from "./Components/ApiComp2";
import ThemeComp from "./Components/ThemeComp";
import TodoApp from "./Components/TodoApp";
import UseMemoHook from "./Components/UseMemoHook";
import UseCallbackHook from "./Components/UseCallbackHook";

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
      {/* {mount && <UseEffectComp/>}
      <div>
        <button onClick={() => setMount(!mount)}>Mount/Unmount</button>
      </div> */}
      {/* <ApiComp/> */}
      {/* <ApiComp2/> */}
      {/* <FormComp className="mb-5"/>

      <Signin className="mt-5"/> */}
      {/* <ThemeComp/> */}

      {/* <TodoApp/> */}
      {/* <UseMemoHook/> */}
      <UseCallbackHook/>
    </div>
  );
}

export default App;
