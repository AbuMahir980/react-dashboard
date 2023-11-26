import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Userprofile from "./datas/Userprofile";

const Dashboard = (props) => {

    const {user} = props
    // console.log(user.username)
    return(
        <>
            <div id="contents">
                <Header user={Userprofile}/>
                <Sidebar />
                <main>
                    <div>
                        <img src="" alt="" />
                        <h3></h3>

                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Dashboard