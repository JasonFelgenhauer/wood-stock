import React from 'react';
import Header from '../Components/Header';
import About from '../Components/About';
import Shop from '../Components/Shop';
import Furnitures from '../Components/Furnitures';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

const Home = () => {
	return (
		<div>
			<Header />
			<About />
			<Shop />
			<Furnitures />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
