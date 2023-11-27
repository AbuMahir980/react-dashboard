// import { eventsData } from "../data/EventsData";

const EventsTable = ({id,date,eventName,eventDescription,location}) => {
    
    return(
        <>
            <tr>
                <td>{id}</td>
                <td>{date}</td>
                <td>{eventName}</td>
                <td>{eventDescription}</td>
                <td>{location}</td>
            </tr>
        </>
    )
}

export default EventsTable