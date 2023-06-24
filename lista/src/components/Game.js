function Game(props) {
  return (
    <div className="gameCard">
      <img
        src={props.firstGame.thumbnail}
        alt={"Imagem do jogo:" + props.firstGame.title}
      />
      <div className="content">
        <div className="title">{props.firstGame.title}</div>
        <div className="subtitle">{props.firstGame["short_description"]}</div>
        <div className="subtitle">{props.firstGame.platform}</div>
        <div className="date">{props.firstGame["release_date"]}</div>
        <div class="tags">
          <div class="tag">{props.firstGame.genre}</div>
        </div>
      </div>
    </div>
  );
}

export default Game;
