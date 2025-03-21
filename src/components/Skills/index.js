import React from 'react'
import { SkillsContainer, SkillsTitle, SkillsList, SkillsItem, SkillsIconWrapper, SkillsText, PythonIcon, JSIcon, ReactIcon } from './SkillsElements'

const Skills = () => {
  return (
    <SkillsContainer>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsList>
          <SkillsItem>
            <SkillsIconWrapper>
            <PythonIcon/>
            </SkillsIconWrapper>
            <SkillsText>Python</SkillsText>
          </SkillsItem>

          <SkillsItem>
            <SkillsIconWrapper>
            <JSIcon/>
            </SkillsIconWrapper>
            <SkillsText>JavaScript</SkillsText>
          </SkillsItem>

          <SkillsItem>
          <SkillsIconWrapper>
            <ReactIcon/>
            </SkillsIconWrapper>
            <SkillsText>React</SkillsText>
          </SkillsItem>
    
     </SkillsList>
    </SkillsContainer>
  )
}

export default Skills
