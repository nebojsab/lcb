import React, { Component } from 'react'
import carouselImgOne from '../assets/images/carousel.jpg'
import carouselImgTwo from '../assets/images/carousel2.jpg'
import carouselImgThree from '../assets/images/carousel3.jpg'

export default class CasinoGallery extends Component {
  render() {
    return (
      <div className="container mt-3 section__pannel">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <h3>Casino Gallery</h3>
            <div id="demo" className="carousel slide" data-ride="carousel">
              <ul className="carousel-indicators">
                <li
                  data-target="#demo"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={carouselImgOne} alt="carousel1" width="100%" />
                </div>
                <div className="carousel-item">
                  <img src={carouselImgTwo} alt="carousel2" width="100%" />
                </div>
                <div className="carousel-item">
                  <img src={carouselImgThree} alt="carousel3" width="100%" />
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <span className="carousel-control-prev-icon"></span>
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <span className="carousel-control-next-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
