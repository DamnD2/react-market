import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import Tobacco from '../../components/Tobacco';
import Hookahs from '../../components/Hookahs';
import Coal from '../../components/Coal';
import Header from '../../components/Header/Header';
import SimpleSnackbar from '../../components/Snackbar';
import Basket from '../../components/Basket/Basket';
import Footer from '../../components/Footer';
import Main from '../../components/Main';
import ScrollToTop from '../../components/ScrollToTop';

const App = () => (
  <Router>
    <Header />
    <SignInForm />
    <SignUpForm />
    <Container mt={2}>
      <ScrollToTop />
      <Switch>
        <Route exact path='/'><Main /></Route>
        <Route path='/tobaco'><Tobacco /></Route>
        <Route path='/hookahs'><Hookahs /></Route>
        <Route path='/coal'><Coal /></Route>
        <Route path='/basket'><Basket /></Route>
      </Switch>
    </Container>
    <SimpleSnackbar />
    <Footer />
  </Router>
);

export default App;
