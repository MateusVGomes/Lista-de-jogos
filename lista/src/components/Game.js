import axios from 'axios';
function Game() {

axios.get('https://games-test-api-81e9fb0d564a.herokuapp.com/api/data', {
  headers: {
    'Content-Type': 'application/json',
    'dev-email-address': 'mateus.vasc.gomes@gmail.com'
  }
})
  .then(response => {
    let data=response.data;
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
    return <div>me da o cubo</div>;
}
export default Game;
