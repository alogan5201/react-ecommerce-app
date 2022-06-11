import styled from 'styled-components/macro';


interface IContainer {
    isOpen: boolean;
}
export const Container = styled.div<IContainer>`
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    box-sizing: border-box;
    z-index: 99;
  


  `;