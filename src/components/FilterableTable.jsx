import React, { Fragment, Component } from 'react'
import $ from 'jQuery'
import data from './games.json'
import map from 'lodash/map'
import size from 'lodash/size'

export default class FilterableTable extends Component {
  getGameItems() {
    const items = map(data, (item) => {
      return (
        <tbody id="myTable" key={item.id}>
          <tr id={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.raiting}</td>
            <td>{item.software}</td>
          </tr>
        </tbody>
      )
    })

    if (size(items) !== 0) {
      return <Fragment>{items}</Fragment>
    } else {
      return null
    }
  }

  render() {
    $(document).ready(function () {
      $('#myInput').on('keyup', function () {
        var value = $(this).val().toLowerCase()
        $('#myTable tr').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
      })
    })

    return (
      <div className="container mt-3 section__pannel">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xs-12">
            <h3>Filterable Table</h3>
            <p>
              Type something in the input field to search the table for first
              names, last names or emails:
            </p>
            <input
              className="form-control"
              id="myInput"
              type="text"
              placeholder="Search.."
            />
            <br />
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>NAME</th>
                  <th>TYPE</th>
                  <th>RAITING</th>
                  <th>SOFTWARE</th>
                </tr>
              </thead>
              {this.getGameItems()}
            </table>
          </div>
        </div>
      </div>
    )
  }
}
