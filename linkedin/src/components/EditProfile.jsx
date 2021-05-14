import {Modal, Button, Form} from "react-bootstrap";
import React, {Component} from "react";

class EditProfile extends Component {
	state = {
		formerName: false,
	};
	render() {
		return (
			<>
				<Modal
					size="lg"
					show={this.props.editProfile}
					onHide={this.props.editProfileOff}
					aria-labelledby="example-modal-sizes-title-lg"
				>
					<Modal.Header closeButton>
						<Modal.Title
							id="example-modal-sizes-title-lg"
							style={{fontWeight: "350"}}
						>
							Edit Intro
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<div className="container-fluid mx-0 px-0">
							<div className="row justify-content-between mt-4">
								<div className="col-6 text-muted">First Name *</div>
								<div className="col-6 text-muted">Last Name *</div>
							</div>
							<div className="row justify-content-between">
								<div className="col-6 w-100">
									<input className="w-100" type="text" />
								</div>
								<div className="col-6 w-100">
									<input className="w-100" type="text" />
								</div>
							</div>
							<div className="row mt-2 w-100">
								<div className="col-12">
									<a
										onClick={() =>
											this.setState({formerName: !this.state.formerName})
										}
										href="#"
									>
										Add former name
									</a>
								</div>
							</div>
							<div className="row">
								{this.state.formerName ? (
									<>
										<div className="col-12 w-100">
											<label htmlFor="formerName" className="text-muted">
												Former Name
											</label>
										</div>
										<div className="col-12 w-100">
											<input
												className="w-100"
												type="text"
												placeholder="Type in your former name"
											/>
										</div>
									</>
								) : (
									<div className="col-12"></div>
								)}
							</div>
							<div className="row w-100 mt-4 mb-2">
								<div className="col-12 text-muted">
									+ Record name pronunciation
								</div>
								<div className="col-12">
									Name pronunciation can only be added using our mobile app.
								</div>
							</div>
							<div className="row w-100 mx-0 px-0">
								<div className="col-12 text-muted">Headline *</div>
								<div className="col-12 w-100">
									<textarea
										className="textarea"
										name="headline"
										id=""
										rows="2"
									></textarea>
								</div>
							</div>
							<div className="row w-100 mt-5 mb-4">
								<div className="col-12">
									<a href="#">+ Add current position</a>
								</div>
							</div>
							<div className="row w-100">
								<div className="col-12 w-100">
									<Form.Group controlId="education">
										<Form.Label className="text-muted">Education *</Form.Label>
										<Form.Control as="select">
											<option>Select</option>
											<option>Strive School</option>
										</Form.Control>
									</Form.Group>
								</div>
								<div className="col-12">
									<a href="#"> Add new education</a>
								</div>
							</div>
							<div className="row mt-3 mb-3">
								<div className="col-12 d-flex justify-content-start align-items-center">
									<input className="" type="checkbox" id="intro" />
									<label htmlFor="intro">Show education in my intro</label>
								</div>
							</div>
							<div className="row w-100 mb-3">
								<div className="col-12 mb-1">Country/Region *</div>
								<div className="col-12">
									<input className="w-100" type="text" />
								</div>
							</div>
							<div className="row">
								<div className="col-3">Postal code</div>
								<div className="col-9">Location within this area</div>
							</div>
							<div className="row">
								<div className="col-3">
									<input type="text" />
								</div>
								<div className="col-9">
									<input type="text" />
								</div>
							</div>
						</div>
					</Modal.Body>
				</Modal>
			</>
		);
	}
}

export default EditProfile;
