import MenuList from "./MenuList";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import "./Menu.css";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  //It’s actually an object where each key is a label (string) representing a menu item, and each value is a boolean (true or false).
  // {
  //   "home": true,  // Children of "Menu1" are visible
  //   "profile": false, // Children of "Menu2" are hidden
  //   "settings": true   // Children of "Menu3" are visible
  // }

  function handleToggle(getCurrentlabel) {
    setDisplayCurrentChildren((prevState) => {
      var newState = { ...prevState };

      if (newState[getCurrentlabel]) {
        newState[getCurrentlabel] = false; //checking if the label is already there then it means we have to close this
      } else {
        newState[getCurrentlabel] = true; // if the label is not there then set to true to display its childeren
      }
      console.log(newState);
      return newState;
    });
  }
  return (
    <li className="menu-item">
      <div style={{ display: "flex", gap: "10px" }}>
        <p>{item.label}</p>
        {/* // passing the label name */}
        {item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggle(item.label)}>
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#000" size={25} />
            ) : (
              <FaPlus color="#000" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <div>
          <MenuList list={item.children} />
        </div>
      ) : null}
    </li>
  );
}
