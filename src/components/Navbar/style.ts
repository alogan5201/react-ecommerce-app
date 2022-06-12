import styled from 'styled-components/macro';

export const CartButton = styled.button`
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  color: #ececec;

  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 10%;
  left: 0;
  cursor: pointer;
  z-index: 2;

 

  &:hover {
    filter: brightness(85%);
  }
`;
