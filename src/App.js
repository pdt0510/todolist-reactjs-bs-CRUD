import "./App.css";
import React, { Component } from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import Form from "./components/Form";
import List from "./components/List";
import tasksProd from "./mock/task";
import SearchSortHandler from "./control/SearchSortHandler";

//src9, app3 - tasksProd
class App extends Component {
  state = {
    items: null,
    isShowForm: false,
    strSearch: '',
    orderBy: '',
    orderDir: '',
    itemSelected: null,
  };

  UNSAFE_componentWillMount = () => {
    let items = JSON.parse(localStorage.getItem('tasksProd'));

    this.setState({
      items: items ? items : tasksProd,
    });
  }

  resetAllData = () => {
    localStorage.removeItem('tasksProd');
    this.UNSAFE_componentWillMount()
  }

  toggleForm = () => {
    this.setState({
      isShowForm: !this.state.isShowForm,
      itemSelected: null
    });
  };

  handleSearch = (value) => {
    this.setState({ strSearch: value });
  }

  handleSort = (value) => {
    this.setState({
      orderBy: value.orderBy,
      orderDir: value.orderDir
    })
  }

  handleDelete = (id) => {
    const items = this.state.items.filter(item => item.id !== id);
    this.setState({ items: items });
    localStorage.setItem('tasksProd', JSON.stringify(items));
  }

  handleSubmit = (formState) => {
    const { items } = this.state;
    let { v4: idRandom } = require("uuid");
    let { taskName, taskLevel, taskId } = formState;

    if (taskId !== null) {
      for (const item of items) {
        if (item.id === taskId) {
          item.name = taskName;
          item.level = Number(taskLevel);
          break;
        }
      }
    }
    else {
      items.push({
        id: idRandom(),
        name: taskName,
        level: Number(taskLevel),
      });
    }

    this.setState({
      items: items,
      isShowForm: false,
    })

    localStorage.setItem('tasksProd', JSON.stringify(items));
  }

  handleEdit = (item) => {
    this.setState({
      itemSelected: item,
      isShowForm: true,
    })
  }

  render() {
    const { items, isShowForm,
      strSearch, orderBy, orderDir, itemSelected } = this.state;

    if (strSearch || orderBy) {
      var listShown = SearchSortHandler(
        items, orderBy, orderDir, strSearch);
    }

    return (
      <div>
        <Title
          resetAllData={this.resetAllData}
          tasksProd={'tasksProd'}
        />
        <Control
          toggleForm={this.toggleForm}
          isShowForm={isShowForm}
          strSearch={strSearch}
          handleSearch={this.handleSearch}
          handleSort={this.handleSort}
        />
        {
          isShowForm ?
            <Form
              toggleForm={this.toggleForm}
              handleSubmit={this.handleSubmit}
              editingItem={itemSelected}
            /> : ""
        }
        {
          (<List
            items={listShown ? listShown : items}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />)
        }
      </div>
    );
  }
}

export default App;
