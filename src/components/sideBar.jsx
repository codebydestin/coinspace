const SideBar = (props) => {
  const { assets } = props;

  return (
    <aside className='sidebar'>
      <ul className='vert-menu'>
        {assets.map((asset) => (
          <li>
            <a href='#'>{asset.symbol}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
