import React, { Component } from "react";

class Sort extends Component {
  state = {
    orderBy: '',
    orderDir: 'ASC',
    orderDirUi: '',
  };

  updateForBoth = (orderBy, orderDir) => {
    this.props.handleSort({
      orderBy: orderBy,
      orderDir: orderDir,
    });

    this.setState({
      orderBy: orderBy,
      orderDirUi: orderDir,
      orderDir: orderDir === 'ASC' ? 'DESC' : 'ASC',
    })
  }

  handleSortByName = () => {
    this.updateForBoth('NAME', this.state.orderDir);
  }

  handleSortByLevel = () => {
    this.updateForBoth('LEVEL', this.state.orderDir);
  }

  handleSortByNone = () => {
    this.updateForBoth(null, 'ASC');
  }

  render() {
    const { orderBy, orderDirUi } = this.state;

    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="dropdown">
          <button
            type="button"
            className="btn btn-default dropdown-toggle"
            id="dropdownMenu1"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Sort By
            <span className="caret" />
          </button>{" "}
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li>
              <a
                href="##"
                onClick={this.handleSortByName}
              > Name ASC/DESC </a>
            </li>
            <li role="separator" className="divider" href="##"></li>
            <li>
              <a
                href="##"
                onClick={this.handleSortByLevel}
              > Level ASC/DESC </a>
            </li>
            <li role="separator" className="divider" href="##"></li>
            <li>
              <a
                href="##"
                onClick={this.handleSortByNone}
              > None </a>
            </li>
          </ul>
          <span
            className="label label-success label-medium"
            style={{ fontSize: "14px" }}
          >
            {orderBy ? (`${orderBy} - ${orderDirUi}`) : ('')}
          </span>
        </div>
      </div >
    );
  }
}

export default Sort;
