const Header =({title}) => {

    return(
        <header style={{padding:"0%"}} className="header">          

            <button style={buttonStle}><a style={Astyle} href={"#education"}> YT</a></button>
            <button style={buttonStle}><a style={Astyle} href={"#education"}> TW</a></button>        
            <button style={buttonStle}><a style={Astyle} href={"#education"}> FB</a></button>
            <button style={buttonStle}><a style={Astyle} href={"#education"}> IG</a></button>

            <h1 style={headingStyle}> {title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: "TITLE Default",
}

//CSS in JS
const headingStyle = {
    color:"black", 
    backgroundColor:'#FC4A1A',
    textAlign:"left",
    padding:"1%",
    margin:"0%",
    textShadow: "2px 2px 3px white",
}

const buttonStle ={
    float:"right", 
    type:"button",
    fontSize:"120%",
    margin:"0%",
    padding:"1.9%", 
    backgroundColor:"#FC4A1A",
    borderColor:"gray",
    borderRadius:"50%",
    height:"67px",
    width:"70px",
    fontWeight: "bold",
    marginLeft:"0.5%",
    marginRight:"0.5%",
}
const Astyle ={
    textDecoration:"none", 
    color:"black",
}




export default Header;