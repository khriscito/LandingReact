import React from "react";
import navbar from "./Navbar.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";

//create your first component
const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Hero />
      <div className="container-fluid m-auto row">
        <Card 
		title={"Hola soy la tarjeta 1"}
		image={"https://picsum.photos/id/237/200/300"}
		text={"Hola soy texto 1"}		
		/>
        <Card
		
		title={"Hola soy la tarjeta 2"}
		image={"https://picsum.photos/id/391/200/300"}
		text={"Hola soy texto 2"}	
		
		/>
        <Card 
		
		title={"Hola soy la tarjeta 3"}
		image={"https://picsum.photos/id/222/200/300"}
		text={"Hola soy texto 3"}	
		
		/>
        <Card 
		
		title={"Hola soy la tarjeta 4"}
		image={"https://picsum.photos/id/311/200/300"}
		text={"Hola soy texto 4"}	
		
		/>
      </div>

      <div className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary text-white justify-content-center">
        <p className="fs-3">Copyright © Tu sitio web 2023</p>
      </div>
    </div>
  );
};

export default Home;
