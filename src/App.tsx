import React, { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AuthProvider } from './AuthContext';
import { SIGNUP, SIGNIN, DASHBOARD } from './routes';
import SignIn from 'pages/SignIn/signIn';
import SignUp from 'pages/SignUp/signUp';
import Dashboard from 'pages/Dashboard/dashboard';
import PublicLayout from './layouts/PublicLayout';
import PrivateLayout from './layouts/PrivateLayout';
import { setCredentials } from 'store/auth.reducer';
import { RootState } from 'store';

const App: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      dispatch(setCredentials(JSON.parse(loggedInUser)));
    }
  }, [dispatch]);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={SIGNUP}
            element={
              <PublicLayout>
                <SignUp />
              </PublicLayout>
            }
          />
          <Route
            path={SIGNIN}
            element={
              <PublicLayout>
                <SignIn />
              </PublicLayout>
            }
          />
          <Route
            path={DASHBOARD}
            element={
              user ? (
                <PrivateLayout>
                  <Dashboard />
                </PrivateLayout>
              ) : (
                <Navigate to={SIGNIN} replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
