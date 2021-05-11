import React, { Component } from 'react';
import Box from '../components/parts/Box';
class Experience extends Component {
	state = {
		experience: {
			role: 'Software Engineer',
			company: 'AXAS GmbH',
			startDate: '01/01/2020',
			endDtae: '01/01/2022',
			description: 'Try now',
			area: 'Frankfurt',
		},
	};

	postExp = async () => {
		try {
			const requestProfile = await fetch(
				'https://striveschool-api.herokuapp.com/api/profile/me',
				{
					method: 'GET',
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNWViM2RmY2NjNTAwMTVhNmJiYmEiLCJpYXQiOjE2MjA3Mjk1MjQsImV4cCI6MTYyMTkzOTEyNH0.boEO9mTiItNdEDrhQcw1KIvBKIGJ0dCkRW7d3cNzv0M',
					},
				}
			);
			if (requestProfile.ok) {
				const response = await requestProfile.json();
				const identity = response._id;

				const newUrl =
					'https://striveschool-api.herokuapp.com/api/profile/' +
					identity +
					'/experiences';
				const postExperience = await fetch(newUrl, {
					method: 'POST',
					headers: {
						Authorization:
							'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNWViM2RmY2NjNTAwMTVhNmJiYmEiLCJpYXQiOjE2MjA3Mjk1MjQsImV4cCI6MTYyMTkzOTEyNH0.boEO9mTiItNdEDrhQcw1KIvBKIGJ0dCkRW7d3cNzv0M',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(this.state.experience),
				});
			}
		} catch (error) {
			console.log(error);
		}
	};

	componentDidMount() {
		this.postExp();
	}
	render() {
		return <Box title="Experience" children={<div>Dadsda</div>} />;
	}
}

Experience.propTypes = {};

export default Experience;
