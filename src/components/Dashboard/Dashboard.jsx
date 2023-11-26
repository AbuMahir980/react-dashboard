import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
    return(
        <>
            <div id="contents">
                <Header />
                <Sidebar />
                <Footer />
            </div>
        </>
    )
}

export default Dashboard