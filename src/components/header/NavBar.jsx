import React from "react";
import menuData from "../../data/Menu.json";
import MenuItem from "./MenuItem";

const NavBar = () => {
  return (
    <>
      <header className="flex items-center pl-4">
        <MenuItem itemData={menuData} />
      </header>
    </>
  );
};

export default NavBar;
