import "../styles/Header.css";
import "animate.css";

export const Header = ({ curScore, bestScore, lost }) => {
  return (
    <header id="header">
      <h1>Memory game!</h1>
      <div id="scores-container">
        <p>Best score: {bestScore}</p>
        <p className={lost ? "animate__heartBeat" : null}>
          Current score: {curScore}
        </p>
      </div>
    </header>
  );
};
