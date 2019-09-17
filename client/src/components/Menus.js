import React from 'react';
import Menu from './Menu';

const Menus = ({ menus, updateMenu, deleteMenu, }) => (
  <div>
    { menus.map( menu => 
        <div>
          <Menu 
            key={menu.id}
            {...menu}
            updateMenu={updateMenu} 
            deleteMenu={deleteMenu}            
          />
          <br />
        </div>
      )
    }
  </div>
);

export default Menus;