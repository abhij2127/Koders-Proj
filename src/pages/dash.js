import {Outlet, Link} from "react-router-dom";
import APieChart from "./piechart.js";
import AreaChart from "./area-charts.js";
import CardHead from "./card.js";
import StatChart from "./stats.js";

const Dashboard = () => {
  return(
    <>
    <div id="dashboard-cons">
    <div className="dashHead">Dashboard<br /><span id="I"><b>Blog Overview</b><br /></span></div>
    <div id="head-stat-mini">

    <li><AreaChart coords={[["Day",""],["1",100],["2",200],["3",150],["4",180],[5,120],[6,180],[7,190],[8,90]]} /></li>
    <li><AreaChart coords={[["Day",""],["1",100],["2",200],["3",150],["4",180],[5,120],[6,180],[7,190],[8,90]]} /></li>
    <li><AreaChart coords={[["Day",""],["1",100],["2",200],["3",150],["4",180],[5,120],[6,180],[7,190],[8,90]]} /></li>
    <li><AreaChart coords={[["Day",""],["1",100],["2",200],["3",150],["4",180],[5,120],[6,180],[7,190],[8,90]]} /></li>

    </div>
    <div id="stat-main">
    <CardHead heading="Users Overview" />
    <StatChart />
    </div>

    <div id="stat-right">
    <CardHead heading="Users by Device" />
    <div id ="pie-stat">

    <APieChart />
    </div>
    </div>

    </div>
    <Outlet />
    </>
  );

}
export default Dashboard;
