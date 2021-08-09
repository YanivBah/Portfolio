import styled, { keyframes, css } from "styled-components";
import { motion } from "framer-motion";

export const ContactMeContainer = styled(motion.footer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
`;

export const Header = styled.h2`
  font-size: 35px;
  color: ${(props) => props.theme.colors.typography};
  padding: 30px 6vw;
`;
