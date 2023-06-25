import { useState } from "react";

function Pesquisa(props) {
  const [searchDecision, setSearchDecision] = useState("title");
  const [searchInput, setSearchInput] = useState("");

  const completeGameList = props.completeGameList;

  let searchGameResult = [];

  const handleSearchDecision = (event) => {
    setSearchDecision(event.target.value);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchDecision === "title") {
      searchGameResult = completeGameList.filter((game) => {
        // Atualize aqui
        return (
          game.hasOwnProperty("title") &&
          game.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
    } else {
      searchGameResult = completeGameList.filter((game) => {
        // Atualize aqui
        return (
          game.hasOwnProperty("genre") &&
          game.genre.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
    }
    props.updateGameList(searchGameResult);
  };

  return (
    <form onSubmit={handleSubmit} className="searchForm">
      <div className="input">
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchInput}
        className="inputText"
      />
     <button type="submit" className='submitButton'>Submit</button>
     </div>
      <div className="Options">
      <p>Pesquisar Por:</p>
      <div className="radios">
   
        <label>
          <input
            type="radio"
            value="title"
            checked={searchDecision === "title"}
            onChange={handleSearchDecision}
          />
          Titulo
        </label>

        <label>
          <input
            type="radio"
            value="genre"
            checked={searchDecision === "genre"}
            onChange={handleSearchDecision}
          />
          Gênero
        </label>
      </div>
</div>
      
    </form>
  );
}

export default Pesquisa;
