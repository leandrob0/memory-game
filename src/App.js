import "./styles/App.css";

import anaconda from "./media/anaconda.png";
import chicken from "./media/chicken.png";
import dog from "./media/dog.png";
import eagle from "./media/eagle.png";
import elephant from "./media/elephant.png";
import fox from "./media/fox.png";
import goat from "./media/goat.png";
import horse from "./media/horse.png";
import parrot from "./media/parrot.png";
import pigeon from "./media/pigeon.png";
import rabbit from "./media/rabbit.png";
import tiger from "./media/tiger.png";

import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { useState, useEffect } from "react";
import LogicModule from "./logic";

const App = () => {
  const [animals, setAnimals] = useState([
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
  ]);
  const [clickedAnimals, setClickedAnimals] = useState([]);
  const [curScore, setCurScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lost, setLost] = useState(0);

  useEffect(() => {
    let copy = [...animals];
    const shuffledArray = LogicModule.shuffleArray(copy);
    setAnimals(shuffledArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedAnimals]);

  const handleClick = (e) => {
    let id;
    /* 
      First checks for a click on the text, later for a click outside the image and outside the name container.
      The user can click in the border and make this not work thats why there another check with e.target.id !== ''
      meaning the user did not click on the div that is the container and has the ID of the animal.
    */
    if (e.target.nodeName === "P") {
      id = e.target.parentNode.parentNode.id;
    } else if (e.target.nodeName === "DIV" && e.target.id !== "") {
      id = e.target.id;
    } else {
      id = e.target.parentNode.id;
    }

    if (!LogicModule.alreadyClicked(id, clickedAnimals)) {
      setClickedAnimals(clickedAnimals.concat(id));
      setCurScore(curScore + 1);
      if (curScore >= bestScore) setBestScore(bestScore + 1);
      setLost(0);
    } else {
      setCurScore(0);
      setClickedAnimals([]);
      setLost(1);
    }
  };

  return (
    <>
      <Header curScore={curScore} bestScore={bestScore} lost={lost} />
      <Content animals={animals} handleClick={handleClick} />
    </>
  );
};

export default App;
