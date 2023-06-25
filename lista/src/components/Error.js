function Error(props){
    console.log(props.error)
    return <div className='error'><h1>{props.error}</h1><button>Atualizar página</button></div>
}
export default Error