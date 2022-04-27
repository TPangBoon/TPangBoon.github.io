const Divider =({title,image,ID}) => {

    return(
        <header>
            <p id={ID} style={dividerStyle}>
                <img style={{width:"100%"}}  src={image} alt=""/>
                <h1 style={{
                    color:"white", 
                    position:"absolute", 
                    top: "50%",left: "50%",
                    transform: "translate(-50%, -100%)", 
                    fontSize:"100px",
                    textShadow:"2px 2px 10px black",

                    }}>
                {title}
                </h1>
            </p>
        </header>
    )
}

Divider.defaultProps = {
    title: "TITLE Default",
    image: "//:0",
}

//CSS in JS
const dividerStyle = {
    position:"relative", 
    marginTop:"3%",
    marginBottom:"3%",
}

export default Divider;