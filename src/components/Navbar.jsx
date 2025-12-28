import { Link } from "react-router-dom";
import { useRef } from "react";
import Logo from "../assets/logo/Rajwadi png.png";

const Navbar = () => {
  const togglerRef = useRef(null);

  const closeNavbar = () => {
    if (
      togglerRef.current &&
      togglerRef.current.getAttribute("aria-expanded") === "true"
    ) {
      togglerRef.current.click();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={closeNavbar}>
          <img className="nav-logo" src={Logo} alt="Logo" />
        </Link>

        <button
          ref={togglerRef}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {[
              { path: "/", label: "Home" },
              { path: "/franchise", label: "Franchise" },
              { path: "/about", label: "About Us" },
              { path: "/contact", label: "Contact Us" },
              { path: "/branches", label: "Branches" },
            ].map(({ path, label }) => (
              <li className="nav-item" key={path}>
                <Link className="nav-link" to={path} onClick={closeNavbar}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
