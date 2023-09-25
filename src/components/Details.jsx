import { useEffect } from "react";

function Details(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div class="container">
        <button className="back-button" onClick={props.goBack}>
          Back
        </button>
        <div class="beer-details">
          <div class="beer-image img-container">
            <img
              src={props.selectedCard.image_url}
              alt={props.selectedCard.name}
            />
          </div>
          <div class="beer-info">
            <h1>{props.selectedCard.name}</h1>
            <p>{props.selectedCard.tagline}</p>
            <p>
              <strong>ABV:</strong> {props.selectedCard.abv}
            </p>
            <p>
              <strong>IBU:</strong> {props.selectedCard.ibu}
            </p>
            <p>
              <strong>First Brewed:</strong> {props.selectedCard.first_brewed}
            </p>
            <p>
              <strong>Description:</strong> {props.selectedCard.description}
            </p>
            <p>
              <strong>Food Pairing:</strong>
            </p>
            <ul>
              {props.selectedCard.food_pairing.map((pairing) => (
                <li>{pairing}</li>
              ))}
            </ul>
          </div>
        </div>
        <div class="brewing-method">
          <h2>Brewing Method</h2>
          <p>
            <strong>Mash Temp:</strong>{" "}
            {props.selectedCard.method.mash_temp.value}°
            {props.selectedCard.method.mash_temp.unit === "celsius" ? "C" : "F"}{" "}
            for {props.selectedCard.method.mash_temp.duration} minutes
          </p>
          <p>
            <strong>Fermentation Temp:</strong>{" "}
            {props.selectedCard.method.fermentation.temp.value}°
            {props.selectedCard.method.fermentation.temp.unit === "celsius"
              ? "C"
              : "F"}
          </p>
          <p>
            <strong>Brewer's Tips:</strong> {props.selectedCard.brewers_tips}
          </p>
        </div>
        <div class="ingredients">
          <h2>Ingredients</h2>
          <p>
            <strong>Malt:</strong>
          </p>
          <ul>
            {props.selectedCard.ingredients.malt.map((malt) => (
              <li>
                {malt.name} - {malt.amount.value} {malt.amount.units}
              </li>
            ))}
          </ul>
          <p>
            <strong>Hops:</strong>
          </p>
          <ul>
            {props.selectedCard.ingredients.hops.map((hop) => (
              <li>
                {hop.name} - {hop.amount.value} {hop.amount.units} ({hop.add},{" "}
                {hop.attribute})
              </li>
            ))}
          </ul>
          <p>
            <strong>Yeast:</strong> {props.selectedCard.yeast}
          </p>
        </div>
      </div>
      <div class="footer">
        <p>{props.selectedCard.contributed_by}</p>
      </div>
    </div>
  );
}

export default Details;
