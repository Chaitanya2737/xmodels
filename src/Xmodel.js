import React, { useState } from 'react';

const XModal = () => {
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
      alert('Invalid Date of Birth. Please enter a valid date.');
      return;
    }
    // Submit logic here
    setUsername('');
    setEmail('');
    setDob('');
    setPhone('');
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} style={{ backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', borderRadius: '8px' }}>Open Form</button>
      {isOpen && (
        <div style={{ display: 'block', position: 'fixed', zIndex: '1', left: '0', top: '0', width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <div style={{ backgroundColor: '#fefefe', margin: '15% auto', padding: '20px', border: '1px solid #888', width: '80%' }}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{ marginBottom: '10px', width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ marginBottom: '10px', width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
              />

              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
                style={{ marginBottom: '10px', width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
              />

              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{ marginBottom: '10px', width: '100%', padding: '12px 20px', margin: '8px 0', display: 'inline-block', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }}
              />

              <button type="submit" style={{ backgroundColor: '#4CAF50', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer', borderRadius: '8px' }}>Submit</button>
            </form>
          </div>
          <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'transparent', zIndex: '-1' }} onClick={handleCloseModal}></div>
        </div>
      )}
    </div>
  );
};

export default XModal;
