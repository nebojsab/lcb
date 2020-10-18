import React, { Fragment, Component } from 'react'
import logo from '../assets/images/logo.png'
import logoSecondary from '../assets/images/logo2.png'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState()
  }

  getInitialState = () => ({
    isSidebarOpen: false,
  })

  handleBurgerClick = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen })
  }

  render() {
    const { isSidebarOpen } = this.state

    return (
      <Fragment>
        <div className="header">
          <div className="header__inner">
            <div className="header__logo">
              <img alt="..." className="img-fluid" src={logo} />
            </div>
            <div className="header__ctas">
              <div className="header__input">
                <p>
                  The best gambling news source! Subscribe to get weekly
                  updates:
                </p>

                <div className="header__subscribe">
                  <input
                    className="subscribe__input"
                    placeholder="Email"
                    type="text"
                  />
                  <div className="input-group-append">
                    <button className="button--blue" type="submit">
                      Subscription
                    </button>
                  </div>
                </div>
              </div>
              <div className="header__banner">
                <img
                  alt="..."
                  className="img-fluid logoright"
                  src={logoSecondary}
                />
              </div>
            </div>
          </div>
        </div>

        <nav className={`nav ${isSidebarOpen === true ? 'is-visible' : ''}`}>
          <div
            className="nav__menu--close"
            onClick={this.handleBurgerClick}
          ></div>
          <ul className="nav__list">
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
                onClick={this.handleBurgerClick}
              >
                WORLD CASINOS
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="index.html"
                onClick={this.handleBurgerClick}
              >
                ONLINE CASINOS
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
                onClick={this.handleBurgerClick}
              >
                NEWS
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
                onClick={this.handleBurgerClick}
              >
                GAMES & RULES
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
                onClick={this.handleBurgerClick}
              >
                POKER
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
                onClick={this.handleBurgerClick}
              >
                BINGO
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
                onClick={this.handleBurgerClick}
              >
                SPORTS
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
                onClick={this.handleBurgerClick}
              >
                RACING
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
                onClick={this.handleBurgerClick}
              >
                LOTTERY
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
                onClick={this.handleBurgerClick}
              >
                LOGIN/REGISTER
              </a>
            </li>
          </ul>
          <form className="nav__form">
            <input
              aria-label="Search"
              className="nav__input"
              placeholder="Search"
              type="search"
            />
            <div
              className="nav__input--ico"
              onClick={this.handleBurgerClick}
            ></div>
          </form>
        </nav>
        <div
          className={`nav-burger ${isSidebarOpen === true ? 'is-clicked' : ''}`}
          onClick={this.handleBurgerClick}
        >
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </div>

        <div className="sub-nav">
          <ul className="sub-nav__list">
            <li className="sub-nav__item">
              <a className="sub-nav__link" href="#">
                Calendars
              </a>
            </li>
            <li className="sub-nav__item">
              <a className="sub-nav__link" href="#">
                Gaming Law
              </a>
            </li>
            <li className="sub-nav__item">
              <a className="sub-nav__link" href="#">
                Tribal Gaming
              </a>
            </li>
            <li className="sub-nav__item">
              <a className="sub-nav__link" href="#">
                Major Casino News
              </a>
            </li>
            <li className="sub-nav__item">
              <a className="sub-nav__link" href="#">
                Gaming News By Region
              </a>
            </li>
          </ul>
        </div>

        <div className="news-ticker">
          <div id="breaking">LATEST CASINO NEWS:</div>
          <div id="newsTicker">
            <p></p>
          </div>
        </div>
      </Fragment>
    )
  }
}
