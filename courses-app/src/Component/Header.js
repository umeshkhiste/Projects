import React from "react"

function Header({name, title}){
    return(
    <div style={{background:"skyblue", padding:10, width:250}}>
        <h1> {name}</h1>
        <h1> {title}</h1>
    </div>
    );
}
export default Header;