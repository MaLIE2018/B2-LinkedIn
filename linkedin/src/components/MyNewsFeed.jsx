import React from 'react';
import { Card, Image } from 'react-bootstrap';
class MyNewsFeed extends React.Component {
	state = {
		posts: [],
	};

	getPosts = async () => {
		const requestPosts = await fetch(
			'https://striveschool-api.herokuapp.com/api/posts/',
			{
				method: 'GET',
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNWViM2RmY2NjNTAwMTVhNmJiYmEiLCJpYXQiOjE2MjA3Mjk1MjQsImV4cCI6MTYyMTkzOTEyNH0.boEO9mTiItNdEDrhQcw1KIvBKIGJ0dCkRW7d3cNzv0M',
				},
			}
		);
		if (requestPosts.ok) {
			const resp = await requestPosts.json();
			this.setState({ posts: resp });
			// console.log(this.state.posts[0]);
		}
	};
	componentDidMount = () => {
		this.getPosts();
	};
	render() {
		return (
			<>
				{this.state.posts.length > 0 &&
					this.state.posts.map((post) => (
						<Card border="info" className="mt-5 w-75">
							<Card.Header>
								<Image
									height="50px"
									width="50px"
									src={post.user?.image}
									roundedCircle
								/>
							</Card.Header>
							<Card.Body>
								<Card.Title>{post.user?.name}</Card.Title>
								<Card.Text>{post.text}</Card.Text>
							</Card.Body>
						</Card>
					))}
			</>
		);
	}
}

export default MyNewsFeed;
