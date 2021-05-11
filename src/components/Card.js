import React from 'react'

// For 5-day forecast
function Card(title, imageUrl, body) {
    return (
        <div className="card-container">
            <div className="date">

            </div>
            <div className="temp">
                
            </div>
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
        </div>
    )
}

export default Card
