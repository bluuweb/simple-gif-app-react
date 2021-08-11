import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink to="/" className="navbar-brand">
          GIF CATs
        </NavLink>
        <div>
          <NavLink
            to="/"
            className="btn btn-outline-primary me-2"
            activeClassName="active"
            exact
          >
            <i className="bi bi-image-fill"></i> Inicio
          </NavLink>
          <NavLink
            to="/favoritos"
            className="btn btn-outline-primary"
            activeClassName="active"
            exact
          >
            <i className="bi bi-heart"></i> Favoritos
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
