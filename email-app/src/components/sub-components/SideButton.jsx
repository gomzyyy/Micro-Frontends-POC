import React from "react";

function SideButton({ m, changeTab }) {
  return (
    <div className="side-button" onClick={() => changeTab(m.state)}>
      {m.name}
    </div>
  );
}

export default SideButton;
