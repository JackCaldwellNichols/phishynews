import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>PhishyNews</h1>
      </div>
      <div className="right">
        <div className="searchbar">
          <input className="" placeholder="Search stories..." />
        </div>
        <div className="cats">
          <span className="cat">Latest</span>
          <span className="cat">Sports</span>
          <span className="cat">Music</span>
          <span className="cat">Fashion</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
