import React from 'react';
import { Header, } from 'semantic-ui-react';


const Item = ({ name, price, description, }) => (
  <div>
    <Header as="h3">{name} ${price}</Header>
    <p>{description}</p>
  </div>
);

export default Item;