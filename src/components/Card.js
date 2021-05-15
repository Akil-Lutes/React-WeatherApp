import React from 'react'

// For 5-day forecast
function Card(title, imageUrl, body) {
    return (
        <div className="card-container border-2 border-yellow-600 p-4">
            <div className="date">
                Saturday
            </div>
            <div className="image-container">
                <img src={imageUrl} alt=""/>
            </div>
            <div className="temp">
                Cool
            </div>
        </div>
    )
}

export default Card
