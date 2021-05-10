import {Component} from "react";
import "../css/ProfileTop.css";
import {
	Container,
	Row,
	Col,
	Dropdown,
	Button,
	Alert,
	Carousel,
} from "react-bootstrap";
import {Camera, PencilOutline} from "react-ionicons";

export default class ProfileTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
    };
  }

	getProfile = async () => {
		try {
			const requestProfile = await fetch(
				"https://striveschool-api.herokuapp.com/api/profile/me",
				{
					method: "GET",
					headers: {
						Authorization:
							" Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZmE0MTYxOWU1ZDAwMTUxZjhmN2YiLCJpYXQiOjE2MjA2MzgyNzMsImV4cCI6MTYyMTg0Nzg3M30.D-RniP4L8eJ8XOdOjRXswq8LsRnPVK-QYiUr8h9fPhk",
					},
				}
			);
			if (requestProfile.ok) {
				const response = await requestProfile.json();
				this.setState({profile: response});
				console.log(this.state.profile);
			}
		} catch (error) {
			console.log(error);
		}
	};
	componentDidMount() {
		this.getProfile();
	}

	render() {
		return (
			<>
				<Container>
					<Row className="m-0 mt-3 p-0">
						<Col id="ProfileBackground" sx={12}>
							<Camera
								className="cameraIcon"
								color={"#0a66c2"}
								title={"camra"}
								height="30px"
								width="30px"
							/>
							<img
								id="profileImage"
								src={this.state.profile.image}
								alt="profile_image"
							/>
							<PencilOutline
								className="Pencil"
								color={"#656161"}
								title={"pencil"}
								height="40px"
								width="100px"
							/>
						</Col>
						<Col id="ProfileInfo" xs={12}>
							<h3>
								{this.state.profile.name}
								{"  "}
								{this.state.profile.surname}
							</h3>
							<h5 style={{fontWeight: "400"}}>{this.state.profile.title}</h5>
							<p>
								{this.state.profile.area}
								{" - "}
								<a href="">
									<span>500 onnections</span>
								</a>
								{" - "}
								<a href="">
									<span>Contact info</span>
								</a>
							</p>{" "}
							<span className="d-flex flex-row">
								<Dropdown>
									<Dropdown.Toggle
										style={{borderRadius: "50px", marginRight: "10px"}}
										variant="primary"
										id="dropdown-basic"
									>
										Open to
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
										<Dropdown.Item href="#/action-2">
											Another action
										</Dropdown.Item>
										<Dropdown.Item href="#/action-3">
											Something else
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Dropdown className="mr-2 pr-5">
									<Dropdown.Toggle
										style={{borderRadius: "50px", marginRight: "10px"}}
										variant="outline-dark"
										border="dark"
										id="dropdown-basic"
									>
										Add profile section
									</Dropdown.Toggle>

									<Dropdown.Menu>
										<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
										<Dropdown.Item href="#/action-2">
											Another action
										</Dropdown.Item>
										<Dropdown.Item href="#/action-3">
											Something else
										</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>

								<Button
									style={{borderRadius: "50px", marginRight: "10px"}}
									variant="outline-dark"
								>
									More...
								</Button>
							</span>
							<Row>
								<Carousel interval={null}>
									<Carousel.Item>
										<Row>
											<Col sx={8}>
												<Alert variant="info">Jumbo</Alert>
											</Col>
											<Col sx={8}>
												<Alert variant="info">Jumbo</Alert>
											</Col>
										</Row>
									</Carousel.Item>
									<Carousel.Item>
										<Row>
											<Col sx={6}>
												<Alert variant="info">Jumbo</Alert>
											</Col>
											<Col sx={6}>
												<Alert variant="info">Jumbo</Alert>
											</Col>
										</Row>
									</Carousel.Item>
								</Carousel>
							</Row>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}
