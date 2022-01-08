export const Card = ({ src, name, id, handleClick }) => {
  return (
    <div className="card" onClick={handleClick} id={id}>
      <img alt={name} src={src} />
      <div className="animal-name">
        <p>{name}</p>
      </div>
    </div>
  );
};
