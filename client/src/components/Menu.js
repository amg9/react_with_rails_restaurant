import React from 'react';
import { Header, Button, } from 'semantic-ui-react';
import MenuForm from './MenuForm';
import Items from './Items';
import axios from 'axios';
import ItemForm from './ItemForm'


class Menu extends React.Component {
  state = { 
    showEdit: false, 
    items: [
      { id: 2, name: "punch", price: "12", description: "red", menu_id: 6, },
    ],
    showAddItem: false,
  }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.id}/items`)
    .then( res => {
      debugger; // not hitting :( let's work with fake data for now
      this.setState({ items: res.data, });
    })
    .catch( err => {
      console.log(err);
    })
  };

  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit, })
  }

  toggleAddItem = () => {
    this.setState({ showAddItem: !this.state.showAddItem, })
  }

  render() {
    return (
      <div>
        { 
          this.state.showEdit ? 
          <MenuForm 
            menu={this.props} 
            updateMenu={this.props.updateMenu}
            toggleEdit={this.toggleEdit}
          /> 
          : 
          <Header as="h2">{this.props.name}</Header>
        }
        <Button 
          icon="pencil"
          onClick={this.toggleEdit}
        />
        <Button 
          icon="trash"
          onClick={() => this.props.deleteMenu(this.props.id)}
        />
        <br />
        <Items items={this.state.items}/>
        <Button
          icon="add"
          onClick={this.toggleAddItem}
        />
        { 
          this.state.showAddItem ? 
            <ItemForm /> 
          :
            null
        }
      </div>
    )
  }
};

export default Menu;