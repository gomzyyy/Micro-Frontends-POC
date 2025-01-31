import React from "react";
import { useStore } from "store/Store";

const outboxEmails = [
  {
    id: 1,
    to: "mike@example.com",
    subject: "Task Assigned",
    content: "Please complete the task by tomorrow.",
  },
  {
    id: 2,
    to: "sara@example.com",
    subject: "Feedback Request",
    content: "Kindly provide feedback on my report.",
  },
];

function Outbox() {
  const { mail } = useStore();
  const outboxMails = mail.outbox;

  return (
    <div className="email-container">
      <h2>Outbox</h2>
      {outboxMails?.map((email) => (
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

export default Outbox;
