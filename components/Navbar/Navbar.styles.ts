import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  background-color: gray;
  padding: 10px 5px;
`;

export const Logo = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-size: 22px;
`;

export const Links = styled.div`
  margin-left: 30px;
  display: flex;
  flex-direction: row;
  font-size: 22px;
`;

export const Link = styled.a`
  font-size: 18px;
  margin: 4px 10px;
  text-decoration: none;
  border-bottom: 1px white solid;
  color: ${(props) => props.theme.colors.primary};
`;
