import { NavbarContainer, Links, ATag, CurrentATag } from "./Navbar.styles";
import Link from "next/link";
import { useRouter } from "next/router";
import useConstants from "../../hooks/useConstants";

export default function Navbar() {
  const router = useRouter();
  const { navbar } = useConstants();

  // Different component style if its a current page or not
  const isCurrentPage = (path: string, linkName: string) => {
    if (router.pathname === path) {
      return <CurrentATag>{linkName}</CurrentATag>;
    } else {
      return <ATag>{linkName}</ATag>;
    }
  };

  return (
    <NavbarContainer>
      <Links>
        <Link href="/" passHref={true}>
          {isCurrentPage("/", navbar.HOME)}
        </Link>

        <Link href="/articles" passHref={true}>
          {isCurrentPage("/articles", navbar.ARTICLES)}
        </Link>

        <Link href="/projects" passHref={true}>
          {isCurrentPage("/projects", navbar.PROJECTS)}
        </Link>

        <Link href="/me" passHref={true}>
          {isCurrentPage("/me", navbar.ME)}
        </Link>
      </Links>
    </NavbarContainer>
  );
}
