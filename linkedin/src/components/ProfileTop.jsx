import { Component } from "react";
import "../css/ProfileTop.css";
import { Container, Row, Col } from "react-bootstrap";
import { CameraOutline } from "react-ionicons";

export default class ProfileTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
    };
  }

  // {
  //     "_id": "6098fa41619e5d00151f8f7f",
  //     "name": "Hasib",
  //     "surname": "Darwish",
  //     "email": "hashhash506@gmail.com",
  //     "username": "Hasib",
  //     "title": "Full Stocker Web Developer",
  //     "bio": "this is just me who think i am who am i",
  //     "area": "Birmingham, United Kingdome",
  //     "image": "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
  //     "createdAt": "2021-05-10T09:17:53.741Z",
  //     "updatedAt": "2021-05-10T09:17:53.741Z",
  //     "__v": 0
  // }
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
        this.setState({ profile: response });
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
          <Row className='mt-3'>
            <Col id='backgroundImage' sx={9}>
              <CameraOutline
                color={"#0a66c2"}
                title={"camra"}
                height='25px'
                width='25px'
              />
              <img
                id='profileImage'
                src={this.state.profile.image}
                alt='profile_image'
              />
              hello
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
