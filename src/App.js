import "./App.css";
import Button from "./components/Button";
import GiphyDisplay from "./components/GiphyDisplay";
import { useState } from "react";

function App() {
  const API_KEY = "xd7hHM2MCgiMZ7fARqG7fk9xounFX34D";
  const [giphy, setGiphy] = useState(null);

  const getGiphy = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const data = await response.json();
    setGiphy(data);
  };

  return (
    <div className="App">
      <h1>Random GIPHY Generator</h1>
      <Button getGiphy={getGiphy} />
      <GiphyDisplay />
    </div>
  );
}

export default App;
