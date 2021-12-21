import React, { useState } from "react";
import { send } from "emailjs-com";

import "./Contact.css";

function Contact() {
	const [toSend, setToSend] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setToSend({ ...toSend, [e.target.name]: e.target.value });
	};

	const submit = (e) => {
		e.preventDefault();
		send("service_nq4pp57", "template_ky2cg6m", toSend, "user_cx3dl6sXJhwenXLXsHpRz")
			.then((response) => {
				console.log("SUCCESS!", response.status, response.text);
                setToSend({name: "",
                email: "",
                message: "",});
			})
			.catch((err) => {
				console.log("FAILED...", err);
			});
	};

	return (
		<section id="contact">
			<h2 className="header">Get in Touch</h2>
			<div className="contact-area">
				<div className="chat">
					<i className="fas fa-comments"></i>
					<h3>Let's Chat</h3>
					<p>Want to connect?</p>
				</div>
				<form className="contact-form" onSubmit={submit}>
					<label className="email">
						<span>Email</span>
						<input type="email" id="email" placeholder="example@example.com" name="email" value={toSend.email} onChange={handleChange} required />
					</label>
					<label className="name">
						<span>Name</span>
						<input type="text" id="name" placeholder="John Doe" name="name" value={toSend.name} onChange={handleChange} required />
					</label>
					<label className="message">
						<span>Message</span>
						<textarea id="message" placeholder="Hey there! Leave me a message I will get back to you as soon as I can." name="message" value={toSend.message} onChange={handleChange} required></textarea>
					</label>
					<button  className="form-btn">
						<i className="fas fa-paper-plane"></i>&nbsp; Submit
					</button>
				</form>
			</div>
		</section>
	);
}

export default Contact;
