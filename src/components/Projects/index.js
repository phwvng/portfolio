import React from "react";
import {
  ProjectsContainer,
  ProjectsContent,
  ProjectsLabel,
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectCard,
  CardHeader,
  WindowButtons,
  WindowButton,
  FileName,
  ProjectTitle,
  ProjectDescription,
  TechStack,
  Tech,
  ButtonGroup,
  ProjectButton,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsContent>

        <ProjectsLabel>$ cd projects</ProjectsLabel>

        <ProjectsTitle>Projects</ProjectsTitle>

        <ProjectsSubtitle>
          A selection of projects showcasing my experience in
          full-stack development and modern deployment workflows.
        </ProjectsSubtitle>

        <ProjectCard>

          <CardHeader>

            <WindowButtons>
              <WindowButton color="#ff5f56" />
              <WindowButton color="#ffbd2e" />
              <WindowButton color="#27c93f" />
            </WindowButtons>

            <FileName>bachelor-thesis.jsx</FileName>

          </CardHeader>

          <ProjectTitle>
            Bachelor Thesis Web Application
          </ProjectTitle>

          <ProjectDescription>
            Developed a full-stack web application as part of my Bachelor's
            thesis using React, Python, Supabase and SQLite. The application
            integrates external APIs and was deployed using Vercel and Render,
            providing practical experience with modern software development,
            deployment workflows and cloud-hosted applications.
          </ProjectDescription>

          <TechStack>
            <Tech>React</Tech>
            <Tech>Python</Tech>
            <Tech>Supabase</Tech>
            <Tech>SQLite</Tech>
            <Tech>REST API</Tech>
            <Tech>Vercel</Tech>
            <Tech>Render</Tech>
          </TechStack>

          <ButtonGroup>
            <ProjectButton
              href="https://graph-atlas.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </ProjectButton>

            <ProjectButton
              href="https://github.com/phwvng/graph-atlas"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ProjectButton>
          </ButtonGroup>

        </ProjectCard>

<ProjectCard>
          <CardHeader>
            <WindowButtons>
              <WindowButton color="#ff5f56" />
              <WindowButton color="#ffbd2e" />
              <WindowButton color="#27c93f" />
            </WindowButtons>

            <FileName>pluzzle-game.jsx</FileName>
          </CardHeader>

          <ProjectTitle>Pluzzle</ProjectTitle>

          <ProjectDescription>
            Developed a React-based puzzle game inspired by Rullo, combining
            Wordle-style guessing with mathematical puzzle logic. The project
            focuses on interactive gameplay, state management, and a clean user
            interface for a browser-based game experience.
          </ProjectDescription>

          <TechStack>
            <Tech>React</Tech>
            <Tech>JavaScript</Tech>
            <Tech>Game Logic</Tech>
            <Tech>UI Design</Tech>
          </TechStack>

          <ButtonGroup>
            <ProjectButton
              href="https://pluzzlegame.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </ProjectButton>

            <ProjectButton
              href="https://github.com/phwvng/pluzzle"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ProjectButton>
          </ButtonGroup>
        </ProjectCard>

      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;