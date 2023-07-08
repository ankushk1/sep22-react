import React from "react";
import { useTheme } from "../utils/CustomHooks";

const ThemeComp = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <div className="fs-5">
      {theme ? (
        <button onClick={() => changeTheme(document)}>Light Mode</button>
      ) : (
        <button onClick={() => changeTheme(document)}>Dark Mode</button>
      )}
      <div
        className=""
        // style={
        //   theme === "dark"
        //     ? {
        //         backgroundColor: "black",
        //         color: "white"
        //       }
        //     : null
        // }
        // className={
        //   `${theme === "dark" ? "bg-dark text-light" : ""} fs-3`}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
        doloremque autem, molestias impedit reiciendis animi eligendi explicabo
        commodi et laboriosam amet sint recusandae aperiam exercitationem
        numquam totam qui fuga sunt id inventore at. Labore, voluptates ullam
        sed quis ex possimus tempora doloremque hic, nobis placeat voluptate
        expedita. Obcaecati, porro maiores!
      </div>
    </div>
  );
};

export default ThemeComp;
