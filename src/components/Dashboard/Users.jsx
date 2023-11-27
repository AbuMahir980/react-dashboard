import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Userprofile from "./datas/Userprofile"
import HeadShot from '../../assets/Qudus-Lawal_head-shot.png'
import '../../css/users.css'

const Users = (props) => {
    const {user} = props;

    return(
        <>
            <div className="contents">
                <Header user={Userprofile}/>
                <Sidebar />
                <main className="content">
                    <div className="contents">
                        <img src={HeadShot} alt={`HeadShot of ${user.fullName}`}  style={{width: user.imageSize, height: user.imageSize, borderRadius: 100}}/>
                    </div>
                    <div>
                        <div>
                            Name:
                            <h4 className="colors">{user.fullName}</h4>
                        </div>
                        <div>
                            Username:
                            <h4 className="colors">{user.username}</h4>
                        </div>
                        <div>
                            Email:
                            <h4 className="colors">{user.email}</h4>
                        </div>
                        <div>
                            Bio:
                            <h4 className="colors">{user.bio}</h4>
                        </div>
                        <div>
                            Role:
                            <h4 className="colors">{user.role}</h4>
                        </div>
                        <div>
                            Joined:
                            <h4 className="colors">{user.joinedAt}</h4>
                        </div>
                        <div>
                            Last Seen:
                            <h4 className="colors">{user.lastLogin}</h4>
                        </div>
                        <div>
                            Socials:
                            <h4 className="colors">Twitter: {user.socialLinks.twitter}</h4>
                            <h4 className="colors">LinkedIn: {user.socialLinks.linkedIn}</h4>
                            <h4 className="colors">Twitter{user.socialLinks.github}</h4>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Users