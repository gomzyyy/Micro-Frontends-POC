import React, { useState } from "react";
import SideButton from "./SideButton";

const sideButtons = [
  { name: "Inbox", state: "inbox" },
  { name: "Outbox", state: "outbox" },
  { name: "Draft", state: "draft" },
  { name: "All Mails", state: "allmails" },
  { name: "Create", state: "create" },
];

function Sidebar({changeTab}) {

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Sidebar</h2>
      <div className="sidebar-buttons">
        {sideButtons.map((m, i) => (
          <SideButton key={i} m={m} changeTab={changeTab} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
