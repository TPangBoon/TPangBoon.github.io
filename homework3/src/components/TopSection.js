const TopSection =({Image,text}) => {
    return(
        <p style={{position:"relative", width:"100%",height:"400px",backgroundColor:"black", margin:"0%"}}>
            
            <p style={{position:"absolute", width:"50%",height:"100%",zIndex:"1", margin:"0%",backgroundColor:"#DFDCE3",left:"50%",}}> </p>
            <p style={{position:"absolute", width:"50%",height:"100%",zIndex:"1",margin:"0%",backgroundColor:"#44AABB"}}>  
                <img style={{width:"40%",height:"80%",paddingTop:"5%"}}  src={Image} alt=""/>  
            </p>

            <p style={{position:"absolute", width:"50%",height:"80%",backgroundColor:"#F7B733",top:"5%", left:"47%",zIndex:"2", boxShadow:"15px 15px 10px"}}> 
                <p style={{textAlign:"left", paddingLeft:"10%", paddingTop:"2%", paddingRight:"10%", overflow:"auto", lineHeight:"25px",}}> 
                    <h2> About Me </h2> <br/> {text}  
                </p>
            </p>
        </p>   
    )
}
TopSection.defaultProps = {
    image: "//:0",
    text:"",
}
export default TopSection;