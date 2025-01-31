import React from "react";
import { useStore } from "store/Store";

function AllMails() {
  const { mail } = useStore();
  const allMails = mail.allMails;
  console.log(mail)

  return (
    <div className="email-container">
      <h2>All Mails</h2>
      {allMails?.map((email) => (
        <div key={email.id} className="email-item">
          <p>
            <strong>From:</strong> {email.from}
          </p>
          <p>
            <strong>To:</strong> {email.to}
          </p>
          <p>
            <strong>Subject:</strong> {email.subject}
          </p>
          <p>
            <strong>Date:</strong> {new Date(email.date).toLocaleString()}
          </p>
          <p>{email.content}</p>
          {email.attachments.length > 0 && (
            <p>
              <strong>Attachments:</strong> {email.attachments.join(", ")}
            </p>
          )}
          {email.labels.length > 0 && (
            <p>
              <strong>Labels:</strong> {email.labels.join(", ")}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default AllMails;
