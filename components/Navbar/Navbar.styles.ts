import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  width: fit-content;
  margin: 10px 30px 0 0;
  position: absolute;
  right: 0;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: ${(props) => props.theme.flex.direction};
  font-size: 22px;
`;

export const ATag = styled.a`
  font-size: 18px;
  margin: 4px 15px;
  text-decoration: none;
  position: relative;
  padding: 2px;
  color: ${(props) => props.theme.colors.typography};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    background: ${(props) => props.theme.colors.typography};
    transition: width 1s, opacity 1s;
    opacity: 0%;
  }

  &:hover::after {
    width: 100%;
    opacity: 100%;
  }
`;

export const CurrentATag = styled.a`
font-size: 18px;
  margin: 4px 15px;
  text-decoration: none;
  position: relative;
  padding: 2px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    background: ${(props) => props.theme.colors.primary};
    transition: width 1s, opacity 1s;
    opacity: 0%;
  }

  &:hover::after {
    width: 100%;
    opacity: 100%;
  }
`