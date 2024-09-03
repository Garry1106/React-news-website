import React, { useEffect, useState } from "react";
import Card from "../Component/Card";

const Main = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=India&apiKey=319f6625c4de4d569b0edc94d88f1592`
    );
    const variable = await response.json();
    console.log(variable.articles);
    setData(variable.articles);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      {data.map((item)=>{
        return(
          <Card key={item.id} data={item}/>
        )
      })}
    </div>
  );
};
export default Main;
