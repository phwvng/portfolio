import React from 'react';
import {
  SkillsContainer,
  SkillsContent,
  SkillsLabel,
  SkillsTitle,
  SkillsSubtitle,
  SkillsList,
  SkillsItem,
  SkillsIconWrapper,
  SkillsText,
  SkillsDescription,
  PythonIcon,
  JSIcon,
  ReactIcon,
} from './SkillsElements';

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsContent>
        <SkillsLabel>$ ls tech-stack</SkillsLabel>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsSubtitle>
          A focused set of technologies I use to build clean, modern applications.
        </SkillsSubtitle>

        <SkillsList>
          <SkillsItem>
            <SkillsIconWrapper>
              <PythonIcon />
            </SkillsIconWrapper>
            <SkillsText>Python</SkillsText>
            <SkillsDescription>Automation • AI • Backend</SkillsDescription>
          </SkillsItem>

          <SkillsItem>
            <SkillsIconWrapper>
              <JSIcon />
            </SkillsIconWrapper>
            <SkillsText>JavaScript</SkillsText>
            <SkillsDescription>Frontend • Logic • Web Apps</SkillsDescription>
          </SkillsItem>

          <SkillsItem>
            <SkillsIconWrapper>
              <ReactIcon />
            </SkillsIconWrapper>
            <SkillsText>React</SkillsText>
            <SkillsDescription>Components • UI • SPAs</SkillsDescription>
          </SkillsItem>
        </SkillsList>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;