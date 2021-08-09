import styled from "styled-components";

export const ProjectsShowcaseContainer = styled.section`
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
  padding: 0 6vw 100px 6vw;
`;

export const Header = styled.h2`
  font-size: 35px;
  color: ${(props) => props.theme.colors.typography};
  padding: 30px 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background: ${(props) => props.theme.colors.typography};
  /* width: 33%; */
  padding: 10px;
  border-radius: 10px 10px 0 0;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  max-height: 250px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

export const CardTypography = styled.div``;

export const CardHeader = styled.h4`
  color: ${(props) => props.theme.colors.background};
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.background};
  font-weight: 300;
  margin-bottom: 20px;
`;

export const CardLink = styled.a`
  position: absolute;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
  bottom: 10px;
  right: 10px;
`;
