import { Component } from "react";
import "../css/ProfileTop.css";
import { Row, Col, Button } from "react-bootstrap";
import CarouselBadge from "../components/parts/Carousel";
import CameraIcon from "../components/parts/CamerIcon";
import PencilIcon from "../components/parts/PencilIcon";
import Box from "../components/parts/Box";
import LinkButton from "../components/parts/LinkButton";
import DropdownButton from "../components/parts/DropdownButton";

export default class ProfileTop extends Component {
  render() {
    return (
      <Box
        padding={false}
        render={(state) => (
          <Row className='m-0 p-0'>
            <Col id='ProfileBackground' sx={12}>
              <img
                id='profileImage'
                src={this.props.profile.image}
                alt='profile_image'
              />
              <CameraIcon classname={"cameraIcon"} />
              <PencilIcon classname={"Pencil"} />
            </Col>
            <Col id='ProfileInfo' xs={12}>
              <h3>
                {this.props.profile.name}
                {"  "}
                {this.props.profile.surname}
              </h3>
              <h5 style={{ fontWeight: "400" }}>{this.props.profile.title}</h5>
              <p className='d-flex align-items-center'>
                {this.props.profile.area}
                {" - "}
                {<LinkButton title={"500 connections"} />}
                {" - "}
                {<LinkButton title={"Contact info"} />}
              </p>{" "}
              <span className='d-flex flex-row'>
                <DropdownButton
                  Name='Open to'
                  Background='primary'
                  Border='primary'
                />
                <DropdownButton
                  Name='Add profile section'
                  Background='outline-dark'
                  Border='dark'
                />
                {/* <DropdownButton Name="More..." Background="outline-dark" /> */}

                <Button
                  style={{ borderRadius: "50px", marginRight: "10px" }}
                  variant='outline-dark'>
                  More...
                </Button>
              </span>
              <Row>
                <CarouselBadge />
              </Row>
            </Col>
          </Row>
        )}
      />
    );
  }
}
