import React from "react";

const Card = ({data}) => {
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <img src={data.urlToImage} />
                </div>
                <div className="card-content">
                    <h1 className="card-title">{data.title}</h1>
                    <h3 className="card-source">{data.source.name}{data.publishedAt}</h3>
                    <p className="card-desc">{data.description}</p>
                </div>
            </div>
        </>
    )
}
export default Card;