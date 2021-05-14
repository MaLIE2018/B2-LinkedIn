import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import AddToYourFeed from '../components/AddToYourFeed';
import MyNewsFeed from './../components/MyNewsFeed';
import Box from './../components/parts/Box';
import Posts from './../components/Posts';
import { checkImg } from '../helper/datediff';
class Feed extends Component {
	state = {
		posts: [],
		updated: false,
	};

	getPosts = async () => {
		try {
			const requestPosts = await fetch(
				'https://striveschool-api.herokuapp.com/api/posts/',
				{
					method: 'GET',
					headers: {
						Authorization: 'Bearer ' + this.props.bearerToken,
					},
				}
			);
			if (requestPosts.ok) {
				let resp = await requestPosts.json();
				resp = await resp.filter((post) => checkImg(post.image));
				this.setState({
					posts: resp.reverse(),
					updated: false,
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
	componentDidMount = () => {
		this.getPosts();
		document.title = 'Linkedin - Feed';
	};

	componentDidUpdate = (prevProps, prevState) => {
		if (prevState.updated !== this.state.updated) {
			this.getPosts();
		}
	};

	getMyPosts = () => {
		const posts = this.state.posts;
		this.setState((state) => {
			return {
				posts: posts.filter((post) => {
					if (post.user?._id) {
						return post.user._id === this.props.profile._id;
					}
				}),
			};
		});
	};

	handleUpdate = (e, bool) => {
		e.preventDefault();
		this.setState((state) => {
			return { updated: bool };
		});
	};

	render() {
		return (
			<Row>
				<Col md={3}>
					<Welcome render={(state) => <div>sometext</div>} />
				</Col>
				<Col md={6}>
					<Posts
						bearerToken={this.props.bearerToken}
						profile={this.props.profile}
						rounded={true}
						onPostsClick={this.getMyPosts}
						onHandleUpdate={this.handleUpdate}
					/>
					<MyNewsFeed
						posts={this.state.posts}
						bearerToken={this.props.bearerToken}
						profile={this.props.profile}
						rounded={true}
						onPostsClick={this.getMyPosts}
						onHandleUpdate={this.handleUpdate}
					/>
				</Col>
				<Col md={3}>
					<AddToYourFeed />
				</Col>
			</Row>
		);
	}
}

export default Feed;
