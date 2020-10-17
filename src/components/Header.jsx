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
        <div className="container-fluid abovenav">
          <div className="row">
            <div className="col-sm-3">
              <img src={logo} className="img-fluid" alt="..." />
            </div>
            <div className="col-sm-5">
              <p className="newcol">
                {' '}
                The best gambling news source! Subscribe to get weekly updates:
              </p>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <button className="btn btn-success" type="submit">
                    Subscription
                  </button>{' '}
                </div>
              </div>
            </div>
            <div className="col-sm-4 ">
              <img
                src={logoSecondary}
                className="img-fluid logoright"
                alt="..."
              />
            </div>
          </div>
        </div>
        {/*  */}
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item mainnav">
                <a className="nav-link" href="#">
                  WORLD CASINOS
                </a>
              </li>
              <li className="nav-item mainnav">
                <a className="nav-link" href="index.html">
                  ONLINE CASINOS
                </a>
              </li>
              <li className="nav-item mainnav">
                <a className="nav-link" href="#">
                  NEWS
                </a>
              </li>
              <li className="nav-item mainnav">
                <a className="nav-link" href="#">
                  GAMES & RULES
                </a>
              </li>
              <li className="nav-item mainnav">
                <a className="nav-link" href="#">
                  POKER
                </a>
              </li>
              <li className="nav-item mainnav">
                <a className="nav-link" href="#">
                  BINGO
                </a>
              </li>
              <li className="nav-item mainnav">
                <a className="nav-link" href="#">
                  SPORTS
                </a>
              </li>
              <li className="nav-item mainnav">
                <a className="nav-link" href="#">
                  RACING
                </a>
              </li>
              <li className="nav-item mainnav">
                <a className="nav-link" href="#">
                  LOTTERY
                </a>
              </li>
              <li className="nav-item mainnav">
                <a className="nav-link" href="#">
                  LOGIN/REGISTER
                </a>
              </li>
            </ul>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </nav>
        {/**/}
        <div className="container-fluid bg-light">
          <div className="row">
            <div className="col-sm-5 text-center">
              <div className="news">
                <span>LATEST CASINO NEWS</span>
                <ul>
                  <li>
                    <a href="#">
                      Hard Rock Internatioinal Seeks Gas Station For...
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Hard Rock Internatioinal Seeks Gas Station For...
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Hard Rock Internatioinal Seeks Gas Station For...
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Hard Rock Internatioinal Seeks Gas Station For...
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-7 text-center">
              <ul className="nav ">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Calendars
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gaming Law
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tribal Gaming
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Major Casino News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Gaming News By Region
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
                <div className="row">
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
