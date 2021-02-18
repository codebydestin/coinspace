import HeaderTitle from "./shared/headerTitle";
import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

const MarketChart = (props) => {
  const { assets } = props;

  function fetchData() {
    const data = [];

    for (const asset of assets) {
      const month = asset.metrics.roi_data.percent_change_last_1_month.toFixed(
        2
      );
      const week = asset.metrics.roi_data.percent_change_last_1_week.toFixed(2);

      let obj = {
        name: asset.name,
        symbol: asset.symbol,
        month: month,
        week: week,
        amt: month,
      };
      data.push(obj);
    }

    return data;
  }

  return (
    <div className='box col-2-3'>
      <ResponsiveContainer>
        <BarChart
          data={fetchData()}
          stackOffset='sign'
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 5,
          }}>
          <CartesianGrid />
          <XAxis dataKey='symbol' />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar
            dataKey='week'
            stackId='a'
            fill='#8884d8'
            background={{ fill: "#f9f9f9" }}
          />
          <Bar dataKey='month' stackId='a' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MarketChart;
