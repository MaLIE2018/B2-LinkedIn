import Profile from './pages/Profile';
import { Container } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <>
      <MyNavbar />
      <Container sm="fluid">
        <Profile />
        <Footer />
      </Container>
    </>
  );
}

export default App;
