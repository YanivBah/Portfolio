import { NavbarContainer, Logo, Links, Link } from "./Navbar.styles";

export default function Navbar() {
  return (
    <NavbarContainer>
      <Logo>Yaniv Bahalker</Logo>
      <Links>
        <Link href="#">Home</Link>
        <Link href="#">Articles</Link>
        <Link href="#">Projects</Link>
        <Link href="#">About Me</Link>
      </Links>
    </NavbarContainer>
  );
}
