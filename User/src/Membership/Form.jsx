




import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';
import axios from 'axios';

function OrderForm() {
  const form = useRef(null);
  const [plasticType, setPlasticType] = useState('');

  const handleChange = (e) => {
    setPlasticType(e.target.value);
  };

  const sendEmail = () => {
    return emailjs.sendForm(
      'service_8xlmxcr',
      'template_e7l2uvj',
      form.current,
      'C4Fp1F1tmnV6elIK_'
    );
  };

  const handleFormSubmit = async () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      user_email: formData.get('user_email'),
      user_address: formData.get('user_address'),
      product_rate: formData.get('product_rate'),
      plastic_type: formData.get('plastic_type'),
      plastic_types: formData.getAll('plastic_types'),
    };

    return axios.post('http://localhost:5000/api/form', data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail();
      await handleFormSubmit();
      alert('Email sent and order saved successfully!');
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('img.webp')" }}>
      <div className="shadow-lg p-5 rounded-2xl">
        <h2 className="text-center text-2xl font-semibold mb-5">Details</h2>
        <form ref={form} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Full Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border rounded-md" />
          </div>
           <br/><br/><br/>
          <div>
            <label htmlFor="phone" className="block mb-1">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required className="w-full p-2 border rounded-md" />
          </div>
           <br/><br/><br/>
          <div>
            <label htmlFor="email" className="block mb-1">Email ID:</label>
            <input type="email" id="email" name="user_email" required className="w-full p-2 border rounded-md" />
          </div>
           <br/><br/><br/>
          <div>
            <label htmlFor="address" className="block mb-1">Address:</label>
            <input type="text" id="address" name="user_address" required className="w-full p-2 border rounded-md" />
          </div>
           <br/><br/><br/>
          <div>
            <label htmlFor="product" className="block mb-1">Plastic Rate Per kg:</label>
            <input type="text" id="product" name="product_rate" value="Rs.10" readOnly className="w-full p-2 border rounded-md bg-gray-100" />
          </div>
           <br/><br/><br/>
          <div>
            <label>Plastic Type:</label>
            <select name="plastic_type" onChange={handleChange} value={plasticType} required className="w-full p-2 border rounded-md">
              <option value="" disabled>Select Plastic Type</option>
              <option value="PET">PET</option>
              <option value="HDPE">HDPE</option>
              <option value="PVC">PVC</option>
              <option value="LDPE">LDPE</option>
              <option value="PP">PP</option>
              <option value="PS">PS</option>
            </select>
          </div>
           <br/><br/><br/>
          <div>
            <label className="block mb-1">Plastic Type (Checkbox):</label>
            <div className="flex flex-wrap gap-2">
              {['PET', 'HDPE', 'PVC', 'LDPE', 'PP', 'PS'].map((type) => (
                <label key={type} className="flex items-center gap-1">
                  <input type="checkbox" name="plastic_types" value={type} /> {type}
                </label>
              ))}
            </div>
             <br/><br/><br/>
          </div>
          <div className="flex gap-2">
            <button type="submit" className="w-full p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">Collect</button>
            <button type="reset" className="w-full p-2 bg-gray-300 rounded-md hover:bg-gray-400">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;









