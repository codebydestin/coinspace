import React, { Fragment } from "react";
import HeaderTitle from "./tableComponent/headerTitle";
import calcValue from "./shared/utils";

const MarketCapView = (props) => {
  const { assets } = props;

  return (
    <Fragment>
      <div className='box col-2'>
        <HeaderTitle title='Market Analysis' />
        <table className='table-data'>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Market Cap (%)</th>
              <th>Volume (USD)</th>
              <th>ROI (Month)</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id}>
                <td className='heavy-text'>{asset.symbol}</td>
                <td>
                  <progress
                    className='table-progress'
                    max='100'
                    value={
                      asset.metrics.marketcap.marketcap_dominance_percent
                    }></progress>
                  {asset.metrics.marketcap.marketcap_dominance_percent.toFixed(
                    2
                  )}{" "}
                  %
                </td>
                <td className='heavy-text'>
                  $ {asset.metrics.marketcap.current_marketcap_usd.toFixed(2)}
                </td>
                <td className='positive-text'>
                  {calcValue(
                    asset.metrics.roi_data.percent_change_last_1_month.toFixed(
                      2
                    )
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default MarketCapView;
