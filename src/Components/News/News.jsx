import React from "react";
import NewsItem from "./NewsItem/NewsItem";

const News = (props)=>{
let news = props.state.map(n=><NewsItem name={n.name}/>)
    return(
      <div>
          {news}
      </div>
    )
}

export default News