import React, { useState} from 'react'
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import '../index.css';

const WriteMessage = () => {
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    message: '',
    memory: '',
    photo: null,
    consent: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'writeMessage'), {
        ...formData,
        timeStamp: new Date()
      });
      alert('Message submitted successfully');
      setFormData({
        name: '',
        nickname: '',
        message: '',
        memory: '',
        photo: null,
        consent: false
      })
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error submitting message, please try again.');
    }
  };

  return (
    <form className='message-form' onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full name</label>
        <input type="text" id='name' name='name' value={formData.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="nickname">Nick Name</label>
        <input type="text" id='nickname' name='nickname' value={formData.nickname} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="message">Write a message</label>
        <textarea rows={4} id='message' name='message' value={formData.message} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label htmlFor="memory">Share a fond memory</label>
        <textarea rows={4} id='memory' name='memory' value={formData.memory} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="photo">Upload a shared photo</label>
        <input type="file" id='photo' name='photo' value={formData.photo} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label>
          <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required />
          I consent to have my message and photo shared publicly    
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default WriteMessage