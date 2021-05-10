import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import './css/App.css';
import Profile from './pages/Profile';
import { Container } from 'react-bootstrap';
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
