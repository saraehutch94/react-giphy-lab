import "./App.css";
import { useState } from "react";

function App() {
  const API_KEY = "xd7hHM2MCgiMZ7fARqG7fk9xounFX34D";
  const [giphy, setGiphy] = useState(null);

  const getGiphy = async () => {
    const response = await fetch(
      `api.giphy.com/v1/gifs/random?apikey=${API_KEY}`
    );
    const data = await response.json();
    setGiphy(data);
  };

  return <div className="App"></div>;
}

export default App;
