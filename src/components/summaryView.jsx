import HeaderTitle from "./tableComponent/headerTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faCaretSquareLeft,
  faCaretSquareRight,
} from "@fortawesome/free-solid-svg-icons";

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

  function formatSymbol(value) {
    if (value > 0)
      return (
        <span className='stat-h1 color-success'>
          <FontAwesomeIcon icon={faCaretUp} /> {value}%
        </span>
      );

    return (
      <span className='stat-h1 color-warning'>
        <FontAwesomeIcon icon={faCaretDown} /> {value}%
      </span>
    );
  }

  return (
    <div className='box col-3'>
      <HeaderTitle title={`${asset.name} Summary`} />
      <ul className='segment-control'>
        <li className='control-item'>
          <button
            disabled={assetIndex === 0}
            onClick={() => setAssetIndex(assetIndex - 1)}>
            <FontAwesomeIcon icon={faCaretSquareLeft} />
          </button>
        </li>
        <li className='control-item'>
          <button
            disabled={assetIndex === assets.length - 1}
            onClick={() => setAssetIndex(assetIndex + 1)}>
            <FontAwesomeIcon icon={faCaretSquareRight} />
          </button>
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
          {formatSymbol(
            asset.metrics.market_data.percent_change_usd_last_24_hours.toFixed(
              2
            )
          )}
        </h1>
      </div>

      <ul className='stats-list'>
        <li>
          <span className='stat-title'>Open</span>$
          {asset.metrics.market_data.ohlcv_last_24_hour.open.toFixed(2)}
        </li>
        <li>
          <span className='stat-title'>High</span>
          <span className='stat-icon stat-icon-success'>
            <FontAwesomeIcon icon={faCaretUp} />
          </span>
          ${asset.metrics.market_data.ohlcv_last_24_hour.high.toFixed(2)}
        </li>
        <li>
          <span className='stat-title'>Low</span>
          <span className='stat-icon stat-icon-danger'>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
          ${asset.metrics.market_data.ohlcv_last_24_hour.low.toFixed(2)}
        </li>
        <li>
          <span className='stat-title'>Close</span> $
          {asset.metrics.market_data.ohlcv_last_24_hour.close.toFixed(2)}
        </li>
      </ul>
    </div>
  );
};

export default SummaryView;
