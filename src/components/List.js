import React, { Component } from "react";
import Item from "./Item";

class List extends Component {
  render() {
    const { items, handleDelete, handleEdit } = this.props;

    const itemComps = items.map((item, idx) => {
      return <Item
        key={idx}
        item={item}
        idxLabel={idx + 1}
        handleDelete={handleDelete}
        handleEdit={handleEdit} 
      />;
    });

    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th style={{ width: "10%" }} className="text-center">
                #
              </th>
              <th>Task</th>
              <th style={{ width: "20%" }} className="text-center">
                Level
              </th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>{itemComps}</tbody>
        </table>
      </div>
    );
  }
}

export default List;
