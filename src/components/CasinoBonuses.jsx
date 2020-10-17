import React, { Fragment, Component } from 'react'
import data from './bonuses.json'
import map from 'lodash/map'
import size from 'lodash/size'

export default class CasinoBonuses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHovered: false,
    }
    this.handlePanelsHover = this.handlePanelsHover.bind(this)
  }

  handlePanelsHover() {
    this.setState({
      isHovered: !this.state.isHovered,
    })
  }

  getPanelItems() {
    const menuActive = this.state.isHovered ? 'flip' : ''
    const items = map(data, (item) => {
      return (
        <div
          key={item.id}
          className={'pannel ' + menuActive}
          onClick={this.handlePanelsHover}
        >
          <div className="pannel__front">
            <p className="pannel__title">{item.bonuses}</p>
            <div className="pannel__amount">
              <h4>
                <span>{item.percentage}</span>
                <br /> up to
              </h4>
              <h2>
                <span>€/£/$ 250</span>
              </h2>
            </div>
            <div className="pannel__codes">
              <p className="pannel__p pannel__p--blue">
                Code: <b>{item.code}</b>
              </p>
              <p className="pannel__p pannel__p--blue">
                WR: <span>{item.wr}</span>
              </p>
            </div>
            <div className="pannel__cta">
              <button
                type="button"
                className="btn btn-primary btn-lg btn-block"
              >
                PLAY NOW
              </button>
            </div>
          </div>
          <div className="pannel__back">
            <p className="pannel__text">{item.backText}</p>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              PLAY NOW
            </button>
          </div>
        </div>
      )
    })

    if (size(items) !== 0) {
      return <Fragment>{items}</Fragment>
    } else {
      return null
    }
  }

  render() {
    return (
      <div className="section__pannel">
        <h3>Casino Bonuses</h3>
        <div className="pannel__row">{this.getPanelItems()}</div>
      </div>
    )
  }
}
