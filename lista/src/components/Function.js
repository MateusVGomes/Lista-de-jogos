function Function(props) {
  let searchWord = "War";
  let gameList = props.gameList;
  let searchGenre='Shooter'
  const searchNameResult = gameList.filter((game) => {
    return (
      game.hasOwnProperty("title") &&
      game.title.toLowerCase().includes(searchWord.toLowerCase())
    );
  });
const searchGenreResult=gameList.filter((game)=>{

  return (game.hasOwnProperty('genre')&&game.genre.toLowerCase().includes(searchGenre.toLowerCase()))  
})
console.log(searchGenreResult);

  return <></>;
}

export default Function;
