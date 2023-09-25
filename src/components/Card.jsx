function Card(props) {
  return (
    <div className="card" onClick={() => props.onClick(props.beer)}>
      <div className="img-container">
        <img src={props.beer.image_url} alt={props.beer.name} />
      </div>

      <h2>{props.beer.name}</h2>
      <p>{props.beer.tagline}</p>
    </div>
  );
}

export default Card;
