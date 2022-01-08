import "../styles/Header.css";

export const Header = ({ curScore, bestScore }) => {
  return (
    <header id="header">
      <h1>Memory game!</h1>
      <div id="scores-container">
        <p className="score">Best score: {bestScore}</p>
        <p className="score">Current score: {curScore}</p>
      </div>
    </header>
  );
};
