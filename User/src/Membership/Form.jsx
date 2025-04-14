/*import React from 'react';

export default function OrderForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('img.webp')" }}>
      <div className="order-form max-w-lg p-5 bg-white border border-gray-300 rounded-2xl shadow-lg">
        <h2 className="text-center text-2xl font-semibold mb-5">Details</h2>
        <form action="/SHOP_NOW.php" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Full Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border rounded-md" />
          </div>
<dr/><br/><br/>
          <div>
            <label htmlFor="phone" className="block mb-1">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required className="w-full p-2 border rounded-md" />
          </div>
          <dr/><br/><br/>
          <div>
            <label htmlFor="email" className="block mb-1">Email ID:</label>
            <input type="email" id="email" name="email" required className="w-full p-2 border rounded-md" />
          </div>
          <dr/><br/><br/>
          <div>
            <label htmlFor="address" className="block mb-1">Address:</label>
            <input type="text" id="address" name="address" required className="w-full p-2 border rounded-md" />
          </div>
          <dr/><br/><br/>
          <div>
            <label htmlFor="product" className="block mb-1">Plastic Rate Per kg:</label>
            <input type="text" id="product" name="product" value="Rs.10" readOnly className="w-full p-2 border rounded-md bg-gray-100" />
          </div>
          <dr/><br/><br/>
          <div>
            <label htmlFor="plasticType" className="block mb-1">Plastic Type (Dropdown):</label>
            <select id="plasticType" name="plasticType" required className="w-full p-2 border rounded-md">
              <option value="" disabled selected>Select plastic type</option>
              <option value="PET">PET</option>
              <option value="HDPE">HDPE</option>
              <option value="PVC">PVC</option>
              <option value="LDPE">LDPE</option>
              <option value="PP">PP</option>
              <option value="PS">PS</option>
            </select>
          </div>
          <dr/><br/><br/>
          <div>
            <label className="block mb-1">Plastic Type (Checkbox):</label>
            <div className="flex flex-wrap gap-2">
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="PET" /> PET
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="HDPE" /> HDPE
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="PVC" /> PVC
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="LDPE" /> LDPE
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="PP" /> PP
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="PS" /> PS
              </label>
            </div>
          </div>
          <dr/><br/><br/>
          <div className="flex gap-2">
            <button type="submit" className="w-full p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">Collect</button>
            <button type="reset" className="w-full p-2 bg-gray-300 rounded-md hover:bg-gray-400">Reset</button>
          </div>
        </form>
    
  </div>
  </div>
  );
}*/





/*import React from 'react';
import '../App.css';
import emailjs from '@emailjs/browser';

function OrderForm() {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('img.webp')" }}>
      <div className="shadow-lg p-5 rounded-2xl">
        <h2 className="text-center text-2xl font-semibold mb-5">Details</h2>
        <form action="file:///C:/Users/Admin/OneDrive/Documents/ideathon%20trashcash/SHOP%20NOW.php" method="POST" className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Full Name:</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border rounded-md" />
          </div>
          <dr/><br/><br/>
          <div>
            <label htmlFor="phone" className="block mb-1">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required className="w-full p-2 border rounded-md" />
          </div>
          <dr/><br/><br/>
          <div>
            <label htmlFor="email" className="block mb-1">Email ID:</label>
            <input type="email" id="email" name="email" required className="w-full p-2 border rounded-md" />
          </div>
          <dr/><br/><br/>
          <div>
            <label htmlFor="address" className="block mb-1">Address:</label>
            <input type="text" id="address" name="address" required className="w-full p-2 border rounded-md" />
          </div>
          <dr/><br/><br/>
          <div>
            <label htmlFor="product" className="block mb-1">Plastic Rate Per kg:</label>
            <input type="text" id="product" name="product" value="Rs.10" readOnly className="w-full p-2 border rounded-md bg-gray-100" />
          </div>
          <dr/><br/><br/>
          <div>
            <label htmlFor="plasticType" className="block mb-1">Plastic Type (Dropdown):</label>
            <select id="plasticType" name="plasticType" required className="w-full p-2 border rounded-md">
              <option value="" disabled selected>Select plastic type</option>
              <option value="PET">PET</option>
              <option value="HDPE">HDPE</option>
              <option value="PVC">PVC</option>
              <option value="LDPE">LDPE</option>
              <option value="PP">PP</option>
              <option value="PS">PS</option>
            </select>
          </div>
          <dr/><br/><br/>
          <div>
            <label className="block mb-1">Plastic Type (Checkbox):</label>
            <div className="flex flex-wrap gap-2">
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="PET" /> PET
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="HDPE" /> HDPE
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="PVC" /> PVC
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="LDPE" /> LDPE
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="PP" /> PP
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic[]" value="PS" /> PS
              </label>
            </div>
          </div>
          <dr/><br/><br/>
          <div className="flex gap-2">
            <button type="submit" className="w-full p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">Collect</button>
            <button type="reset" className="w-full p-2 bg-gray-300 rounded-md hover:bg-gray-400">Reset</button>
          </div>
        </form>
      </div>
    </div>
  );
}
  export default OrderForm;*/



/*import React,{useState,useRef} from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';
 function OrderForm() {
 const form = useRef(null);
 const [plasticType, setPlasticType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_8xlmxcr', '__ejs-test-mail-service__', form.current, 'QzX7tYnMQbxGxsY2_')
      .then((result) => {
        alert('Email sent successfully!');
      }, (error) => {
        alert('Failed to send email: ' + error.text);
      });
  };
  const handleChange = (e) => {
    setPlasticType(e.target.value);
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('img.webp')" }}>
      <div className="shadow-lg p-5 rounded-2xl">
        <h2 className="text-center text-2xl font-semibold mb-5">Details</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Full Name:</label>
            <input type="text" id="name" name="user_name" required className="w-full p-2 border rounded-md" />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1">Phone Number:</label>
            <input type="tel" id="phone" name="user_phone" required className="w-full p-2 border rounded-md" />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">Email ID:</label>
            <input type="email" id="email" name="user_email" required className="w-full p-2 border rounded-md" />
          </div>

          <div>
            <label htmlFor="address" className="block mb-1">Address:</label>
            <input type="text" id="address" name="user_address" required className="w-full p-2 border rounded-md" />
          </div>

          <div>
            <label htmlFor="product" className="block mb-1">Plastic Rate Per kg:</label>
            <input type="text" id="product" name="product_rate" value="Rs.10" readOnly className="w-full p-2 border rounded-md bg-gray-100" />
          </div>

          <div>
          <label>Plastic Type:</label>
      <select name="plastictype" onChange={handleChange} value={plasticType}>
        <option value="" disabled>Select Plastic Type</option>
        <option value="PET">PET</option>
        <option value="HDPE">HDPE</option>
        <option value="PVC">PVC</option>
      </select>

          </div>

          <div>
            <label className="block mb-1">Plastic Type (Checkbox):</label>
            <div className="flex flex-wrap gap-2">
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="PET" /> PET
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="HDPE" /> HDPE
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="PVC" /> PVC
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="LDPE" /> LDPE
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="PP" /> PP
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="PS" /> PS
              </label>
            </div>
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
export default OrderForm;*/



import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';


function OrderForm() {
  const form = useRef(null);
  const [plasticType, setPlasticType] = useState('');

  const handleChange = (e) => {
    setPlasticType(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_8xlmxcr', 'template_e7l2uvj', form.current, 'C4Fp1F1tmnV6elIK_')
      .then((result) => {
       
      
        alert('Email sent successfully!');
      }, (error) => {
        alert('Failed to send email: ' + error.text);
      });
  };
 
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('img.webp')" }}>
      <div className="shadow-lg p-5 rounded-2xl">
        <h2 className="text-center text-2xl font-semibold mb-5">Details</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
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
  <input 
    type="email" 
    id="email" 
    name="user_email" 
    required 
    className="w-full p-2 border rounded-md" 
  />
</div>

            {/*<div>
            <label htmlFor="email" className="block mb-1">Email ID:</label>
            <input type="email" id="email" name="user_email" required className="w-full p-2 border rounded-md" />
          </div>*/}
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
            <select name="plastic_type" onChange={handleChange} value={plasticType} required>
              <option value="" disabled>Select Plastic Type</option>
              <option value="PET">PET</option>
              <option value="HDPE">HDPE</option>
              <option value="PVC">PVC</option>
              <option value="PET">LDPE</option>
              <option value="PET">PP</option>
            </select>
          </div>
          <br/><br/><br/>
          <div>
            <label className="block mb-1">Plastic Type (Checkbox):</label>
            <div className="flex flex-wrap gap-2">
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="PET" /> PET
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="HDPE" /> HDPE
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="PVC" /> PVC
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="LDPE" /> LDPE
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="PP" /> PP
              </label>
              <label className="flex items-center gap-1">
                <input type="checkbox" name="plastic_types" value="PS" /> PS
              </label>
            </div>
          </div>
          <br/><br/><br/>
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














