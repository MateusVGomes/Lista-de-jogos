import "./App.css";
import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import GameList from "./components/GameList";
import Pesquisa from "./components/Pesquisa";
import axios from "axios";

function App() {
  const [completeGameList,setCompleteGameList]=useState([])
  const [gameList, setGameList] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data",
          {
            headers: {
              "Content-Type": "application/json",
              "dev-email-address": "mateus.vasc.gomes@gmail.com",
            },
            timeout: 5000,
          }
        );
        const data = response.data;
        let newData = data;
        if (isMounted) {
          setGameList(newData);
          setCompleteGameList(newData);
        }
      } catch (error) {
        if (error.response) {
          const statusCode = error.response.status;
          if (
            statusCode === 500 ||
            statusCode === 502 ||
            statusCode === 503 ||
            statusCode === 504 ||
            statusCode === 507 ||
            statusCode === 508 ||
            statusCode === 509
          ) {
            setError(
              "O servidor falhou em responder, tente recarregar a página"
            );
          } else {
            setError(
              "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
            );
          }
        } else if (error.code === "ECONNABORTED") {
          setError("O servidor demorou para responder, tente mais tarde");
        } else {
          setError(
            "Ocorreu um erro ao se comunicar com o servidor, tente novamente mais tarde"
          );
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);
  const updateGameList = (newGameList) => {
    setGameList(newGameList);
  };

  return (
    <div className="App">
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          {" "}
          <Pesquisa compleGameList={completeGameList} gameList={gameList} updateGameList={updateGameList}  />
          
          <div className="gamesBox">
            {gameList.map((game) => {
              return <Game gameList={game} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
