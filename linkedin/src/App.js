import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Profile from './pages/Profile';
import {Container} from "react-bootstrap"
function App() {
  return (
    <Container sm='fluid'>
    <Profile/>
    </Container>
  );
}

export default App;
