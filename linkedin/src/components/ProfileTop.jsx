import {Component} from "react";
import "../css/ProfileTop.css";
import {Row, Col, Dropdown, Button} from "react-bootstrap";
import CarouselBadge from "./Carousel";
import CameraIcon from "./CamerIcon";
import PencilIcon from "./PencilIcon";
import Box from "../components/parts/Box";
import LinkButton from "../components/parts/LinkButton";
import DropdownButton from "./DropdownButton";
import ModalExperience from "./Model";

export default class ProfileTop extends Component {
	// constructor(props) {
	//   super(props);
	//   this.state = {
	//     profile: {},
	//   };
	// }

	// getProfile = async () => {
	//   try {
	//     const requestProfile = await fetch(
	//       "https://striveschool-api.herokuapp.com/api/profile/me",
	//       {
	//         method: "GET",
	//         headers: {
	//           Authorization:
	//             " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZmE0MTYxOWU1ZDAwMTUxZjhmN2YiLCJpYXQiOjE2MjA2MzgyNzMsImV4cCI6MTYyMTg0Nzg3M30.D-RniP4L8eJ8XOdOjRXswq8LsRnPVK-QYiUr8h9fPhk",
	//         },
	//       }
	//     );
	//     if (requestProfile.ok) {
	//       const response = await requestProfile.json();
	//       this.setState({ profile: response });
	//     }
	//   } catch (error) {
	//     console.log(error);
	//   }
	// };
	// componentDidMount() {
	//   this.getProfile();
	// }

	render() {
		return (
			<Box
				padding={false}
				children={
					<Row className="m-0 p-0">
						<Col id="ProfileBackground" sx={12}>
							<img
								id="profileImage"
								src={this.props.profile.image}
								alt="profile_image"
							/>
							<CameraIcon classname={"cameraIcon"} />
							<PencilIcon classname={"Pencil"} />
						</Col>
						<Col id="ProfileInfo" xs={12}>
							<h3>
								{this.props.profile.name}
								{"  "}
								{this.props.profile.surname}
							</h3>
							<h5 style={{fontWeight: "400"}}>{this.props.profile.title}</h5>
							<p className="d-flex align-items-center">
								{this.props.profile.area}
								{" - "}
								{<LinkButton title={"500 connections"} />}
								{" - "}
								{<LinkButton title={"Contact info"} />}
							</p>{" "}
							<span className="d-flex flex-row">
								<DropdownButton
									Name="Open to"
									Background="primary"
									Border="primary"
								/>
								<DropdownButton
									Name="Add profile section"
									Background="outline-dark"
									Border="dark"
								/>
								{/* <DropdownButton Name="More..." Background="outline-dark" /> */}

								<ModalExperience />

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
