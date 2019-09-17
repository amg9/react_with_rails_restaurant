import React from 'react';
import { Header, Button, } from 'semantic-ui-react';
import MenuForm from './MenuForm';

class Menu extends React.Component {
  state = { showEdit: false, }

  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit, })
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
      </div>
    )
  }
};

export default Menu;