import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Userprofile from "./data/data";
import { eventsData } from "./data/EventsData";

const Events = (props) => {
    const {user} = props
    return(
        <>
            <div>
                <Header user={Userprofile}/>
                <Sidebar />
                <main className="contents">
                    <div className="content-min">
                        <h2>Events</h2>

                        <table>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Date</th>
                                <th>Event Name</th>
                                <th>Event Description</th>
                                <th>Location</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* <!-- Replace the content inside the tbody with your dynamic project data --> */}
                                <tr>
                                    <td>{eventsData[0].id}</td>
                                    <td>{eventsData[0].date}</td>
                                    <td>{eventsData[0].eventName}</td>
                                    <td>{eventsData[0].eventDescription}</td>
                                    <td>{eventsData[0].location}</td>
                                </tr>
                                
                                <tr>
                                    <td>{eventsData[1].id}</td>
                                    <td>{eventsData[1].date}</td>
                                    <td>{eventsData[1].eventName}</td>
                                    <td>{eventsData[1].eventDescription}</td>
                                    <td>{eventsData[1].location}</td>
                                </tr>
                                <tr>
                                    <td>{eventsData[2].id}</td>
                                    <td>{eventsData[2].date}</td>
                                    <td>{eventsData[2].eventName}</td>
                                    <td>{eventsData[2].eventDescription}</td>
                                    <td>{eventsData[2].location}</td>
                                </tr>
                                <tr>
                                    <td>{eventsData[3].id}</td>
                                    <td>{eventsData[3].date}</td>
                                    <td>{eventsData[3].eventName}</td>
                                    <td>{eventsData[3].eventDescription}</td>
                                    <td>{eventsData[3].location}</td>
                                </tr>
                                <tr>
                                    <td>{eventsData[4].id}</td>
                                    <td>{eventsData[4].date}</td>
                                    <td>{eventsData[4].eventName}</td>
                                    <td>{eventsData[4].eventDescription}</td>
                                    <td>{eventsData[4].location}</td>
                                </tr>

                                {/* <!-- Add more rows for additional project data --> */}
                            </tbody>
                        </table>
                    </div>
                        
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Events