import { useState } from "react";
import {useStore} from "store/Store"

function CreateEmail() {

  const {dispatch,mail}=useStore()

  const [email, setEmail] = useState({
    id: mail.outbox.length + 2,
    to: "",
    from: "",
    subject: "",
    content: "",
    isRead: true,
    labels: [],
    attachments: [],
    type: "sent",
    date: new Date().toLocaleDateString(),
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(createMail(email));
    // alert("Email Sent Successfully!");
    setEmail({ to: "", from: "", subject: "", content: "" });
  };

  return (
    <div className="email-compose-container">
      <h2 className="email-title">Compose Email</h2>
      <form onSubmit={handleSubmit} className="email-form">
        <label className="email-label">From:</label>
        <input
          type="email"
          name="from"
          value={email.from}
          onChange={handleChange}
          placeholder="Your Email"
          className="email-input"
          required
        />

        <label className="email-label">To:</label>
        <input
          type="email"
          name="to"
          value={email.to}
          onChange={handleChange}
          placeholder="Recipient Email"
          className="email-input"
          required
        />

        <label className="email-label">Subject:</label>
        <input
          type="text"
          name="subject"
          value={email.subject}
          onChange={handleChange}
          placeholder="Email Subject"
          className="email-input"
          required
        />

        <label className="email-label">Content:</label>
        <textarea
          name="content"
          value={email.content}
          onChange={handleChange}
          placeholder="Write your message..."
          className="email-textarea"
          required
        ></textarea>

        <button type="submit" className="email-submit">
          Send Email
        </button>
      </form>
    </div>
  );
}

export default CreateEmail;
