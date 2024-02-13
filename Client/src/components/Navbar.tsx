import '../style/navbar/navbar.css';
const Navbar = () => {
  return (
    <div className="display-flex p-20   align-items-center bg-black px-20 py-7 space-between">
        <div>
            <a className="brand-name c-white">
                USERS
            </a>
        </div>
        <div className='display-flex grow-0 f-30 space-between align-items-center'>
            <input className='br-7 search-bar' type="text" placeholder='Search'/>
            <button className='p-10 br-7 fs-15 nav-button'>Log out</button>
        </div>
    </div>
  );
}

export default Navbar;
