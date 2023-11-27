import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Userprofile from "./datas/Userprofile";
import { projectsData } from "./datas/Projects";

const Projects = (props) => {
    const {user} = props
    return(
        <>
            <div>
                <Header user={Userprofile}/>
                <Sidebar />
                <main className="contents">
                    <div className="content-min">
                        <h2>Project Data</h2>

                        <table>
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Manager</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* <!-- Replace the content inside the tbody with your dynamic project data --> */}
                                <tr>
                                    <td>{projectsData[0].id}</td>
                                    <td>{projectsData[0].name}</td>
                                    <td>{projectsData[0].description}</td>
                                    <td>{projectsData[0].status}</td>
                                    <td>{projectsData[0].startDate}</td>
                                    <td>{projectsData[0].endDate}</td>
                                    <td>{projectsData[0].manager}</td>
                                </tr>
                                
                                <tr>
                                    <td>{projectsData[1].id}</td>
                                    <td>{projectsData[1].name}</td>
                                    <td>{projectsData[1].description}</td>
                                    <td>{projectsData[1].status}</td>
                                    <td>{projectsData[1].startDate}</td>
                                    <td>{projectsData[1].endDate}</td>
                                    <td>{projectsData[1].manager}</td>
                                </tr>
                                <tr>
                                    <td>{projectsData[2].id}</td>
                                    <td>{projectsData[2].name}</td>
                                    <td>{projectsData[2].description}</td>
                                    <td>{projectsData[2].status}</td>
                                    <td>{projectsData[2].startDate}</td>
                                    <td>{projectsData[2].endDate}</td>
                                    <td>{projectsData[2].manager}</td>
                                </tr>
                                <tr>
                                    <td>{projectsData[3].id}</td>
                                    <td>{projectsData[3].name}</td>
                                    <td>{projectsData[3].description}</td>
                                    <td>{projectsData[3].status}</td>
                                    <td>{projectsData[3].startDate}</td>
                                    <td>{projectsData[3].endDate}</td>
                                    <td>{projectsData[3].manager}</td>
                                </tr>
                                <tr>
                                    <td>{projectsData[4].id}</td>
                                    <td>{projectsData[4].name}</td>
                                    <td>{projectsData[4].description}</td>
                                    <td>{projectsData[4].status}</td>
                                    <td>{projectsData[4].startDate}</td>
                                    <td>{projectsData[4].endDate}</td>
                                    <td>{projectsData[4].manager}</td>
                                </tr>
                                <tr>
                                    <td>{projectsData[5].id}</td>
                                    <td>{projectsData[5].name}</td>
                                    <td>{projectsData[5].description}</td>
                                    <td>{projectsData[5].status}</td>
                                    <td>{projectsData[5].startDate}</td>
                                    <td>{projectsData[5].endDate}</td>
                                    <td>{projectsData[5].manager}</td>
                                </tr>
                                <tr>
                                    <td>{projectsData[6].id}</td>
                                    <td>{projectsData[6].name}</td>
                                    <td>{projectsData[6].description}</td>
                                    <td>{projectsData[6].status}</td>
                                    <td>{projectsData[6].startDate}</td>
                                    <td>{projectsData[6].endDate}</td>
                                    <td>{projectsData[6].manager}</td>
                                </tr>
                                <tr>
                                    <td>{projectsData[7].id}</td>
                                    <td>{projectsData[7].name}</td>
                                    <td>{projectsData[7].description}</td>
                                    <td>{projectsData[7].status}</td>
                                    <td>{projectsData[7].startDate}</td>
                                    <td>{projectsData[7].endDate}</td>
                                    <td>{projectsData[7].manager}</td>
                                </tr>
                                <tr>
                                    <td>{projectsData[8].id}</td>
                                    <td>{projectsData[8].name}</td>
                                    <td>{projectsData[8].description}</td>
                                    <td>{projectsData[8].status}</td>
                                    <td>{projectsData[8].startDate}</td>
                                    <td>{projectsData[8].endDate}</td>
                                    <td>{projectsData[8].manager}</td>
                                </tr>
                                {/* <tr>
                                    {/* <td>{projectsData[9].id}</td>
                                    <td>{projectsData[9].name}</td>
                                    <td>{projectsData[9].description}</td>
                                    <td>{projectsData[9].status}</td>
                                    <td>{projectsData[9].startDate}</td>
                                    <td>{projectsData[9].endDate}</td>
                                    <td>{projectsData[9].manager}</td> */}
                                {/* </tr> */} 
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

export default Projects