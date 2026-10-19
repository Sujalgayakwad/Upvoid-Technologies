import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log(formData); };

  return (
    <section id="callback" className="callback">
      <div className="contact-intro">
        <div className="section-label">03 / GET IN TOUCH</div>
        <h2>Let's build your<br /><em>future home.</em></h2>
        <p>Have a project in mind? Tell us a little about it and our team will get back to you shortly.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label><span>Name</span><input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required /></label>
          <label><span>Phone</span><input type="tel" name="phone" placeholder="+91 00000 00000" value={formData.phone} onChange={handleChange} required /></label>
        </div>
        <label><span>Email</span><input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required /></label>
        <label><span>Tell us about your project</span><textarea name="message" placeholder="What can we help you automate?" value={formData.message} onChange={handleChange} required /></label>
        <button type="submit" className="primary-button">Send enquiry <span aria-hidden="true">↗</span></button>
      </form>
    </section>
  );
};

export default ContactForm;
