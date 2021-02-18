import { Fragment, useState, useEffect } from "react";
import CurrencyView from "../components/currencyView";
import axios from "axios";
import "./App.scss";
import MarketCapView from "../components/marketCapView";
import MarketChart from "../components/marketChart";
import SummaryView from "../components/summaryView";

function App() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const results = await axios.get("https://data.messari.io/api/v2/assets");
    setAssets(results.data);
  };

  const renderViews = () => {
    if (!assets.data) return <p>Loading...</p>;
    return (
      <Fragment>
        <div className='grid-row'>
          <MarketChart assets={assets.data} />
          <SummaryView assets={assets.data} />
        </div>

        <div className='grid-row'>
          <CurrencyView assets={assets.data} />
          <MarketCapView assets={assets.data} />
        </div>
      </Fragment>
    );
  };

  return (
    <Fragment>
      <header className='main-header'>
        <hgroup className='left'>
          <h1>Coinverse</h1>
        </hgroup>

        <ul className='hor-navbar right'>
          <li>
            <a href='#'>Another link</a>
          </li>
          <li>
            <a href='#'>Github</a>
          </li>
          <li>
            <a href='#'>About Developer</a>
          </li>
        </ul>
      </header>

      <aside className='sidebar'></aside>

      <div className='container'>{renderViews()}</div>
    </Fragment>
  );
}

export default App;
