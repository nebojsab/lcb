import React, { Component } from 'react'
import BlogPic from '../assets/images/blogpic.png'

export default class BlogPannel extends Component {
  render() {
    let imgHeight = {
      height: 'auto',
    }
    return (
      <div className="container mt-3 section__pannel">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className="row text-center slideanim slide">
              <div className="col-sm-6 col-md-4 text-left blognews">
                <div className="thumbnail">
                  <img src={BlogPic} alt="post 1" style={imgHeight} />
                  <p className="blog__date">april 25, 2016</p>
                  <h5>Lorem ipsum dolor sit amet, duo fugit vivendum</h5>
                  <p className="blog__text">
                    Quo altera mentitum repudiandae ex, te putent splendide est.
                    Ei etiam vidisse his, est te aeterno scripserit dkies polutr
                    ...
                  </p>
                  <p>
                    <a href="#">
                      <strong>READ MORE</strong>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 text-left blognews">
                <div className="thumbnail">
                  <img src={BlogPic} alt="post 2" style={imgHeight} />
                  <p className="blog__date">april 25, 2016</p>
                  <h5>Lorem ipsum dolor sit amet, duo fugit vivendum</h5>
                  <p className="blog__text">
                    Quo altera mentitum repudiandae ex, te putent splendide est.
                    Ei etiam vidisse his, est te aeterno scripserit dkies polutr
                    ...
                  </p>
                  <p>
                    <a href="#">
                      <strong>READ MORE</strong>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 text-left blognews">
                <div className="thumbnail">
                  <img src={BlogPic} alt="post 3" style={imgHeight} />
                  <p className="blog__date">april 25, 2016</p>
                  <h5>Lorem ipsum dolor sit amet, duo fugit vivendum</h5>
                  <p className="blog__text">
                    Quo altera mentitum repudiandae ex, te putent splendide est.
                    Ei etiam vidisse his, est te aeterno scripserit dkies polutr
                    ...
                  </p>
                  <p>
                    <a href="#">
                      <strong>READ MORE</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
