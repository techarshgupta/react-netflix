import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Browse, SignIn, SignUp } from './pages';
import { BROWSE, HOME, SIGN_UP, SIGN_IN } from './constants/routes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={HOME} element={<Home />} />
        <Route exact path={BROWSE} element={<Browse />} />
        <Route exact path={SIGN_IN} element={<SignIn />} />
        <Route exact path={SIGN_UP} element={<SignUp />} />
      </Routes>
    </Router>
  );
}
