import { Card } from "./Card";
import "../styles/Content.css";

export const Content = ({ animals, handleClick }) => {
  return (
    <main id="main-container">
      <div id="cards-container">
        {animals &&
          animals.map((val) => (
            <Card
              src={val.src}
              name={val.name}
              id={val.id}
              handleClick={handleClick}
              key={val.id}
            />
          ))}
      </div>
    </main>
  );
};
