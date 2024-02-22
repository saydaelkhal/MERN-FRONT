const HeaderLeft = ({ toggle, setToggle }) => {
  return (
    <div className="header-left">
      <div className="header-logo">
        <h1>DivaHustle   <i className="bi bi-heart" style={{fontSize:"15px"}}></i></h1>
      
      </div>
      <div onClick={() => setToggle((prev) => !prev)} className="header-menu">
        {toggle ? (
          <i className="bi bi-x-lg"></i>
        ) : (
          <i className="bi bi-list"></i>
        )}
      </div>
    </div>
  );
};

export default HeaderLeft;
