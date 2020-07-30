import React from "react";

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
		<div id="contacts" className="contact flex-center wrapper">
			<div className="contact-content flex-between">
				<div className="contact-content-box contact-content-box_1">
					<h2 className="contact-content__title">
						Отправьте нам запрос
					</h2>
					<p className="contact-content__subtitle contact-content__subtitle_1">
						Хотите узнать больше про EPI group s.r.o.?
					</p>
					<p className="contact-content__subtitle contact-content__subtitle_2">
						От услуг до подхода и людей — мы рады общению
					</p>
					<a className="contact__phone" href="tel:+44 60 9372 5690">
						+44 60 9372 5690
					</a>
					<a
						className="contact__email"
						href="mailto:epigroup.cz@gmail.com"
					>
						epigroup.cz@gmail.com
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
								<label>Имя</label>
							</div>
							<div className="form-input-box contact-form-input-box">
								<input
									type="text"
									name="company"
									placeholder=" "
									onChange={handleChange}
								/>
								<label>Компания</label>
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
								<label>Электронный адрес</label>
							</div>
							<div className="form-input-box contact-form-input-box">
								<input
									type="phone"
									name="phone"
									placeholder=" "
									onChange={handleChange}
								/>
								<label>Телефон (необязательно)</label>
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
								<label>Сообщение</label>
							</div>
						</div>

						<button
							className="cta-btn cta-btn_white contact-form-submitbtn"
							type="submit"
						>
							Отправить запрос
						</button>
						<p className="contact-form-success">Отправлено</p>
					</form>
				</div>
			</div>
		</div>
	);
}
