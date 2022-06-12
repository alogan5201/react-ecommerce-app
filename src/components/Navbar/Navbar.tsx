import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { auth } from 'services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import MenuSpring from 'components/Spring/MenuSpring';
import { signOutWithGoogle } from 'services/firebase';
import { MdOutlineShoppingBag, MdMenu } from 'react-icons/md';
import { useMedia } from 'react-use';
import MobileNav from 'components/HamburgerBtn/MobileNav';
//MdOutlineShoppingBag
const style = {
  ':active': {
    opacity: 0,
  },
};
const Demo = () => {
  const isLg = useMedia('(min-width: 992px)');
  const isMd = useMedia('(min-width: 768px)');
  const isSm = useMedia('(min-width: 576px)');
  return <div> {isLg ? 'Yes' : 'No'}</div>;
};
function Navbar() {
  const [open, setOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const isLg = useMedia('(min-width: 992px)');
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className=" border-0 bg-dark text-secondary d-lg-none"
            type="button"
          >
            <MdOutlineShoppingBag size={23} />
          </button>
          <Link className="navbar-brand" to="/">
            iStore
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className=" second-button py-2  border-0 bg-dark text-secondary d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ paddingRight: '6px' }}
          >
            <div className={open ? 'animated-icon2 open' : 'animated-icon2'}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form role="search" className=" d-sm-flex d-lg-none">
              <input
                className="form-control  "
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="test">
                  Test
                </Link>
              </li>

              <li className="nav-item"></li>
            </ul>

            <div className="d-flex w-100 justify-content-end ">
              <MenuSpring />
              <button
                className="btn btn-dark text-secondary d-md-none d-lg-block "
                type="button"
              >
                <MdOutlineShoppingBag size={23} />
              </button>
              {user ? (
                <div className="dropdown d-md-none d-lg-block">
                  <button
                    className="btn btn-dark dropdown-toggle  text-secondary profile-dropdown"
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
                        className="dropdown-item "
                        onClick={signOutWithGoogle}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <button
                  className="btn profile-dropdown btn-dark d-md-none d-md-none d-lg-block text-secondary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signinModal"
                >
                  <FaUserAlt />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
