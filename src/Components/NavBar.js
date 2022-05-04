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
						<NavLink to='/about' className={(navData) => (navData.isActive ? 'nav_active' : '')}>
							About
						</NavLink>
					</li>
					<li>
						<NavLink to='/furnitures' className={(navData) => (navData.isActive ? 'nav_active' : '')}>
							Furnitures
						</NavLink>
					</li>
					<li>
						<NavLink to='/shop' className={(navData) => (navData.isActive ? 'nav_active' : '')}>
							Shop
						</NavLink>
					</li>
					<li>
						<NavLink to='/contact' className={(navData) => (navData.isActive ? 'nav_active' : '')}>
							Contact
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
