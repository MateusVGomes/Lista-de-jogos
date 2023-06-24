function Game(props) {
  return (
    <div className="gameCard">
      <img
        src={props.firstGame.thumbnail}
        alt={"Imagem do jogo:" + props.firstGame.title}
      />
      <p>{props.firstGame.title}</p>
    </div>
  );
}

export default Game;
