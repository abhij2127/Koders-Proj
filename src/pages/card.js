import {Outlet, Link} from "react-router-dom";
import APieChart from "./piechart.js";
function CardHead(props){
  return(
    <>
    <div id="cardhead">
    <h2>{ props.heading }</h2>
    </div>
    </>
  );
}
export default CardHead;
