import React from 'react'
import Card from '../UI/Card'
import classes from "./ShowGifs.module.css"

const ShowGifs = (props) => {
    const gifItems = props.gifData.map((item) => {
    return(  
    <Card className={classes.gif} key={item.id}>
        <img src={`${item.images.downsized_medium.url}`}></img>
        <p>{item.title}</p>
    </Card>)
})
    // console.log("showgif", props.gifData);
    // console.log("showgif", gifItems);
    return (
        <div className={classes.giflist}>
            
            {gifItems.length > 0 ? gifItems : <h2>Please search for something!!</h2>}
           
        </div>
    )
}

export default ShowGifs
