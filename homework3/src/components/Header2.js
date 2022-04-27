const Header2 =() => {

    return(
        <header style={{padding:"0%", background:"#FC4A1A"}} className="header">          
            <button style={buttonStyle}><a style={linkStyle} href={"#education"}> Personal  </a></button>
            <button style={buttonStyle}><a style={linkStyle} href={"#education"}> Education </a></button>
            <button style={buttonStyle}><a style={linkStyle} href={"#cca"}>       CCA       </a></button>
            <button style={buttonStyle}><a style={linkStyle} href={"#work"}>      Work      </a></button>
            <button style={buttonStyle}><a style={linkStyle} href={"#skill"}>     Skills    </a></button>
        </header>
    )
}

Header2.defaultProps = {
}

//CSS in JS
const buttonStyle ={
    type:"button",
    fontSize:"120%",
    margin:"1%",
    padding:"1.9%", 
    backgroundColor:"rgba(255, 255, 255,0.5)",
    borderColor:"white",
    borderRadius:"50px",
    height:"80px",
    width:"150px",
    fontWeight: "800",
    marginLeft:"30px",
    marginRight:"30px",
    borderWidth: "1px"
}


const linkStyle ={
    textDecoration:"none", 
    color:"white",
}


export default Header2;