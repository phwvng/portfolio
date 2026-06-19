import React from "react";
import backgroundVideo from "../../videos/hero.mp4";

import {
  HeroContainer,
  VideoBg,
  HeroOverlay,
  HeroContent,
  HeroGreeting,
  HeroTitle,
  Highlight,
  Cursor,
  HeroSubtitle,
  ButtonGroup,
  PrimaryButton,
  SecondaryButton,
  SocialIcons,
  SocialIcon,
  GithubIcon,
  LinkedinIcon,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <VideoBg autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
      </VideoBg>

      <HeroOverlay />

      <HeroContent>
        <HeroGreeting>
          patrick@portfolio:~$ whoami
        </HeroGreeting>

        <HeroTitle>
          Patrick <Highlight>Wang</Highlight>
          <Cursor>_</Cursor>
        </HeroTitle>

        <HeroSubtitle>
          Applied Data Science Master's student focused on software
          development, full-stack web applications, and practical
          data-driven solutions.
          <br />
          <br />
          I work with React, Python, Supabase, SQLite, external APIs,
          and modern deployment workflows using Vercel and Render.
        </HeroSubtitle>

        <ButtonGroup>
          <PrimaryButton href="#projects">
            View Projects ↓
          </PrimaryButton>

          <SecondaryButton href="#skills">
            Tech Stack ↓
          </SecondaryButton>
        </ButtonGroup>

        <SocialIcons>
          <SocialIcon
            href="https://github.com/phwvng"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </SocialIcon>

          <SocialIcon
            href="https://www.linkedin.com/in/patrick-wang-b42702294/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </SocialIcon>
        </SocialIcons>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;