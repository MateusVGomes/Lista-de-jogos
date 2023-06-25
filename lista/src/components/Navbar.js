import Pesquisa from './Pesquisa'
function NavBar(props){
return <div className='navBar'>

          <Pesquisa completeGameList={props.completeGameList} updateGameList={props.updateGameList}  />
</div>

}
export default NavBar