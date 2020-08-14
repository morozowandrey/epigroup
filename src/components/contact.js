import React from "react";
import { useTranslation } from "react-i18next";

function encode(data) {
	return Object.keys(data)
		.map(
			(key) =>
				encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
		)
		.join("&");
}

export default function Contact() {
	const [state, setState] = React.useState({});
	const { t } = useTranslation();

	const handleChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": form.getAttribute("name"),
				...state,
			}),
		})
			.then(() => {
				document.getElementsByClassName(
					"contact-form-success"
				)[0].className += " visible";

				document.getElementsByClassName(
					"contact-form-submitbtn"
				)[0].className += " hidden";
			})
			.catch((error) => alert(error));
	};

	return (
		<div id="contacts" className="contact">
			<div className="flex-center wrapper">
				<div className="contact-content flex-between">
					<div className="contact-content-box contact-content-box_1">
						<h2 className="contact-content__title">
							{t("contact.title")}
						</h2>
						<p className="contact-content__subtitle contact-content__subtitle_1">
							{t("contact.text-1")}
						</p>
						<p className="contact-content__subtitle contact-content__subtitle_2">
							{t("contact.text-2")}
						</p>
						<a
							className="contact__phone"
							href={t("contact.tellink")}
						>
							{t("contact.tel")}
						</a>
						<a
							className="contact__email"
							href={t("contact.emaillink")}
						>
							{t("contact.email")}
						</a>
					</div>

					<div className="contact-content-box contact-content-box_2">
						<form
							className="contact-form form flex-column"
							name="contact"
							method="post"
							autoComplete="off"
							data-netlify="true"
							data-netlify-honeypot="bot-field"
							onSubmit={handleSubmit}
						>
							{/* The `form-name` hidden field is required to support form submissions without JavaScript */}
							<input
								type="hidden"
								name="form-name"
								value="contact"
								placeholder=" "
							/>
							<p hidden>
								<label>
									Don’t fill this out:{" "}
									<input
										name="bot-field"
										placeholder=" "
										onChange={handleChange}
									/>
								</label>
							</p>

							<div className="contact-form-row contact-form-row_1 flex-between">
								<div className="form-input-box contact-form-input-box contact-form-input-box_offset">
									<input
										type="text"
										name="name"
										placeholder=" "
										onChange={handleChange}
									/>
									<label>
										{t("contact.formplaceholders.name")}
									</label>
								</div>
								<div className="form-input-box contact-form-input-box">
									<input
										type="text"
										name="company"
										placeholder=" "
										onChange={handleChange}
									/>
									<label>
										{t("contact.formplaceholders.company")}
									</label>
								</div>
							</div>
							<div className="contact-form-row contact-form-row_2 flex-between">
								<div className="form-input-box contact-form-input-box contact-form-input-box_offset">
									<input
										type="email"
										name="email"
										placeholder=" "
										onChange={handleChange}
									/>
									<label>
										{t("contact.formplaceholders.email")}
									</label>
								</div>
								<div className="form-input-box contact-form-input-box">
									<input
										type="phone"
										name="phone"
										placeholder=" "
										onChange={handleChange}
									/>
									<label>
										{t("contact.formplaceholders.tel")}
									</label>
								</div>
							</div>
							<div className="contact-form-row contact-form-row_3 flex-between">
								<div className="form-input-box contact-form-input-box">
									<textarea
										name="message"
										rows="1"
										placeholder=" "
										onChange={handleChange}
									/>
									<label>
										{t("contact.formplaceholders.message")}
									</label>
								</div>
							</div>

							<button
								className="cta-btn cta-btn_white contact-form-submitbtn"
								type="submit"
							>
								{t("contact.cta")}
							</button>
							<p className="contact-form-success">
								{t("contact.ctasent")}
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
