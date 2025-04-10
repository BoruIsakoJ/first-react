function Main(){
    return(
        
        <section>
            <p>Hello World... Welcome to my first React Page<span><img id="react-logo" style={{marginLeft:"20px", width:"25px"}} src="src/assets/react.svg"/></span></p>
            <a href="#section1"><button onClick={(event) =>console.log(event.target)}>Get Started</button></a>
            
        </section>
        
    )
}

export default Main