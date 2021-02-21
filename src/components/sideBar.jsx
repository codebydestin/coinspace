import ReactTooltip from "react-tooltip";

const SideBar = (props) => {
  const { assets } = props;

  return (
    <aside className='sidebar'>
      <ul className='vert-menu'>
        {assets.map((asset) => (
          <li>
            <a href='#' data-tip data-for={asset.name}>
              {asset.symbol}
            </a>
            <ReactTooltip
              id={asset.name}
              place='right'
              effect='solid'
              backgroundColor='#1b1e24'
              data-offset="{right': 100}">
              {asset.name}
            </ReactTooltip>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
