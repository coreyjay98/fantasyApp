import './App.scss';
import MainLayout from './components/MainLayout';
import HomePage from './components/HomePage';
import TeamPage from './components/TeamPage';
import AccountPage from './components/AccountPage';
import FixturePage from './components/FixturePage';
import SignupPage from './components/SignupPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useSiteContext from './hooks/useSiteContext';
import { useEffect } from 'react';

function App() {
  const { fetchLogin } = useSiteContext();

  useEffect(() => {
    (async () => {
      const token = await localStorage.getItem('token');
      if (!token) return;
      const res = await fetch('/user/profile', {
        headers: {
          authorization: token,
        },
      });
      const response = await res.json();
      fetchLogin(response);
    })();
  }, []);

  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/fixtures" component={FixturePage} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
