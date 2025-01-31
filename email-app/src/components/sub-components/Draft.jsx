import React from "react";
import { useStore } from "store/Store";

function Drafts() {
  const { mail } = useStore();
  const draftMails = mail.draft;

  return (
    <div className="email-container">
      <h2>Drafts</h2>
      {draftMails?.map((email) => (
        <div key={email.id} className="email-item">
          <p>
            <strong>To:</strong> {email.to}
          </p>
          <p>
            <strong>Subject:</strong> {email.subject}
          </p>
          <p>{email.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Drafts;
