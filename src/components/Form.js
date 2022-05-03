import React, { Component } from "react";

//src9
class Form extends Component {
  state = {
    taskId: null,
    taskName: '',
    taskLevel: 0,
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);

    this.setState({
      taskName: '',
      taskLevel: 0,
    })
  }

  UNSAFE_componentWillMount = () => {
    this.updatedByEditingItem(this.props.editingItem); // m01ss
  }

  UNSAFE_componentWillReceiveProps = (nextProps) => {
    this.updatedByEditingItem(nextProps.editingItem); //1m01ss
  }

  // 1m01ss
  updatedByEditingItem = (editingItem) => {
    if (editingItem !== null) {
      this.setState({
        taskId: editingItem.id,
        taskName: editingItem.name,
        taskLevel: editingItem.level,
      })
    }
  }

  render() {
    const { taskName, taskLevel } = this.state;

    return (
      <>
        <div className="row">
          <div className="col-md-offset-7 col-md-5">
            {
              <form
                action="true" method="post" className="form-inline"
                onSubmit={this.handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="true" className="sr-only">
                    label
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name='taskName'
                    value={taskName}
                    onChange={this.handleChange}
                  />
                </div>{" "}
                <div className="form-group">
                  <label htmlFor="true" className="sr-only">
                    label
                  </label>
                  <select
                    className="form-control"
                    required="required"
                    type="text"
                    name='taskLevel'
                    value={taskLevel}
                    onChange={this.handleChange}
                  >
                    <option value={0}>Small</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                  </select>
                </div>{" "}

                {
                  this.props.editingItem ? (
                    <button
                      type="submit"
                      className="btn btn-success"
                    >Update
                    </button>)
                    : (<button
                      type="submit"
                      className="btn btn-primary"
                    >Submit
                    </button>)
                } {' '}
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={this.props.toggleForm}
                >Cancel
                </button>
              </form>
            }
          </div>
        </div >
        <br />
      </>
    );
  }
}

export default Form;
