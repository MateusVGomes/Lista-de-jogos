function Game(props) {
  return <div className='gamesBox'>
  <div className='gameCard'><img src={props.firstGame.thumbnail} alt={'Imagem do jogo:'+props.firstGame.title} /><p>{props.firstGame.title}</p>   </div>
  <div className='gameCard'><img src={props.firstGame.thumbnail} alt={'Imagem do jogo:'+props.firstGame.title} /><p>{props.firstGame.title}</p>   </div>
  <div className='gameCard'><img src={props.firstGame.thumbnail} alt={'Imagem do jogo:'+props.firstGame.title} /><p>{props.firstGame.title}</p>   </div> 
  <div className='gameCard'><img src={props.firstGame.thumbnail} alt={'Imagem do jogo:'+props.firstGame.title} /><p>{props.firstGame.title}</p>   </div>
  <div className='gameCard'><img src={props.firstGame.thumbnail} alt={'Imagem do jogo:'+props.firstGame.title} /><p>{props.firstGame.title}</p>   </div>
  <div className='gameCard'><img src={props.firstGame.thumbnail} alt={'Imagem do jogo:'+props.firstGame.title} /><p>{props.firstGame.title}</p>   </div>
  </div>;

}


export default Game;
