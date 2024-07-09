import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./hero";
import Card from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	  <div class="container-fluid"> 
		<div>
			<Navbar/>
		</div>
	  	<div>
			<Jumbotron/>
		</div>
		<div className="d-flex row justify-content-center">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
		<div><Footer/></div>
		</div>
	 
	);
};

export default Home;
