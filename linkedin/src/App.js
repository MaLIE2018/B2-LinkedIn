import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import './css/App.css';
import Profile from './pages/Profile';
import { Container } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar'
function App() {
  return (
    <>
    <MyNavbar />
      <Container sm="fluid">
        <Profile />
        
      </Container>
      <Footer />
    </>
  );
}

export default App;
