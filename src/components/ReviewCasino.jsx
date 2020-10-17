import React, { Component } from 'react'
import woman from '../assets/images/woman.png'
import man from '../assets/images/man.png'

export default class ReviewCasino extends Component {
  render() {
    let imgWidth = {
      width: '60px',
    }
    return (
      <div className="container mt-3 section__pannel">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <h3>Review Casino</h3>
            <div className="media border p-3">
              <img
                src={man}
                alt="John Doe"
                className="mr-3 mt-3 rounded-circle"
                style={imgWidth}
              />
              <div className="media-body">
                <h4>
                  John Doe{' '}
                  <small>
                    <i>Posted on February 19, 2016</i>
                  </small>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="media border p-3">
              <img
                src={woman}
                alt="John Doe"
                className="mr-3 mt-3 rounded-circle"
                style={imgWidth}
              />
              <div className="media-body">
                <h4>
                  Jenna Doe{' '}
                  <small>
                    <i>Posted on February 19, 2016</i>
                  </small>
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
