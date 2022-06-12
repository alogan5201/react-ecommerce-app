import { yupResolver } from '@hookform/resolvers/yup';
import MenuSpring from 'components/Spring/MenuSpring';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Transition from 'components/Spring/Transition';

import Header from 'components/HamburgerBtn/Header';
import MobileNav from 'components/HamburgerBtn/MobileNav';
//Module '"components/Spring/Transition"' has no exported member 'Transition'. Did you mean to use 'import Transition from "components/Spring/Transition"' instead?
type UserSubmitForm = {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

function Test() {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'),
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
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div
      className="register-form "
      style={{ height: 500, width: '100vw', backgroundColor: 'red' }}
    >
      <div className="row">
        <div className="col-12 position-relative"></div>
        <div style={{ maxWidth: '682px' }} className="text-center"></div>
      </div>
    </div>
  );
}

export default Test;
