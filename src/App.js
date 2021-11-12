import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import initializeAuth from './firebase/firebase.init';
import Login from './pages/Login/Login';
import Explore from './pages/Explore/Explore';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard/DashRoutes';
import NotFound from './pages/NotFound/NotFound';
import { useState } from 'react';

initializeAuth();

function App() {
  const [dashState, setDashState] = useState(0);

  return (
    <>
      <AuthProvider>
        <Router>
          <Header dashState={dashState} />
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/explore">
              <Explore />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/dashboard">
              <Dashboard setDashState={setDashState} />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
