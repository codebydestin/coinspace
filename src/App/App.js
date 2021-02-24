import { Fragment, useState, useEffect } from "react";
import CurrencyView from "../components/currencyView";
import MarketCapView from "../components/marketCapView";
import MarketChart from "../components/marketChart";
import SummaryView from "../components/summaryView";
import SideBar from "../components/sideBar";
import config from "../config.json";
import axios from "axios";
import "./App.scss";

function App() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const results = await axios.get(config.apiEndPoint);
    setAssets(results.data);
  };

  const renderViews = () => {
    if (!assets.data) return <p className='loading'>Loading...</p>;
    return (
      <Fragment>
        <SideBar assets={assets.data} />
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
            <a
              target='_blank'
              href='https://github.com/destinprojects/coinspace/'>
              Github
            </a>
          </li>
          <li>
            <a target='_blank' href='https://destinprojects.github.io/'>
              About Developer
            </a>
          </li>
        </ul>
      </header>

      <div className='container'>{renderViews()}</div>
    </Fragment>
  );
}

export default App;
