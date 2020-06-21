import React, { useState } from 'react';
import { Container } from './NavBar.styles';
// @ts-ignore
import { Input, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  // @ts-ignore
  const [activeItem, setActiveItem] = useState('');

  function handleItemClick(name) {
    setActiveItem(name);
  }

  return (
    <Container>
      <Menu secondary>
        <Link to="/">
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            // @ts-ignore
            onClick={() => handleItemClick('home')}
          />
        </Link>

        <Link to="/map">
          <Menu.Item
            name="map"
            active={activeItem === 'map'}
            // @ts-ignore
            onClick={() => handleItemClick('map')}
          />
        </Link>

        <Link to="/destinations">
          <Menu.Item
            name="destinations"
            active={activeItem === 'destinations'}
            // @ts-ignore
            onClick={() => handleItemClick('destinations')}
          />
        </Link>

        <Link to="/itineraries">
          <Menu.Item
            name="itineraries"
            active={activeItem === 'itineraries'}
            // @ts-ignore
            onClick={() => handleItemClick('itineraries')}
          />
        </Link>

        <Link to="/contact">
          <Menu.Item
            name="contact"
            active={activeItem === 'contact'}
            // @ts-ignore
            onClick={() => handleItemClick('contact')}
          />
        </Link>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>

          <Link to="/logout">
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              // @ts-ignore
              onClick={() => handleItemClick('logout')}
            />
          </Link>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};