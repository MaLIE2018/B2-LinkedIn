import Profile from './pages/Profile';
import { Container } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import Footer from './components/Footer';
import './css/App.css';
import Feed from './pages/Feed'
import {BrowserRouter as Router,Route} from "react-router-dom"
import React from "react"
import Search from './pages/Search'
class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      didUpdate: false,
      profile: [],
      bearerToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZjEwNzYxOWU1ZDAwMTUxZjhmN2UiLCJpYXQiOjE2MjA2MzU5MTEsImV4cCI6MTYyMTg0NTUxMX0.U8l7p7PoVQQdWQWKZJviwS7_FVcCIEb4ytol9_fZkyM",
      posts:[],
      query:""
    };
  }
  // 609a5eb3dfccc50015a6bbba Ankit
  // Hasib eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZmE0MTYxOWU1ZDAwMTUxZjhmN2YiLCJpYXQiOjE2MjA2MzgyNzMsImV4cCI6MTYyMTg0Nzg3M30.D-RniP4L8eJ8XOdOjRXswq8LsRnPVK-QYiUr8h9fPhk
  
  getProfile = async () => {
    try {
      const requestProfile = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + this.state.bearerToken,
          },
        }
      );
      if (requestProfile.ok) {
        const response = await requestProfile.json();
        this.setState({ profile: response, didUpdate: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  getPosts = async () => {
    try {
      const requestPosts = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            Authorization: "Bearer " + this.state.bearerToken,
          },
        }
      );
      if (requestPosts.ok) {
        let resp = await requestPosts.json();
        this.setState({
          posts: resp.reverse(),
          didUpdate: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getProfile();
    this.getPosts()
  }
  componentDidUpdate(prevProps, prevState){
    if (this.state.didUpdate !== prevState.didUpdate){
      this.getProfile()
      this.getPosts()
    }
  }

  handleUpdate = (bool) => {
    this.setState((state) => {
      return { didUpdate: bool };
    });
  };

  handleChangeQuery = (e) => {
      e.preventDefault();
      this.setState((state) => {
        return { query: e.target.value,}
          
      })
  }

	render(){
	return (
		<>
		<Router>
			<MyNavbar name={this.state.profile.name} 
      query={this.state.search}
      onChangeQuery={this.handleChangeQuery}/>
			<Container sm="fluid">
			<Route render={(routerProps) => <Profile
										profile={this.state.profile}
										bearerToken={this.state.bearerToken}
                    onDidUpdate={this.handleUpdate}
                  />} path="/profile"/>
			<Route render={(routerProps) => <Feed
										profile={this.state.profile}
                    posts={this.state.posts}
										bearerToken={this.state.bearerToken}
                    onDidUpdate={this.handleUpdate}
                  />} exact path={["/feed","/"]}/>
      <Route render={(routerProps) => <Search
										profile={this.state.profile}
										bearerToken={this.state.bearerToken}
                  />} exact path={["/Search/q=:query"]}/>
			
				<Footer />
			</Container>
			</Router>
		</>
	);
}
}

export default App;
