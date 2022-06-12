import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import { auth, signInWithGoogle } from 'services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import MenuSpring from 'components/Spring/MenuSpring';
import { signOutWithGoogle } from 'services/firebase';
import { MdOutlineShoppingBag, MdMenu } from 'react-icons/md';
import { useMedia } from 'react-use';
import { useSpring, animated, config } from '@react-spring/web';
import styles from './styles.module.css';
import { FaShoppingBag } from 'react-icons/fa';

// FaShoppingBag
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

  const [{ background }] = useSpring(
    () => ({
      delay: 50,
      from: {
        background: 'var(--from, #212529)',
      },
      to: {
        background: 'var(--to, #000)',
      },
      config: config.molasses,
    }),
    []
  );
  return (
    <div>
      <animated.div
        className="navbar navbar-expand-lg "
        style={open ? { background } : { background: '#212529' }}
      >
        <div className="container-fluid">
          <animated.button
            className=" border-0   d-lg-none text-white text-opacity-50"
            type="button"
            style={open ? { background } : { background: '#212529' }}
          >
            <MdOutlineShoppingBag size={32} />
          </animated.button>
          <Link className="navbar-brand text-white fw-bolder " to="/">
            iStore
          </Link>

          <animated.button
            onClick={() => setOpen(!open)}
            className=" second-button py-2  border-0 text-white text-opacity-5 d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={open ? { background } : { background: '#212529' }}
          >
            <div className={open ? 'animated-icon2 open' : 'animated-icon2'}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </animated.button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form role="search" className=" d-sm-flex d-lg-none ">
              <input
                className="form-control bg-dark text-white border-dark"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className=" btn btn-link nav-link text-white text-start"
                  aria-current="page"
                  to="test"
                >
                  Test
                </Link>
              </li>

              <li className="nav-item ">
                <button className="btn btn-link nav-link  text-white d-sm-block d-lg-none ">
                  {' '}
                  Account
                </button>
              </li>
              <li className="nav-item ">
                <button
                  className="btn btn-link nav-link  text-white d-sm-block d-lg-none "
                  onClick={signOutWithGoogle}
                >
                  {' '}
                  Sign out
                </button>
              </li>
            </ul>

            <div className="d-flex w-100 justify-content-end   text-white text-opacity-50 ">
              <MenuSpring />
              <button
                className="btn btn-dark  text-white text-opacity-50 d-sm-none d-lg-block "
                type="button"
              >
                <MdOutlineShoppingBag size={32} />
              </button>
              {user ? (
                <div className="dropdown d-sm-none d-lg-block text-white text-opacity-50">
                  <button
                    className=" dropdown-toggle  btn profile-dropdown btn-dark d-sm-none d-sm-none d-lg-block text-white text-opacity-50"
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
                    {user ? (
                      <>
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
                        </li>{' '}
                      </>
                    ) : (
                      <li>
                        <button
                          className="dropdown-item "
                          onClick={signInWithGoogle}
                        >
                          Login in
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              ) : (
                <button
                  className="btn profile-dropdown btn-dark d-sm-none d-sm-none d-lg-block text-white"
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
      </animated.div>
    </div>
  );
}

export default Navbar;
