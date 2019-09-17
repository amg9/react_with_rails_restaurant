import React from 'react';
import Item from './Item';


const Items = ({ items, }) => (
  <div>
    { items.map( item => 
        <div>
          <Item 
            key={item.id}
            {...item}
          />
          <br />
        </div>
      )
    }
  </div>
);

export default Items;