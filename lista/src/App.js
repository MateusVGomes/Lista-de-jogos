import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import Function from "./components/Function"
import axios from "axios";

function App() {
  const [firstGame, setFirstGame] = useState(" ");
  const [gameList,setGameList]=useState([]);
  useEffect(() => {
    axios
      .get("https://games-test-api-81e9fb0d564a.herokuapp.com/api/data", {
        headers: {
          "Content-Type": "application/json",
          "dev-email-address": "mateus.vasc.gomes@gmail.com",
        },
      })
      .then((response) => {
        const data = response.data;
        let firstGame = data[0];
        let newData=data;
        setFirstGame(firstGame);
        setGameList(newData);
      });
  }, []);

  return (
    <div className="App">
      <Game firstGame={firstGame} />
      <Function gameList={gameList} />    
    </div>
  );
}

export default App;
