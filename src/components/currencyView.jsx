import HeaderTitle from "./tableComponent/headerTitle";
import calcValue from "./shared/utils";

function formatValue(value) {
  if (value === null) return 0.0;
  return value.toFixed(2);
}

const CurrencyView = (props) => {
  const { assets } = props;

  return (
    <div className='box col-2'>
      <HeaderTitle title='Price Analysis' />
      <table className='table-data'>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>All Time High</th>
            <th>Change (24hrs)</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td className='heavy-text'>{asset.symbol}</td>
              <td>
                <a href='#'>{asset.name}</a>
              </td>
              <td className='heavy-text'>
                $ {asset.metrics.market_data.price_usd.toFixed(2)}
              </td>
              <td>$ {formatValue(asset.metrics.all_time_high.price)}</td>
              <td>
                {calcValue(
                  asset.metrics.market_data.percent_change_usd_last_24_hours.toFixed(
                    2
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CurrencyView;
