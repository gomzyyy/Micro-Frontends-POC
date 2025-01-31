import React from "react";
import { useStore } from "store/Store";

function Inbox() {
   const { mail } = useStore();
    const inboxMails = mail.inbox;
  return (
    <div className="email-container">
      <h2>Inbox</h2>
      <div className="inner-inbox-container">
        {inboxMails.map((email) => (
          <div key={email.id} className="email-item">
            <p>
              <strong>From:</strong> {email.from}
            </p>
            <p>
              <strong>Subject:</strong> {email.subject}
            </p>
            <p>{email.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inbox;
