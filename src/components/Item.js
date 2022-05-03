import React, { Component } from "react";

class Item extends Component {

  state = {
    taskName: '',
    taskLevel: 0,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  showLevelEle = (level) => {
    let levelEle = null;
    let label = null;
    if (level === 0) {
      levelEle = "Small";
      label = "label label-primary";
    } else if (level === 1) {
      levelEle = "Medium";
      label = "label label-warning";
    } else if (level === 2) {
      levelEle = "High";
      label = "label label-info";
    }
    return <span className={label}>{levelEle}</span>;
  };

  render() {
    const { idxLabel, item, handleDelete, handleEdit } = this.props;

    return (
      <>
        {
          <tr>
            <td className="text-center">{idxLabel}</td>
            <td>{item.name}</td>
            <td className="text-center">
              {this.showLevelEle(item.level)}
            </td>
            <td>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => handleEdit(item)}
              >Edit
              </button> {" "}
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >Delete
              </button>
            </td>
          </tr>
        }
      </>
    );
  }
}

export default Item;
