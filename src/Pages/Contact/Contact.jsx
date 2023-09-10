import React from 'react'
import './Contact.css'
import { useState } from 'react'

const Contact = () => {
  const scriptURL = '<SCRIPT URL>';
  const [formData, setFormData] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(scriptURL);
    console.log(formData);
    console.log(setFormData);
    console.log(successMessage);
    console.log(errorMessage);
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxe3sObPSRK64uwzsKUydIX8jx2aL-z6N_-_YLIPF_S1xMj_jQM4rGJo4q3d_r-Pu0Z/exec', {
        method: 'POST',
        body: new FormData(e.target),
      });

      if (response.ok) {
        setSuccessMessage('Success!');
        alert("Message Sent Succesfully");
        console.log(setSuccessMessage);
        setErrorMessage('');
        document.getElementById("fdata").reset();
      } else {
        setErrorMessage(`Error! ${response.statusText}`);
        alert("Failed to send message please Try again later");
        console.log(setErrorMessage)
        setSuccessMessage('');
      }
     } catch (error) {
      setErrorMessage(`Error! ${error.message}`);
      setSuccessMessage('');
      console.log(setErrorMessage);
    }

  };
  return (
    <div>
      <div id="contact">
        <div class="container">
            <div class="row">
                <h1 className="text-center text-zinc-50 hover:underline cursor-pointer">Have any Query? Post it here</h1>
                <div class="contact-right">
                    <form onSubmit={handleSubmit} name='submit-to-google-sheet' id="fdata">
                        <input type="text" name="Name" placeholder="Your Name" required/>
                        <input type="email" placeholder="Your email" name="Email" required/>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn btn2 sub">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
