import React from 'react';
import { Container, Header, } from 'semantic-ui-react';
import Menus from './components/Menus';
import axios from 'axios';
import MenuForm from './components/MenuForm';

class App extends React.Component {
  state = { menus: [], };

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => {
        this.setState({ menus: res.data, });
      })
      .catch( err => {
        console.log(err);
      })
  };

  addMenu = (name) => {
    axios.post('/api/menus', {name})
      .then( res => {
        this.setState({ menus: [...this.state.menus, res.data,]})
      })
      .catch( err => {
        console.log(err);
      })
  };

  updateMenu = (id) => {
    axios.post(`/api/menus/${id}`)
      .then( res => {
        debugger; // not hitting :(
        const menus = this.state.menus.map( menu => {
        if (menu.id === id)
          return res.data;
        return menu;
      });
      this.setState({ menus, });
    })
    .catch( err => {
      console.log(err);
    })
  };

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        const { menus, } = this.state;
        this.setState({ menus: menus.filter( menu => menu.id !== id), })
      })
      .catch( err => {
        console.log(err);
      })
  };

  render() {
    return (
      <Container>
        <Header as="h1">The Resaurant</Header>
        <br />
        <Menus 
          menus={this.state.menus} 
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
        />
        <br />
        <MenuForm addMenu={this.addMenu}/>
      </Container>
    );
  };
};

export default App;
