import React, { Component } from 'react'
import CasinoBonuses from './CasinoBonuses'
import CasinoGallery from './CasinoGallery'
import CasinoReview from './CasinoReview'
import ReviewCasino from './ReviewCasino'
import FilterableTable from './FilterableTable'
import BlogPannel from './BlogPannel'
import CasinoDetails from './CasinoDetails'

export default class MainContent extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-sm-12 col-md-9">
            <CasinoBonuses />
            <CasinoGallery />
            <CasinoReview />
            <ReviewCasino />
            <FilterableTable />
            <BlogPannel />
          </div>

          <CasinoDetails />
        </div>
      </div>
    )
  }
}
