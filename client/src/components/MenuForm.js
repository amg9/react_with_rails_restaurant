import React from 'react';
import { Form, } from 'semantic-ui-react';

class MenuForm extends React.Component {
  state = { name: "", }

  componentDidMount() {
    if (this.props.menu) {
      this.setState({ name: this.props.menu.name, })
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.menu) {
      this.props.updateMenu(this.props.menu.id);
      this.props.toggleEdit();
    } else {
      this.props.addMenu(this.state.name);
      this.setState({ name: "", });
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name="name"
          placeholder="New Menu Section"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
};

export default MenuForm;