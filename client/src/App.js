import './App.scss';
import MainLayout from './components/MainLayout';
import HomePage from './components/home/HomePage';
import TeamPage from './components/team/TeamPage';
import AccountPage from './components/account/AccountPage';
import SignupPage from './components/account/SignupPage';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/signup" component={SignupPage} />
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
