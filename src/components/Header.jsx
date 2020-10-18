import React, { Fragment } from 'react'
import logo from '../assets/images/logo.png'
import logoSecondary from '../assets/images/logo2.png'
import flag from '../assets/images/flag.png'
import logoBanner from '../assets/images/logoinbanner.png'
import hero from '../assets/images/hero.png'

class Header extends React.Component {
  render() {
    const firstBar = {
      width: '55%',
    }
    const secondBar = {
      width: '65%',
    }
    const thirdBar = {
      width: '40%',
    }
    const fourthBar = {
      width: '45%',
    }
    return (
      <Fragment>
        {/*  */}

        {/**/}

        {/**/}
        <div className="jumbotron text-center">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="row mt-3 hero__logo-plh">
                  <div className="col-sm-3">
                    <img src={logoBanner} alt="" />
                  </div>
                  <div className="col-sm-9 text-left">
                    <h2>All Slots Casino</h2>
                  </div>
                </div>
                <div className="row below__logo-plh">
                  <div className="col-sm-6 text-center">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      VISIT CASINO
                    </button>
                  </div>
                  <div className="col-sm-5">
                    <div className="row">
                      <div className="col-sm-2">
                        <img src={flag} alt="flag" />
                      </div>
                      <div className="col-sm-10">
                        <p className="fontsize">
                          Players from Serbia are accepted at this casino
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2"></div>
              <div className="col-sm-5">
                <div className="container bar">
                  <p>Average 4.5</p>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={firstBar}
                    ></div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={secondBar}
                    ></div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={thirdBar}
                    ></div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      style={fourthBar}
                    ></div>
                  </div>
                  <h2>Review casino</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**/}

        {/**/}

        {/**/}

        {/**/}
      </Fragment>
    )
  }
}

export default Header
