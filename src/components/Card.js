export const Card = ({ src, name }) => {
  return (
    <div className="card">
      <img alt={name} src={src} />
      <div className="animal-name">
        <p>{name}</p>
      </div>
    </div>
  );
};
