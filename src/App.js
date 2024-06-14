import React, { useState } from 'react';
import"./App.css"
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');

  const handleOpenModal = () => setIsOpen(true);

  const handleCloseModal = () => setIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !dob || !phone) {
      alert('Please fill out all fields');
      return;
    }
    if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
      return;
    }
    if (phone.length !== 10 || isNaN(phone)) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }
    const today = new Date();
    if (new Date(dob) > today) {
      alert('Invalid date of birth. Please enter a valid date.');
      return;
    }
    // Reset form fields after submission
    setUsername('');
    setEmail('');
    setDob('');
    setPhone('');
    setIsOpen(false);
  };

  return (
    <div style={{textAlign:"center"}}>
      <h1>User Details Modal</h1>
      <button onClick={handleOpenModal} className="open-button">Open Form</button>
      {isOpen && (
        <div className="modal"  style={{textAlign:"start"}}>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <label htmlFor="username" className="modal-label">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="modal-input"
              />

              <label htmlFor="email" className="modal-label">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="modal-input"
              />

              <label htmlFor="dob" className="modal-label">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                className="modal-input"
              />

              <label htmlFor="phone" className="modal-label">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="modal-input"
              />

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
          <div className="modal-background" onClick={handleCloseModal}></div>
        </div>
      )}
    </div>
  );
};

export default App;
