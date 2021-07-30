import { NavbarContainer, Links, ATag, CurrentATag } from "./Navbar.styles";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

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
          {isCurrentPage("/", "Home")}
        </Link>

        <Link href="/articles" passHref={true}>
          {isCurrentPage("/articles", "Articles")}
        </Link>

        <Link href="/projects" passHref={true}>
          {isCurrentPage("/projects", "Projects")}
        </Link>

        <Link href="/me" passHref={true}>
          {isCurrentPage("/me", "About Me")}
        </Link>
      </Links>
    </NavbarContainer>
  );
}
