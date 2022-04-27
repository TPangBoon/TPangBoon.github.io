const Button = ({color, text}) => {

    return(
        <button style={{background: color}}>
            {text}
        </button>
    )
}
Button.defaultProps = {
    color: "white",
    text: "Default test",
}



export default Button