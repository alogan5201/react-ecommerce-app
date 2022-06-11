import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { auth } from 'services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOutWithGoogle } from 'services/firebase';
const style = {
  ':active': {
    opacity: 0,
  },
};
function Navbar() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            iStore
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="test">
                  Test
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link">Link</div>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </div>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <div className="dropdown-item">Action</div>
                  </li>
                  <li>
                    <div className="dropdown-item">Another action</div>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="dropdown-item">Something else here</div>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <div className="nav-link disabled">Disabled</div>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn" type="button">
                <FaShoppingCart />
              </button>
              {user ? (
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle profile-dropdown"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.photoURL ? (
                      <img
                        src={user.photoURL!}
                        className="rounded-circle"
                        alt="avatar"
                        style={{ maxWidth: '39px' }}
                      ></img>
                    ) : (
                      <FaUserAlt />
                    )}
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <button className="dropdown-item">Account</button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={signOutWithGoogle}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <button
                  className="btn profile-dropdown btn-light"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signinModal"
                >
                  <FaUserAlt />
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
