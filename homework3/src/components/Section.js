const Section =({date,title,sideNote, paragraph,paragraph2,paragraph3, color,backgroundColor,Image}) => {

    return(
        <header style={{textAlign:"left",position:"relative", fontFamily:"Roboto"}}>
            <h2 style={{
                color:color, 
                backgroundColor:backgroundColor,
                marginTop:"0", marginBottom:"0",
                marginLeft:"3%", marginRight:"3%",
                padding:"3%",
                lineHeight:"20%",
                boxShadow:"15px 15px 10px",
                }}> 
                <p> {date}</p>
                <p> {title} </p>
                <p> {sideNote}</p>
                <br/>
                <p style={{fontSize:"18px", fontWeight:"normal"}}> {paragraph} </p>
                <p style={{fontSize:"18px", fontWeight:"normal"}}> {paragraph2} </p>
                <p style={{fontSize:"18px", fontWeight:"normal"}}> {paragraph3} </p>

                <p style={{
                    top: "0%",
                    left: "75%", 
                    position:"absolute", 
                    backgroundColor:"transparent"
                    }}> 
                    
                    <img style={{width:"70%"}}  src={Image} alt=""/> </p>
            </h2>
        
        </header>
    )
}

Section.defaultProps = {
    title: "TITLE Default",
    color:"Black", 
    backgroundColor:'Yellow',
    date: "DATE",
    sideNote:"sidenote(GPA)",
    paragraph:"paragraph",
    paragraph2: "",
    paragraph3: "",
    image: "//:0",
}

export default Section;