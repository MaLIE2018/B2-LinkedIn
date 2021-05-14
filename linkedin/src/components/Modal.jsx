import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

let url = `https://striveschool-api.herokuapp.com/api/profile/experiences`;

class Modal extends Component {
  state = {
    experience: {
      role: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
      area: '',
    },
  };

  handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(url, {
        method: 'PUT',
        headers: new Headers({
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNmUzYmRmY2NjNTAwMTVhNmJiYmUiLCJpYXQiOjE2MjA3MzM1MDIsImV4cCI6MTYyMTk0MzEwMn0.BBdbzj6gM5dUvjGxy0v9p1319Iu3jjdGJ8zgiY44z74`,
          'Content-Type': 'application/json',
        }),
      });

      if (response.ok) {
        console.log('Experience Updated');
      } else {
        console.log('Something went wrong!');
      }
    } catch (error) {
      console.log(`Something went wrong! ${error}`);
    }
  };

  handleDelete = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(url, {
        method: 'DELETE',
        headers: new Headers({
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDlhNmUzYmRmY2NjNTAwMTVhNmJiYmUiLCJpYXQiOjE2MjA3MzM1MDIsImV4cCI6MTYyMTk0MzEwMn0.BBdbzj6gM5dUvjGxy0v9p1319Iu3jjdGJ8zgiY44z74`,
          'Content-Type': 'application/json',
        }),
      });
      if (response.ok) {
        console.log('Experience Deleted');
      } else {
        console.log('Something went wrong!');
      }
    } catch (error) {
      console.log(`Something went wrong ${error}`);
    }
  };

  render() {
    return (
      <div className="pe-form-footer__actions display-flex flex-column justify-space-between">
        {/* <Button
          variant="outline-secondary"
          className="rounded-pill"
          onClick={this.handleDelete}
        >
          Delete
        </Button>
        <Button
          variant="primary"
          className="rounded-pill"
          onClick={this.handleUpdate}
        >
          Save
        </Button> */}
      </div>
    );
  }
}

export default Modal;
