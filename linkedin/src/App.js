import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import Profile from './pages/Profile';
import ProfileTop from './components/ProfileTop'
import {Container} from "react-bootstrap"
function App() {
  return (
    <Container sm='fluid'>
      <ProfileTop />
    {/* <Profile/> */}
    </Container>
  );
}

export default App;
