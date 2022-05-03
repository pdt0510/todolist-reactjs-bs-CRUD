import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div className="page-header">
        <h1>
          {
            this.props.tasksProd ?
              'Todo List - ReactJs - Production' :
              'Todo List - ReactJs - Deveplopment'
          }

          <button
            type="button"
            className="btn btn-danger"
            style={{
              marginLeft: this.props.tasksProd ? '498px' : '436px'
            }}
            onClick={this.props.resetAllData} // v59xx1
          > RESET ALL DATA
          </button>
        </h1>
      </div>
    );
  }
}

export default Title;
