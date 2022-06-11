import * as S from './style';
import Navbar from 'components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'components/Home';
import Test from 'components/Test';
import SignInModal from 'components/Modal/SignInModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'services/firebase';
import Register from 'components/Register/Register';
function App() {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return (
      <div
        className="px-4 py-5 my-5 text-center row"
        style={{ height: '88vh', alignContent: 'center' }}
      >
        <div className="col-lg-6 mx-auto">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <S.Container className="test">
      <BrowserRouter>
        <Navbar />
        <SignInModal />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="test" element={<Test />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </S.Container>
  );
}

export default App;
