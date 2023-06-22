function Game(props) {
  console.log(props.firstGame);
  return <div className='gamesBox'>
  <div className='gameCard'>os usuários são: {props.firstGame.title}</div>
  <div className='gameCard'>os usuários são: {props.firstGame.title}</div>
  <div className='gameCard'>os usuários são: {props.firstGame.title}</div>
  
  <div className='gameCard'>os usuários são: {props.firstGame.title}</div>
  <div className='gameCard'>os usuários são: {props.firstGame.title}</div>
  <div className='gameCard'>os usuários são: {props.firstGame.title}</div>
  </div>;

}


export default Game;
