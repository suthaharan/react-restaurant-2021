import React from 'react';
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

const Menu = () => {
  return (<div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className="menuList">
        { MenuList.map( (menu, key) => {

            return <MenuItem image={menu.image} name={menu.name} price={menu.price} key={key} />
        })}
      </div>
  </div>);
};

export default Menu;
