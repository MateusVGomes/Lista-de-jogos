function Function(props){
let searchWord='War';
let gameList=props.gameList;
const searchResult=gameList.filter((game)=>{
    return game.hasOwnProperty('title')&&game.title.toLowerCase().includes(searchWord.toLowerCase());
})

return<></>

}

export default Function