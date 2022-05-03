import React, { Component, createRef } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.fieldFocus = createRef();
  }

  state = {
    strSearch: '',
  }

  handleSearch = () => {
    this.props.handleSearch(this.state.strSearch);
    this.fieldFocus.current.focus();
  }

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.props.handleSearch(this.state.strSearch);
    }
  };

  handleChange = (e) => {
    this.setState({ strSearch: e.target.value });
    if (e.target.value === '') {
      this.props.handleSearch('');
    }
  }

  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
            ref={this.fieldFocus}
            value={this.state.strSearch}
            onKeyPress={this.handleKeyPress}
            onChange={this.handleChange}
          />
          <span className="input-group-btn">
            <button
              type="button"
              className="btn btn-info"
              onClick={this.handleSearch}
            >Go!
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
