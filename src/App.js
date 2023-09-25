import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Details from "./components/Details";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Filter the data based on the search term
    const filteredCards = data.filter((card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredCards);
  }, [searchTerm, data]);

  function goBack() {
    setSelectedCard(null);
  }

  return (
    <div>
      {selectedCard ? (
        <div>
          <Header title="Beer details" />
          <Details selectedCard={selectedCard} goBack={goBack} />
        </div>
      ) : (
        <div>
          <Header title="Beers" />
          <div className="search-container">
            <input
              className="search-bar"
              type="text"
              placeholder="Search for beers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="card-container">
              {filteredData.map((beer) => (
                <Card
                  onClick={() => {
                    setSelectedCard(beer);
                  }}
                  key={beer.id}
                  beer={beer}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
