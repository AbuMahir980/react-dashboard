import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Userprofile from "./datas/Userprofile";

const Projects = (props) => {
    const {user} = props
    return(
        <>
            <div>
                <Header user={Userprofile}/>
                <Sidebar />
                <main>
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
                                <td>1</td>
                                <td>Project Alpha</td>
                                <td>Lorem ipsum dolor sit amet.</td>
                                <td>Active</td>
                                <td>2023-01-10</td>
                                <td>2023-05-30</td>
                                <td>Alice Johnson</td>
                                </tr>
                                <tr>
                                <td>2</td>
                                <td>Project Beta</td>
                                <td>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
                                <td>Completed</td>
                                <td>2023-02-15</td>
                                <td>2023-04-25</td>
                                <td>Bob Smith</td>
                                </tr>
                                {/* <!-- Add more rows for additional project data --> */}
                            </tbody>
                        </table>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Projects