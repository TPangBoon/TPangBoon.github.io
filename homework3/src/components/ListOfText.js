    const ListOfText = ({list1,list2,list3,list4,list5}) => {
        return(
            <p style={{
                fontSize:"18px", 
                fontWeight:"normal", 
                padding:"0%", 
                margin:"0%",
                marginTop:"-20px",
                fontFamily:"Roboto", 
                color:"black",
                textAlign:"left",

                }}>

                <p> {list1} </p>
                <p> {list2} </p>
                <p> {list3} </p>
                <p> {list4} </p>
                <p> {list5} </p>
            </p>
        )
    }
    ListOfText.defaultProps = {
        list1:"",
        list2:"",
        list3:"",
        list4:"",
        list5:"",
    }


export default ListOfText;