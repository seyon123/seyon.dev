import styles from "../styles/Contact.module.css";
import { useState } from "react";
import { send } from "emailjs-com";
import { store } from "react-notifications-component";

const Contact = () => {
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
				store.addNotification({
					title: "Email Sent Successfully",
					message: "Your Message has been sent! I will get back to you as soon as possible.",
					type: "success",
					insert: "top",
					container: "top-right",
					animationIn: ["animate__animated", "animate__fadeIn"],
					animationOut: ["animate__animated", "animate__fadeOut"],
					dismiss: {
						pauseOnHover: true,
						duration: 5000,
						onScreen: true,
					},
				})
                setToSend({name: "",
                email: "",
                message: "",});
			})
			.catch((err) => {
				store.addNotification({
					title: "Error Sending Email",
					message: "Sorry, there was an error sending your message. Please try again later.",
					type: "error",
					insert: "top",
					container: "top-right",
					animationIn: ["animate__animated", "animate__fadeIn"],
					animationOut: ["animate__animated", "animate__fadeOut"],
					dismiss: {
						pauseOnHover: true,
						duration: 5000,
						onScreen: true,
					},
				})
			});
	};

	return (
		<section id="contact" className={styles.contact}>
			<h2 className="header">Get in Touch</h2>
			<div className={styles["contact-area"]}>
				<div className={styles.chat}>
					<i className="fas fa-comments"></i>
					<h3>Let&apos;s Chat</h3>
					<p>Want to connect?</p>
				</div>
				<form className={styles["contact-form"]} onSubmit={submit}>
					<label className={styles.email}>
						<span>Email</span>
						<input type="email" id="email" placeholder="example@example.com" name="email" value={toSend.email} onChange={handleChange} required />
					</label>
					<label className={styles.name}>
						<span>Name</span>
						<input type="text" id="name" placeholder="John Doe" name="name" value={toSend.name} onChange={handleChange} required />
					</label>
					<label className={styles.message}>
						<span>Message</span>
						<textarea id="message" placeholder="Hey there! Leave me a message I will get back to you as soon as I can." name="message" value={toSend.message} onChange={handleChange} required></textarea>
					</label>
					<button  className={styles["form-btn"]}>
						<i className="fas fa-paper-plane"></i>&nbsp; Submit
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;