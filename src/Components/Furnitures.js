import React from 'react';

const Furnitures = () => {
	return (
		<section className='container furnitures'>
			<h2>Creative Team</h2>
			<div className='furnitures_box'>
				<h3>Good mindset</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				<button>Meat the team</button>
			</div>
			<div className='furnitures_absolute'>
				<figure>
					<img src='./assets/image.png' alt='workspace' />
				</figure>
				<div>Wood</div>
			</div>
		</section>
	);
};

export default Furnitures;
