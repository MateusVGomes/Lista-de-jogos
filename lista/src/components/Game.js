function Game(props) {
  return (
    <div className="gameCard">
      <img
        src={props.gameList.thumbnail}
        alt={"Imagem do jogo:" + props.gameList.title}
      />
      <div className="content">
        <div className="title">{props.gameList.title}</div>
        <div className="subtitle">{props.gameList["short_description"]}</div>
        <div className="subtitle">{props.gameList.platform}</div>
        <div className="date">{props.gameList["release_date"]}</div>
        <div class="tags">
          <div class="tag">{props.gameList.genre}</div>
        </div>
      </div>
    </div>
  );
}

export default Game;
