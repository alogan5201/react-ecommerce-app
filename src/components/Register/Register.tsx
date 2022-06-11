import React, { FC, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import RegisterImage from '../../static/images/register.png';
import { auth } from '../../services/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FaCheckCircle } from 'react-icons/fa';
import CheckMark from '../../static/images/checkmark.png';
import Loader from 'components/Loader';
type UserSubmitForm = {
  email: string;
  password: string;
  confirmPassword: string;
};
function Register() {
  const [isActive, setActive] = useState<boolean>(false);
  let navigate = useNavigate();
  const handleToggle = () => {
    setActive(!isActive);
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 500);
  };
  const handleModalOpen = () => {
    setActive(!isActive);
  };
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: UserSubmitForm) => {
    console.log(JSON.stringify(data.email, null, 2));
    createUserWithEmailAndPassword(data.email, data.password);
    handleModalOpen();
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loader />;
  }
  if (user) {
    return (
      <div>
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
              <div className="modal-header border-0"></div>
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
  return (
    <div data-testid="Register">
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className=" h1 fw-bold mb-5 mt-4 text-start">
                        Sign up
                      </p>

                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group mb-3">
                          <label>Email</label>
                          <input
                            type="text"
                            {...register('email')}
                            className={`form-control ${
                              errors.email ? 'is-invalid' : ''
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.email?.message}
                          </div>
                        </div>

                        <div className="form-group mb-3">
                          <label>Password</label>
                          <input
                            type="password"
                            {...register('password')}
                            className={`form-control ${
                              errors.password ? 'is-invalid' : ''
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.password?.message}
                          </div>
                        </div>
                        <div className="form-group mb-3">
                          <label>Confirm Password</label>
                          <input
                            type="password"
                            {...register('confirmPassword')}
                            className={`form-control ${
                              errors.confirmPassword ? 'is-invalid' : ''
                            }`}
                          />
                          <div className="invalid-feedback">
                            {errors.confirmPassword?.message}
                          </div>
                        </div>

                        <div className="form-group ">
                          <button type="submit" className="btn btn-primary">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={RegisterImage}
                        className="img-fluid"
                        alt="register"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
