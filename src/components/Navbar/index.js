import "./index.css";

const Navbar = () => (
  <nav className="navbar-container">
    <div className="nav-container">
      <div className="nav-brand-container">
        <button type="button" className="button" style={{ marginRight: 64 }}>
          <h1 className="nav-brand">EDYODA</h1>
        </button>
        <ul className="select-container">
          <li className="select">
            <button
              type="button"
              className="button select"
              style={{ marginRight: 64 }}
            >
              {"Courses"}{" "}
              <img
                src="https://res.cloudinary.com/dpmyvq5te/image/upload/v1685180720/Vector1_ml7shb.png"
                alt="arrow"
                className="arrow-img"
              />
            </button>
          </li>
          <li className="select">
            <button
              type="button"
              className="button select"
              style={{ marginRight: 64 }}
            >
              {"Programs"}{" "}
              <img
                src="https://res.cloudinary.com/dpmyvq5te/image/upload/v1685180720/Vector1_ml7shb.png"
                alt="arrow"
                className="arrow-img"
              />
            </button>
          </li>
        </ul>
      </div>
      <ul
        className="search-and-login-container"
        style={{ padding: 0, listStyleType: "none" }}
      >
        <li>
          <button
            type="button"
            className="button"
            style={{ marginLeft: 64, paddingTop: 10 }}
          >
            <img
              src="https://res.cloudinary.com/dpmyvq5te/image/upload/v1685181467/Vector2_p9m6kn.png"
              alt="search"
              className="search-img"
            />
          </button>
        </li>
        <li>
          <button type="button" className="button" style={{ marginLeft: 64 }}>
            Login
          </button>
        </li>
        <li>
          <button
            type="button"
            className="button join-button"
            style={{ marginLeft: 64 }}
          >
            JOIN NOW
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
