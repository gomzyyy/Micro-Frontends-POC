import { useState } from "react";
import CreateEmail from "./sub-components/CreateEmail";
import Sidebar from "./sub-components/Sidebar";
import Draft from "./sub-components/Draft";
import Outbox from "./sub-components/Outbox";
import Inbox from "./sub-components/Inbox";
import AllMails from "./sub-components/AllMails";

function Main() {
  const [active, setActive] = useState("inbox");
  const handleActiveTab = (state) => setActive(state);
  return (
    <div className="flex gap-2">
      <Sidebar changeTab={handleActiveTab} />
      {active === "create" && <CreateEmail />}
      {active === "draft" && <Draft />}
      {active === "outbox" && <Outbox />}
      {active === "inbox" && <Inbox />}
      {active === "allmails" && <AllMails />}
    </div>
  );
}

export default Main;
