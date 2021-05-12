import Profile from './pages/Profile';
import { Container } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import './css/App.css';
import MyNewsFeed from './components/MyNewsFeed';

function App() {
	return (
		<>
			<MyNavbar />
			<Container sm="fluid">
				<Profile />
				<MyNewsFeed />
				<Footer />
			</Container>
		</>
	);
}

export default App;
