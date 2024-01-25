import { useEffect, useState } from 'react';
import Notification from '../ui/notification';
import classes from './contact-form.module.css';

async function sendContact(contact) {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contact),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong');
  }

  return data;
}

function  ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus == 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3_000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContact({ email, name, message });

      setRequestStatus('success');
      setEmail('');
      setName('');
      setMessage('');
    } catch(error) {
      setRequestError(error.message);
      setRequestStatus('error');
    }
  };

  let notification;
  switch(requestStatus) {
    case 'pending':
      notification = {
        status: requestStatus,
        title: 'Sending message...',
        message: 'Your message is on its way!',
      };
      break;
    case 'success':
      notification = {
        status: requestStatus,
        title: 'Success!',
        message: 'Your message sent successfully!',
      };
      break;
    case 'error':
      notification = {
        status: requestStatus,
        title: 'Error',
        message: requestError,
      };
      break;
    default:
      notification = null;
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
        />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;