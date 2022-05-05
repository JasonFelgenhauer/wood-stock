import React from 'react';
import Header from '../Components/Header';
import About from '../Components/About';
import Shop from '../Components/Shop';
import Furnitures from '../Components/Furnitures';
import Contact from '../Components/Contact';

const Home = () => {
	return (
		<div>
			<Header />
			<About />
			<Shop />
			<Furnitures />
			<Contact />
		</div>
	);
};

export default Home;
