import React from 'react';
import NavBar from './NavBar';

const Header = () => {
	return (
		<header>
			<NavBar />
			<div className='container header'>
				<div className='header_left'>
					<img src='../assets/wood-left.png' alt='wood left' />
				</div>
				<div className='header_right'>
					<img src='../assets/wood-right.png' alt='wood right' />
				</div>
				<div className='header_absolute'>
					<img src='../assets/wood-stock.png' alt='wood-stock' />
				</div>
			</div>
		</header>
	);
};

export default Header;
