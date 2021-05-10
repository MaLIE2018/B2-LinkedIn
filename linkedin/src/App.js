import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Profile from './pages/Profile';
import { Container } from 'react-bootstrap';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Container sm="fluid">
        <Profile />
      </Container>
      <Footer />
    </>
  );
}

export default App;
