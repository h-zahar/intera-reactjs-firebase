import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
