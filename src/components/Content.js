import anaconda from "../media/anaconda.png";
import chicken from "../media/chicken.png";
import dog from "../media/dog.png";
import eagle from "../media/eagle.png";
import elephant from "../media/elephant.png";
import fox from "../media/fox.png";
import goat from "../media/goat.png";
import horse from "../media/horse.png";
import parrot from "../media/parrot.png";
import pigeon from "../media/pigeon.png";
import rabbit from "../media/rabbit.png";
import tiger from "../media/tiger.png";
import { Card } from "./Card";
import "../styles/Content.css";

export const Content = () => {
  const animals = [
    { src: anaconda, name: "anaconda", id: 1 },
    { src: chicken, name: "chicken", id: 2 },
    { src: dog, name: "dog", id: 3 },
    { src: eagle, name: "eagle", id: 4 },
    { src: elephant, name: "elephant", id: 5 },
    { src: fox, name: "fox", id: 6 },
    { src: goat, name: "goat", id: 7 },
    { src: horse, name: "horse", id: 8 },
    { src: parrot, name: "parrot", id: 9 },
    { src: pigeon, name: "pigeon", id: 10 },
    { src: rabbit, name: "rabbit", id: 11 },
    { src: tiger, name: "tiger", id: 12 },
  ];

  return (
    <main id="main-container">
      <div id="cards-container">
        {animals.map((val) => (
          <Card src={val.src} name={val.name} key={val.id} />
        ))}
      </div>
    </main>
  );
};
