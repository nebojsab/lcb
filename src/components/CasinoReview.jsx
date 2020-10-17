import React, { Component } from 'react'

export default class CasinpoReview extends Component {
  render() {
    return (
      <div className="container mt-3 section__pannel">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <h3>Casino Review</h3>
            <p>
              All Slots Casino was established in the year 2000 and since then
              has grown in strength and stature. It is one of the biggest online
              casinos when it comes to slot gaming. All Slots Casino offers over
              300 games in the download format and over 100 games in the instant
              play format. Several of these games are in the free play format as
              well. I think the casino has a great lobby with some of the
              popular games arranged in an arcade like fashion.
            </p>
            <div id="accordion">
              <div className="card">
                <div className="card-header">
                  <a
                    className="card-link"
                    data-toggle="collapse"
                    href="#collapseOne"
                  >
                    <span>Casino Software</span>
                    <span className="plus__x"></span>
                  </a>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a
                    className="collapsed card-link"
                    data-toggle="collapse"
                    href="#collapseTwo"
                  >
                    <span>Games</span>
                    <span className="plus__x"></span>
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a
                    className="collapsed card-link"
                    data-toggle="collapse"
                    href="#collapseThree"
                  >
                    <span>Signup Bonus & Promotions</span>
                    <span className="plus__x"></span>
                  </a>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <a
                    className="collapsed card-link"
                    data-toggle="collapse"
                    href="#collapseFour"
                  >
                    <span>Banking options</span>
                    <span className="plus__x"></span>
                  </a>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
