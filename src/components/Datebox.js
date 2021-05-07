import React from 'react'




const Datebox = () => {

    const Datefinder = (d) => {
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
        'September', 'October', 'November', 'December'];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day}, ${date} ${month} ${year}`

}
    return (
        <div>
            <div className="location">Dallas, Texas</div>
                <div className="date">
                    {Datefinder(new Date())}
                </div>
        </div>
    )
}

export default Datebox
