import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	const [display, setDisplay] = useState(true);

	function menu() {
		if (display) {
			document.getElementById('menu_ul').style.top = '50px';
			setDisplay(false);
		} else {
			document.getElementById('menu_ul').style.top = '-250%';
			setDisplay(true);
		}
	}

	return (
		<nav className='container nav'>
			<div className='nav_left'>
				<button onClick={menu}>
					<i className='fa-solid fa-bars'></i>
				</button>
			</div>
			<div className='nav_center'>
				<NavLink to='/'>Wood</NavLink>
			</div>
			<div className='nav_right'>
				<ul id='menu_ul'>
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
