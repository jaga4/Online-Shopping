import React, { useState } from 'react';
import BackToTopButton from "../HomePage/BackToTopComponent";
import Footer from "../HomePage/FooterComponent";
import NavbarComponent from "../HomePage/Navbar";
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validateForm = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid';
            isValid = false;
        }
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Thank you for contacting us!');
            // Reset form if needed
            setFormData({ name: '', email: '', message: '' });
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({ ...prevData, [id]: value }));
    };

    return (
        <div>
            <NavbarComponent />
            <div className="py-5 my-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="text-capitalize"><u>Contact Us</u></h2>
                    </div>
                    <div className="row mb-5">
                        {/* Contact Info Section */}
                        {[
                            { icon: "bi bi-telephone-fill", title: "Let's Talk", name: "Phone", value: "+91 1234567890" },
                            { icon: "bi bi-envelope-open-fill", title: "Drop a Line", name: "Email", value: "xyz@gmail.com" },
                            { icon: "bi bi-life-preserver", title: "24x7 Support", name: "Customer", value: "1800 101 303" }
                        ].map((e, i) => (
                            <div key={i} className="col-md-4 col-12 mb-4">
                                <div className="border border-success rounded shadow text-center p-3 h-100">
                                    <div className="mb-4">
                                        <i className={`${e.icon} contact-icon`}></i>
                                    </div>
                                    <div>
                                        <h3>{e.title}</h3>
                                        <p><b>{e.name}:</b> {e.value}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contact-form">
                        <h2 className="text-center"><u>Contact Information</u></h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.name && <p className="text-danger">{errors.name}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.email && <p className="text-danger">{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                                {errors.message && <p className="text-danger">{errors.message}</p>}
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTopButton />
        </div>
    );
}

export default ContactUs;
