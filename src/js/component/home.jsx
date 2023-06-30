import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";

const cards = [
  {
    title: "Hola soy la tarjeta 1",
    image: "https://picsum.photos/id/237/200/300",
    text: "Hola soy texto 1",
  },
  {
    title: "Hola soy la tarjeta 2",
    image: "https://picsum.photos/id/391/200/300",
    text: "Hola soy texto 2",
  },
  {
    title: "Hola soy la tarjeta 3",
    image: "https://picsum.photos/id/222/200/300",
    text: "Hola soy texto 3",
  },
  {
    title: "Hola soy la tarjeta 4",
    image: "https://picsum.photos/id/311/200/300",
    text: "Hola soy texto 4",
  },
];

const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Hero />
      <div className="container-fluid m-auto row">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary text-white justify-content-center">
        <p className="fs-3">Copyright © Tu sitio web 2023</p>
      </div>
    </div>
  );
};

export default Home;
