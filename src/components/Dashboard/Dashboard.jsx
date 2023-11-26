import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Userprofile from "./datas/Userprofile";
import Chart from '../../assets/dashboard-chart.png';
import Barchart from '../../assets/dashboard-barchart.png';
import Graph from '../../assets/dashboard-graph1.png';
import Piechart from '../../assets/dashboard-piechart.png';


const Dashboard = (props) => {

    const {user} = props
    // console.log(user.username)
    return(
        <>
            <div id="contents">
                <Header user={Userprofile}/>
                <Sidebar />
                <main className="content">
                    <div className="content-mini">
                        <h1>Key Performance Metrics</h1>
                    <div>
                        <img src={Chart} alt="dashboard-chart" />
                    </div>
                    <div className="mini-content">
                        <div>
                            <img src={Barchart} alt="dashboard-chart" />
                        </div>
                        <div>
                            <img src={Graph} alt="dashboard-chart" />
                        </div>
                        <div>
                            <img src={Piechart} alt="dashboard-chart" />
                        </div>
                    </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Dashboard