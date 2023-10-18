import React, { useState } from 'react';
import './index.css'; 
import wallpaper from '../../assets/image/wallpaper.jpg'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    // You can also send the form data to a server or API
  };

  return (
    <div className='bg' style={{ backgroundImage: `url(${wallpaper})`,backgroundSize: 'cover' }}>

  
    <div className='contact-us-container'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className='contact-form'>
        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor='message'>Message:</label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
