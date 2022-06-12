import React, { FC, useState, useRef } from 'react';
import illustration from '../../static/images/signup-illustration.png';
import GoogleImage from '../../static/images/google.png';
import { signInWithGoogle, auth } from 'services/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import CheckMark from '../../static/images/checkmark.png';
function SignInModal() {
  const handleToggle = () => {
    setActive(!isActive);
  };
  const [isActive, setActive] = useState<boolean>(false);
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const handleRegister = (e: any) => {
    e.preventDefault();
    console.log('register');
    navigate('register', { replace: true });
  };
  return (
    <div>
      <div
        className="modal fade"
        id="signinModal"
        tabIndex={-1}
        aria-labelledby="signinModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="signinModalLabel"></h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div
              className="modal-body"
              style={{ overflow: 'hidden !important' }}
            >
              {' '}
              <div>
                {user ? (
                  <p>Current User: {user.email}</p>
                ) : (
                  <section className="vh-100">
                    <div className="container-fluid h-custom">
                      <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                          <img
                            src={illustration}
                            className="img-fluid"
                            alt="illustration"
                          />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                          <form>
                            <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                              <button
                                type="button"
                                className="btn btn-light btn-floating mx-1 rounded-pill"
                                onClick={signInWithGoogle}
                              >
                                <img
                                  className="mr-2"
                                  src={GoogleImage}
                                  alt="GOOGLE-button"
                                ></img>

                                <span>Sign in with Google</span>
                              </button>
                            </div>
                            <div className="divider d-flex align-items-center my-4">
                              <p className="text-center fw-bold mx-3 mb-0">
                                Or
                              </p>
                            </div>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                              <input
                                type="email"
                                id="form3Example3"
                                className="form-control form-control-lg"
                                placeholder="Enter a valid email address"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example3"
                              >
                                Email address
                              </label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-3">
                              <input
                                type="password"
                                id="form3Example4"
                                className="form-control form-control-lg"
                                placeholder="Enter password"
                              />
                              <label
                                className="form-label"
                                htmlFor="form3Example4"
                              >
                                Password
                              </label>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              {/* Checkbox */}
                              <div className="form-check mb-0">
                                <input
                                  className="form-check-input me-2"
                                  type="checkbox"
                                  defaultValue=""
                                  id="form2Example3"
                                />
                                <label
                                  className="form-check-label text-dark"
                                  htmlFor="form2Example3"
                                >
                                  Remember me
                                </label>
                              </div>
                              <button className="text-body btn btn-link  ">
                                Forgot password?
                              </button>
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                              <button
                                type="button"
                                className="btn btn-primary btn-lg"
                                style={{
                                  paddingLeft: '2.5rem',
                                  paddingRight: '2.5rem',
                                }}
                              >
                                Login
                              </button>
                              <p className="small fw-bold mt-2 pt-1 mb-0">
                                Don't have an account?{' '}
                                <button
                                  className="btn btn-link text-danger p-0"
                                  onClick={handleRegister}
                                  data-bs-dismiss="modal"
                                >
                                  Register
                                </button>
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={isActive ? 'modal fade show' : 'modal fade'}
        id="exampleModalLive"
        tabIndex={-1}
        aria-labelledby="exampleModalLiveLabel"
        style={
          isActive
            ? { display: 'block', backgroundColor: 'rgba(0,0,0,0.4)' }
            : { backgroundColor: 'rgba(0,0,0,0.4)' }
        }
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ height: '250px' }}>
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row text-center">
                <div className="col-12" style={{ marginTop: '-164px' }}>
                  <img
                    src={CheckMark}
                    alt="checkmark"
                    style={{ width: '150px' }}
                  />
                </div>
                <div className="col-12">
                  <h2>Success!</h2>
                </div>
                <div className="col-12">
                  <p>Woo-hoo, you're now registered!</p>
                </div>
                <div className="col-12">
                  <button
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    type="button"
                    className="btn btn-outline-success rounded-pill"
                    style={{ width: '51%' }}
                    onClick={handleToggle}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
