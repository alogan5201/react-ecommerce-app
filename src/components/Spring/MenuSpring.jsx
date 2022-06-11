import React, { useState } from 'react';

import { XCircle as XIcon } from 'react-feather';
import {
  animated,
  useSpring,
  useSprings,
  useChain,
  useSpringRef,
} from 'react-spring';

import styled, { ThemeProvider } from 'styled-components';

import { Box, Container, Heading, Flex, theme } from '../../ui';

import '../../ui/molecules/global-styles/global.css';

import { menuList, loremList } from '../../data';

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
  transition: color 0.2s;
  :hover {
    color: blue;
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
  borderColor: 'bg100',
};

function MenuSpring() {
  const [open, setOpen] = useState(false);

  const springRef = useSpringRef();
  const { background, iconTransform, ...springProps } = useSpring({
    ref: springRef,
    background: open ? blue : orange,
    iconTransform: open ? 'rotate(0deg)' : 'rotate(-45deg)',
    height: open ? `${menuItemHeight * menuList.length}px` : '0px',
    from: {
      background: orange,
      iconTransform: 'rotate(-45deg)',
      height: '0px',
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
    <ThemeProvider theme={theme}>
      <Box bg="bg100" minHeight="100vh" py={1}>
        <Container>
          <Heading textAlign="center">React Spring Example - useChain</Heading>
          <MenuBar onClick={() => setOpen(!open)} style={{ background }}>
            <AnimatedBox height={36} style={{ transform: iconTransform }}>
              <XIcon size={36} />
            </AnimatedBox>
            <Box pl={2}>Menu</Box>
          </MenuBar>
          <Menu style={springProps}>
            {springs.map(({ x, ...props }, i) => (
              <MenuItem
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
          <Box>
            <Heading as="h2">{loremList[0]}</Heading>
            <ul>
              {loremList.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default MenuSpring;
