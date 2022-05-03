import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Control extends Component {
  render() {
    const { isShowForm, handleSearch, handleSort } = this.props;

    const btnEle = isShowForm ? (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button
          type="button"
          className="btn btn-success btn-block"
          onClick={this.props.toggleForm}
        >CLOSE FORM
        </button>
      </div>
    ) : (
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <button
          type="button"
          className="btn btn-info btn-block"
          onClick={this.props.toggleForm}
        >ADD TASK
        </button>
      </div>
    )

    return (
      <>
        <div className="row">
          <Search handleSearch={handleSearch} />
          <Sort handleSort={handleSort} />
          {btnEle}
        </div>
        <br />
      </>
    );
  }
}

export default Control;
