import styled from 'styled-components';
import { faPython, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  padding: 100px 0;
`;

export const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 64px;
`;

export const SkillsList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const SkillsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 24px;
`;

export const SkillsIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 24px;
`;

export const SkillsText = styled.p`
    font-size: 1.5rem;
`;

export const PythonIcon = styled(faPython)`
    font-size: 3rem;
`;

export const JSIcon = styled(faJs)`
    font-size: 3rem;
`;

export const ReactIcon = styled(faReact)`
    font-size: 3rem;
`;

