import React, { useState, useEffect } from "react";

function Pesquisa(props) {
  const [searchDecision, setSearchDecision] = useState("title");
  const [searchInput, setSearchInput] = useState("");
  const gameList = props.gameList;
  let   searchGameResult=[];
  const handleSearchDecision = (event) => {
    setSearchDecision(event.target.value);
  };
  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if ((searchDecision === "title")) {
        searchGameResult = gameList.filter((game) => {
        return (
          game.hasOwnProperty("title") &&
          game.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
   
    }
else{
    searchGameResult = gameList.filter((game) => {
        return (
          game.hasOwnProperty("genre") &&
          game.genre.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
}
console.log(searchGameResult);  
};
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchInput} onChange={handleSearchInput} />
      <label>
        <input
          type="radio"
          value="title"
          checked={searchDecision === "title"}
          onChange={handleSearchDecision}
        />
        Pesquisar por Titulo
      </label>

      <label>
        <input
          type="radio"
          value="genre"
          checked={searchDecision === "genre"}
          onChange={handleSearchDecision}
        />
        Pesquisar por Gênero
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
export default Pesquisa;
