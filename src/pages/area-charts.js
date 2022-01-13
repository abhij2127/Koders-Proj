import { Chart } from "react-google-charts";
import {Outlet, Link} from "react-router-dom";
//import SideNav from "./sidenav.js";
import "./mys.css"
//data={[["Day","Posts"],["1",100],["2",200],["3",150],["4",500]]}

const AreaChart = (props) => {
  return(
    <>
    <Chart
      chartType="AreaChart"
      data={props.coords}
      width="200px"
      height="100px"
      options={{ height: 100, legend: {position: "none", maxLines: 0},
      vAxis: {ticks:[],},hAxis:{ticks:[],},}}
      legendToggle
    />
    <Outlet />
    </>
  );
}
export default AreaChart;
