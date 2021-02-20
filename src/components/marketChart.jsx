import HeaderTitle from "./tableComponent/headerTitle";
import React, { Fragment } from "react";
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
    <Fragment>
      <div className='box col-2-3'>
        <HeaderTitle title='Percentage Returns  - (Return On Investment) %' />
        <h2 className='box-description'>
          Percentage ROI for previous Month/Week
        </h2>
        <div className='chart-container'>
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
                fill='#6064cc'
                background={{ fill: "#f9f9f9" }}
              />
              <Bar dataKey='month' stackId='a' fill='#60dba6' />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Fragment>
  );
};

export default MarketChart;
