import Link from "next/link";
import {
  Card,
  Header,
  ProjectsShowcaseContainer,
  CardsContainer,
  CardImage,
  CardTypography,
  CardHeader,
  CardDescription,
  CardLink,
} from "./ProjectsShowcase.styles";

export default function ProjectsShowcase() {
  return (
    <ProjectsShowcaseContainer>
      <Header>My Latest Work</Header>
      <CardsContainer>
        <Card>
          <CardImage
            src="https://images.ctfassets.net/gg4ddi543f5b/a1SpK5iekgPkS9a5u7AK1/9f85516296960fb97dac7161b6d37be4/website-project-management-blog.png"
            alt="Picture of me"
          />
          <CardTypography>
            <CardHeader>Foodie</CardHeader>
            <CardDescription>
              Blog styled platform for food enthusiastic
            </CardDescription>
          </CardTypography>

          <Link href="/articles" passHref={true}>
            <CardLink>Read More</CardLink>
          </Link>
        </Card>

        <Card>
          <CardImage
            src="https://images.ctfassets.net/gg4ddi543f5b/a1SpK5iekgPkS9a5u7AK1/9f85516296960fb97dac7161b6d37be4/website-project-management-blog.png"
            alt="Picture of me"
          />
          <CardTypography>
            <CardHeader>Foodie</CardHeader>
            <CardDescription>
              Blog styled platform for food enthusiastic
            </CardDescription>
          </CardTypography>
          <Link href="/articles" passHref={true}>
            <CardLink>Read More</CardLink>
          </Link>
        </Card>

        <Card>
          <CardImage
            src="https://images.ctfassets.net/gg4ddi543f5b/a1SpK5iekgPkS9a5u7AK1/9f85516296960fb97dac7161b6d37be4/website-project-management-blog.png"
            alt="Picture of me"
          />
          <CardTypography>
            <CardHeader>Foodie</CardHeader>
            <CardDescription>
              Blog styled platform for food enthusiastic
            </CardDescription>
          </CardTypography>
          <Link href="/articles" passHref={true}>
            <CardLink>Read More</CardLink>
          </Link>
        </Card>
      </CardsContainer>
    </ProjectsShowcaseContainer>
  );
}
