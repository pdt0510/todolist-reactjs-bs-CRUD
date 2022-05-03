import React, { Component } from 'react';

class StudyForm extends Component {
  state = {
    fullname: '',
    course: 'nodejs',
    object: 'ngKhuyetTat',
    sendMail: false,
  }

  handleChange = (event) => {
    let { name, value, type, checked } = event.target;
    value = type === 'checkbox' ? checked : value;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    let { fullname, course, object, sendMail } = this.state;

    return (
      <div className="row" style={{ margin: '20px 8px' }}>
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Study Form</h3>
          </div>

          <div className="panel-body">
            <form
              action="#" method="post"
              onSubmit={this.handleSubmit}
            >
              <legend>Form Register</legend>

              <div className="form-group">
                <label htmlFor="">Họ Tên</label>
                <input
                  className="form-control"
                  id="" input='true'
                  placeholder="Fullname"
                  type="text"
                  name='fullname'
                  value={fullname}
                  onChange={this.handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="">Khóa học</label>
                <select
                  className="form-control" required="required"
                  name='course'
                  value={course}
                  onChange={this.handleChange}
                >
                  <option value="angular">Angular</option>
                  <option value="react">React</option>
                  <option value="nodejs">Nodejs</option>
                  <option value="php">Php</option>
                </select>
              </div>

              <div className="form-group">
                <label>Đối tượng</label>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      name='object'
                      value='oldStudent'
                      checked={object === 'oldStudent'}
                      onChange={this.handleChange}
                    /> Học viên cũ
                  </label>
                </div>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      name='object'
                      value='curStudent'
                      checked={object === 'curStudent'}
                      onChange={this.handleChange}
                    /> Học sinh - sinh viên
                  </label>
                </div>
                <div className='radio'>
                  <label>
                    <input
                      type='radio'
                      name='object'
                      value='ngKhuyetTat'
                      checked={object === 'ngKhuyetTat'}
                      onChange={this.handleChange}
                    /> Người khuyết tật
                  </label>
                </div>
              </div>

              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    name='sendMail'
                    checked={sendMail}
                    onChange={this.handleChange}
                  />
                  Send mail
                </label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default StudyForm;
