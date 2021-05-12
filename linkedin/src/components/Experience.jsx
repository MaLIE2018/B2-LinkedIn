import React, { Component } from 'react';
import Box from '../components/parts/Box';
import ItemsList from '../components/parts/ItemsList';
class Experience extends Component {
	state = {
		experiences: [],
	};

	postExp = async () => {
		try {
			// const requestProfile = await fetch(
			//   "https://striveschool-api.herokuapp.com/api/profile/me",
			//   {
			//     method: "GET",
			//     headers: {
			//       Authorization:
			//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNWViM2RmY2NjNTAwMTVhNmJiYmEiLCJpYXQiOjE2MjA3Mjk1MjQsImV4cCI6MTYyMTkzOTEyNH0.boEO9mTiItNdEDrhQcw1KIvBKIGJ0dCkRW7d3cNzv0M",
			//     },
			//   }
			// );
			// if (requestProfile.ok) {
			//   const response = await requestProfile.json();
			const identity = 'this.props.profileId';
			const newUrl =
				'https://striveschool-api.herokuapp.com/api/profile/' +
				identity +
				'/experiences';
			const response = await fetch(newUrl, {
				method: 'GET',
				headers: {
					Authorization:
						'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNWViM2RmY2NjNTAwMTVhNmJiYmEiLCJpYXQiOjE2MjA3Mjk1MjQsImV4cCI6MTYyMTkzOTEyNH0.boEO9mTiItNdEDrhQcw1KIvBKIGJ0dCkRW7d3cNzv0M',
					'Content-Type': 'application/json',
				},
			});
			if (response.ok) {
				const data = await response.json();
				this.setState((state) => {
					return { experiences: data };
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount() {
		this.postExp();
	}
	handleClick = (e) => {
		e.preventDefault();
		console.log('hallo');
	};
	render() {
		return this.state.experiences.length !== 0 ? (
			<Box
				add={true}
				title="Experience"
				children={
					<ItemsList
						rounded={true}
						edit={true}
						onEditButtonClick={this.handleClick}
						items={this.state.experiences}
					/>
				}
			/>
		) : null;
	}
}

export default Experience;
