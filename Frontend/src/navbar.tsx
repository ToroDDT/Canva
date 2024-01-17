import "./navBar.css";
function NavBar() {
  return (
    <>
      <nav>
        <div>
          <button className="button">sidebar hidder</button>
          <span id="Name-of-App">Joy Of Creation</span>
          <button className="options-dropdown-menu button">
            Design spotlight
          </button>
        </div>
        <div>
          <button className="options-dropdown-menu button">
            Settings Icon
          </button>
          <button>notification</button>
          <button>Create Design</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
