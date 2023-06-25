import { useState, useEffect } from "react";

function Loader(){
    const [isLoading,setIsLoading]=useState(false);
    
    return <div className='loader'><h1>Carregando...</h1></div>
}
export default Loader