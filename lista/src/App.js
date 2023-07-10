import "./App.css";
import "./styles/Game.css"
import "./styles/Navbar.css";
import "./styles/Loader.css";
import { useState, useEffect } from "react";
import GameList from "./components/GameList";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import Error from "./components/Error";
import axios from "axios";

function App() {
  const [completeGameList, setCompleteGameList] = useState([]);
  const [gameList, setGameList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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
          console.log(newData);
          setGameList(newData);
          setCompleteGameList(newData);
          setIsLoading(false);
        }
      } catch (error) {
        if (!error.response && error.code !== "ECONNABORTED") {
          setError(
            "Ocorreu um erro ao se comunicar com o servidor, tente novamente mais tarde"
          );
          return;
        }
        if (!error.response && error.code === "ECONNABORTED") {
          setError("O servidor demorou para responder, tente mais tarde");
          return;
        }
        const { status } = error.response;
        if ([500, 502, 503, 504, 507, 508, 509].includes(status)) {
          setError("O servidor falhou em responder, tente recarregar a página");
          return;
        }
        setError(
          "O servidor não conseguirá responder por agora, tente voltar novamente mais tarde"
        );
        return;
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
        <Error error={error} />
      ) : isLoading ? (
        <div>
          <Loader isLoading={isLoading} />
        </div>
      ) : (
        <div>
          <Navbar
            completeGameList={completeGameList}
            updateGameList={updateGameList}
          />
          <GameList gameList={gameList} className="gamesBox" />
        </div>
      )}
    </div>
  );
}
export default App;
