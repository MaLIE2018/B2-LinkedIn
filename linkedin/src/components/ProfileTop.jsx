import {Component} from "react";
import "../css/ProfileTop.css";
import {Row, Col, Dropdown, Button, Alert} from "react-bootstrap";
import CarouselBadge from "./Carousel";
import CameraIcon from "./CamerIcon";
import PencilIcon from "./PencilIcon";
import Box from "../components/parts/Box";
import LinkButton from "../components/parts/LinkButton";
import DropdownButton from "./DropdownButton";
import ModalExperience from './Model'

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
			<Box
				padding={false}
				children={
					<Row className="m-0 p-0">
						<Col id="ProfileBackground" sx={12}>
							<img
								id="profileImage"
								src={this.state.profile.image}
								alt="profile_image"
							/>
							<CameraIcon classname={"cameraIcon"} />
							<PencilIcon classname={"Pencil"} />
						</Col>
						<Col id="ProfileInfo" xs={12}>
							<h3>
								{this.state.profile.name}
								{"  "}
								{this.state.profile.surname}
							</h3>
							<h5 style={{fontWeight: "400"}}>{this.state.profile.title}</h5>
							<p className="d-flex align-items-center">
								{this.state.profile.area}
								{" - "}
								{<LinkButton title={"500 connections"} />}
								{" - "}
								{<LinkButton title={"Contact info"} />}
							</p>{" "}
							<span className="d-flex flex-row">
								<DropdownButton />
								{/* <Dropdown>
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
								</Dropdown> */}
								<ModalExperience />

								<Dropdown className="mr-1">
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
								<CarouselBadge />
							</Row>
						</Col>
					</Row>
				}
			/>
		);
	}
}
