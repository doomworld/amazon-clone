import React from 'react';
import Banner from '../assets/banner.jpg';
import Product from './Product';
import './Home.css';

const Home = () => {
	return (
		<div className="home">
			<img className="home__banner" src={Banner} alt="Home banner" />
			<div className="home__row">
				<Product
					id="1230"
					title="
New Apple iPhone 12 Pro Max (128GB, Graphite) [Locked] + Carrier Subscription"
					rating={5}
					price="1,099.99"
					image="https://m.media-amazon.com/images/I/71XXJC7V8tL._FMwebp__.jpg"
				/>
				<Product
					id="123045"
					title="DualSense Wireless Controller
"
					rating={5}
					price="69.96"
					image="https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg"
				/>

				{/* products id, title, image, rating, price */}
			</div>
			<div className="home__row">
				<Product
					id="123012"
					title="PlayStation 5 Console"
					rating={4}
					price="700"
					image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
				/>
			</div>
			<div className="home__row">
				<Product
					id="12301243"
					title="PlayStation 5 Console"
					rating={4}
					price="700"
					image="https://images-na.ssl-images-amazon.com/images/I/618P2pet0pL._SL1500_.jpg"
				/>
				<Product
					id="1230172"
					title="Game of Thrones: Complete Series (DVD)"
					rating={4}
					price="$91.99"
					image="https://images-na.ssl-images-amazon.com/images/I/91DjGXn7jXL._SL1500_.jpg"
				/>
				<Product
					id="1234012"
					title="
CyberpowerPC Gamer Supreme Liquid Cool Gaming PC, AMD Ryzen 7 3800X 3.9GHz, Radeon RX 5700 XT 8GB, 16GB DDR4, 1TB NVMe SSD, WiFi & Win 10 Home (SLC8260A3)"
					rating={5}
					price="1,229.99"
					image="https://images-na.ssl-images-amazon.com/images/I/818SNa1ruZL._AC_SL1500_.jpg"
				/>
			</div>
		</div>
	);
};

export default Home;
