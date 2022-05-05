import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className='container nav'>
			<div className='nav_left'>
				<button></button>
			</div>
			<div className='nav_center'>
				<NavLink to='/'>
					<img src='./assets/wood-stock.png' alt='wood stock' />
				</NavLink>
			</div>
			<div className='nav_right'>
				<ul>
					<li>
						<NavLink to='#about'>About</NavLink>
					</li>
					<li>
						<NavLink to='#furnitures'>Furnitures</NavLink>
					</li>
					<li>
						<NavLink to='#shop'>Shop</NavLink>
					</li>
					<li>
						<NavLink to='#contact'>Contact</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
