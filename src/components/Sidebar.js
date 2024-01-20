function Sidebar(props){
    const side = {
        background : "red",
        width : "calc(300% - 100px)",
        marginLeft : "500px",
        marginDown : "400px"
    }
    return(
        <aside style={side}
        className="style">
            <h1>{props.name1}</h1>
        </aside>
    )
}
export default Sidebar