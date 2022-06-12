import { useState } from 'react';

import { Search } from 'react-feather';
import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useSprings,
} from 'react-spring';

import styled from 'styled-components';

import { Box, Container, Flex, theme } from '../../ui';

import { BsXCircle } from 'react-icons/bs';
import { MdSearch } from 'react-icons/md';
import { menuList } from '../../data';
import '../../ui/molecules/global-styles/global.css';

const blue = theme.colors.brand;
const orange = theme.colors.bg200;

const AnimatedItem = styled(animated(Flex))`
  cursor: pointer;
`;
AnimatedItem.defaultProps = {
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'column',
  color: 'text100',
  bg: 'brand',
  size: 120,
};

const AnimatedBox = styled(animated(Box))``;
AnimatedBox.defaultProps = {};

const MenuBar = styled(animated(Flex))`
  cursor: pointer;
  text-transform: uppercase;
`;
MenuBar.defaultProps = {
  fontSize: 4,
  alignItems: 'center',
  background: orange,
  p: 2,
  color: '#fff',
};

const Menu = styled(animated(Box))`
  overflow: hidden;
`;
Menu.defaultProps = {
  bg: '#fff',
  px: 2,
};

const menuItemHeight = 60;
const MenuItem = styled(animated(Flex))`
  box-sizing: border-box;
  cursor: pointer;
  color: #000;
  font-weight: 400;
  transition: color 0.2s;
  :hover {
    color: #0d6efd;
  }
  :last-child {
    border-bottom: none;
  }
`;
MenuItem.defaultProps = {
  height: menuItemHeight,

  bg: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '2px solid',
  borderColor: '#545469',
};

function MenuSpring() {
  const [open, setOpen] = useState(false);

  const springRef = useSpringRef();
  const searchHeaderStyles = useSpring({ opacity: open ? 1 : 0 });

  const handleMenuClick = (e) => {
    e.preventDefault();
    console.log('🚀 ~ e', e.target.innerText);
  };
  const {
    background,
    iconTransform,
    iconOpacity,

    ...springProps
  } = useSpring({
    ref: springRef,
    background: 'rgb(33, 37, 41)',
    iconOpacity: open ? 0 : 1,

    iconTransform: open ? 'rotate(0deg)' : 'rotate(0deg)',
    height: open ? `${menuItemHeight * menuList.length}px` : '0px',
    from: {
      iconTransform: 'rotate(0deg)',
      height: '0px',
      opacity: 1,
    },
  });

  const springsRef = useSpringRef();
  const delayValue = 20;
  const springs = useSprings(
    menuList.length,
    menuList.map((item, i) => ({
      ref: springsRef,
      item,
      delay: open
        ? i * delayValue
        : menuList.length * delayValue - i * delayValue,
      opacity: open ? 1 : 0,
      width: '492px',
      x: open ? '0%' : '-100%',
      from: {
        opacity: 0,
        x: '-100%',
      },
    }))
  );

  useChain(
    open ? [springRef, springsRef] : [springsRef, springRef],
    open ? [0, 0.25] : [0, 0.75]
  );

  return (
    <Box bg="bg100" className=" w-100 d-sm-none d-lg-block pt-1">
      <Container className="p-0">
        <MenuBar
          style={{ background }}
          className="justify-content-end p-0 position-relative"
        >
          <animated.div style={searchHeaderStyles} className="col">
            {' '}
            <form
              role="search"
              className="me-auto"
              style={{ maxWidth: '500px' }}
            >
              <div className="input-group">
                <span
                  className="btn btn-dark text-light text-opacity-50 d-sm-none d-lg-block "
                  id="basic-addon1"
                >
                  {' '}
                  <MdSearch size={30} />
                </span>
                <input
                  className="form-control me-2 bg-dark border-0 ps-0 text-white border-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                />
                <span
                  onClick={() => setOpen(!open)}
                  className="input-group-text bg-dark  border-0 pe-2 text-white text-opacity-75"
                  id="basic-addon1"
                >
                  {' '}
                  <BsXCircle size={30} />
                </span>
              </div>
            </form>
          </animated.div>

          <AnimatedBox
            onClick={() => setOpen(!open)}
            height={36}
            style={{ transform: iconTransform, opacity: iconOpacity }}
            className="animated-box text-white text-opacity-50"
          >
            <MdSearch size={35} />
          </AnimatedBox>
        </MenuBar>
        <Menu
          style={springProps}
          className="position-absolute searchbar-menu rounded-bottom"
        >
          {springs.map(({ x, ...props }, i) => (
            <MenuItem
              onClick={handleMenuClick}
              className="justify-content-start item"
              key={i}
              style={{
                transform: x.to((x) => `translateX(${x})`),

                ...props,
              }}
            >
              {props.item}
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </Box>
  );
}

export default MenuSpring;
