import Game from './Game';

function GameList(props){
return (<div className="gamesBox"> {props.gameList.map((game)=>{
    return <Game gameList={game} />;
})}</div>);
}
export default GameList