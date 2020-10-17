import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid page-footer font-small mdb-color pt-4 mt-4">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                WORLD CASINO DEPOSITORY
              </h6>
              <p>
                <a href="#!">About Us</a>
              </p>
              <p>
                <a href="#!">Contact Us</a>
              </p>
              <p>
                <a href="#!">Terms & Conditions</a>
              </p>
              <p>
                <a href="#!">Privacy Policy</a>
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful links
              </h6>
              <p>
                <a href="#!">Other Gaming Resources</a>
              </p>
              <p>
                <a href="#!">Gambling age chart</a>
              </p>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
            </div>

            <hr className="w-100 clearfix d-md-none" />

            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-4">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                PLEASE NOTE
              </h6>
              <p>
                There are thousands of jurisdictions worldwide with access to
                the internet. It is your responsibility to determine whether it
                is legal for you to place a wager in the jurisdiction in which
                you are located based on local regulatory and age restrictions.
                World Casino Directory is an independent information provider
                and does not process any money. The links on our site are for
                entertainment and informational purposes only. Accuracy is
                intended but is not guaranteed.
              </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
          </div>

          <hr />

          <div className="row d-flex align-items-center">
            <div className="col-md-8 col-lg-8">
              <p className="text-center text-md-left">
                © 2018 Copyright: <strong> LCB CORP</strong>
              </p>
            </div>

            <div className="col-md-4 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
