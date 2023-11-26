import { Link } from "react-router-dom"

const Sidebar = () => {
    return(
        <>
            <div className="sidebar">
                <ul>
                    <li> <Link to="/dashboard" className="sidebar-list-item" href="#0"> <i className="fas fa-home icon"></i><em>Dashboard</em></Link></li>
                    <li> <Link to="/dashboard/users" className="sidebar-list-item" href="#0"> <i className="fas fa-user icon"></i><em>Users</em></Link></li>
                    <li> <Link to='/dashboard/projects' className="sidebar-list-item" href="#0"> <i className="fas fa-tasks icon"></i><em>Projects</em></Link></li>
                    <li> <Link to='/dashboard/events' className="sidebar-list-item active" href="#0"> <i className="fas fa-calendar icon"></i><em>Events</em></Link></li>
                    <li> <Link to='/dashboard/preferences' className="sidebar-list-item" href="#0"> <i className="fas fa-toolbox icon"></i><em>Preferences</em></Link></li>
                    <li> <Link to='/dashboard/feedback' className="sidebar-list-item" href="#0"> <i className="fas fa-comments icon"></i><em>Feedback</em></Link></li>
                    <li> <Link to='/dashboard/suggestions' className="sidebar-list-item" href="#0"> <i className="fas fa-lightbulb icon"></i><em>Suggestions</em></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar