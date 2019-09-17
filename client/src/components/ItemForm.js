import React from 'react';
import { Form, } from 'semantic-ui-react';

class ItemForm extends React.Component {
  state = { name: "", price: "", description: "", }

  componentDidMount() {
  };

  handleChange = (e) => {
  };

  handleSubmit = (e) => {
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          name="name"
          placeholder="New menu item"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Form.Input 
          name="price"
          placeholder="$"
          value={this.state.price}
          onChange={this.handleChange}
        />
        <Form.Input 
          name="description"
          placeholder="describe"
          value={this.state.description}
          onChange={this.handleChange}
        />
      </Form>
    )
  }
};

export default ItemForm;