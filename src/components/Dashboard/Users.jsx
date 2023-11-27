import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"
import Userprofile from "./datas/Userprofile"
import HeadShot from '../../assets/Qudus-Lawal_head-shot.png'

const Users = (props) => {
    const {user} = props;

    return(
        <>
            <div className="contents">
                <Header user={Userprofile}/>
                <Sidebar />
                <main className="content">
                    <div className="contents">
                        <img src={HeadShot} alt={`HeadShot of ${user.fullName}`}  style={{width: user.imageSize, height: user.imageSize}}/>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Users