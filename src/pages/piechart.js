import {Outlet, Link} from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: 'Users by Device',
      data: [70, 10,20],
      backgroundColor: [
        'rgba(0,0,255,0.8)',
        'rgba(100,100,255, 0.8)',
        'rgba(145, 146, 255, 0.8)',
      ],
      borderColor: [

      ],
      borderWidth: 1,
    },
  ],

  labels: ["Desktop","Tablet","Mobile"],
};

export function APieChart() {
  return (
    <>
    <Pie data={data} option={[]}/>
    <Outlet />
    </>
  );
}
export default APieChart;
