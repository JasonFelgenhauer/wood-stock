import React from 'react';

const Contact = () => {
	return (
		<section className='container contact'>
			<h2>Contact us</h2>
			<div className='contact_form'>
				<form>
					<div>
						<input type='text' placeholder='First name' />
					</div>
					<div>
						<input type='text' placeholder='Last name' />
					</div>
					<div>
						<input type='email' placeholder='Mail address' />
					</div>
					<div>
						<textarea placeholder='Message'></textarea>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
