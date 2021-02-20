import HeaderTitle from "./tableComponent/headerTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import { useState } from "react";

const SummaryView = (props) => {
  const { assets } = props;
  const [assetIndex, setAssetIndex] = useState(0);

  const asset = assets[assetIndex];

  const data = [
    {
      name: "Low",
      uv: 31.47,
      pv: 2400,
      fill: "#e65a47",
    },
    {
      name: "Close",
      uv: 26.69,
      pv: 4567,
      fill: "#f58d42",
    },
    {
      name: "Open",
      uv: 15.69,
      pv: 1398,
      fill: "#2cb0e8",
    },
    {
      name: "High",
      uv: 8.22,
      pv: 9800,
      fill: "#60dba6",
    },
  ];

  const style = {
    top: 88,
    left: 300,
    lineHeight: "24px",
  };

  return (
    <div className='box col-3'>
      <HeaderTitle title={`${asset.name} Summary`} />
      <ul className='segment-control'>
        <li className='control-item'>
          <button className='active'>1 Hr</button>
        </li>
        <li className='control-item'>
          <button>24 Hrs</button>
        </li>
      </ul>

      <RadialBarChart
        width={480}
        height={300}
        cx={150}
        cy={150}
        innerRadius={40}
        outerRadius={140}
        barSize={16}
        data={data}>
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey='uv'
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout='vertical'
          verticalAlign='middle'
          wrapperStyle={style}
        />
      </RadialBarChart>

      <div className='stats-description'>
        <p>Bitcoin current price (USD)</p>
        <h1>
          ${asset.metrics.market_data.price_usd.toFixed(2)}
          <span className='stat-h1'>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            {asset.metrics.market_data.percent_change_usd_last_1_hour.toFixed(
              2
            )}
            %
          </span>
        </h1>
      </div>

      <ul className='stats-list'>
        <li>
          <span className='stat-title'>Open</span>$
          {asset.metrics.market_data.ohlcv_last_1_hour.open.toFixed(2)}
        </li>
        <li>
          <span className='stat-title'>High</span>
          <span className='stat-icon stat-icon-success'>
            <FontAwesomeIcon icon={faCaretUp} />
          </span>
          ${asset.metrics.market_data.ohlcv_last_1_hour.high.toFixed(2)}
        </li>
        <li>
          <span className='stat-title'>Low</span>
          <span className='stat-icon stat-icon-danger'>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
          ${asset.metrics.market_data.ohlcv_last_1_hour.low.toFixed(2)}
        </li>
        <li>
          <span className='stat-title'>Close</span> $
          {asset.metrics.market_data.ohlcv_last_1_hour.close.toFixed(2)}
        </li>
      </ul>
    </div>
  );
};

export default SummaryView;
