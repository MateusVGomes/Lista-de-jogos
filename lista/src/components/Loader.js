import { useState, useEffect } from "react";

function Loader(props){

    return props.isLoading?<div className='loader'><h1>Carregando...</h1></div>:<div></div>
}
export default Loader