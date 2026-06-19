import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export const SkillsContainer = styled.section`
  background: #f8fafc;
  padding: 140px 8%;
`;

export const SkillsContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
`;

export const SkillsLabel = styled.p`
  font-family: 'JetBrains Mono', monospace;
  color: #00a86b;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const SkillsTitle = styled.h2`
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #0d1117;
  margin-bottom: 18px;
`;

export const SkillsSubtitle = styled.p`
  max-width: 620px;
  margin: 0 auto 70px;
  color: #64748b;
  font-size: 1.1rem;
  line-height: 1.7;
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillsItem = styled.li`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 22px;
  padding: 46px 28px;
  transition: all 0.3s ease;
  box-shadow: 0 14px 35px rgba(15, 23, 42, 0.06);

  &:hover {
    transform: translateY(-8px);
    border-color: #00a86b;
    box-shadow: 0 22px 45px rgba(15, 23, 42, 0.1);
  }
`;

export const SkillsIconWrapper = styled.div`
  margin-bottom: 26px;
`;

export const SkillsText = styled.h3`
  font-size: 1.35rem;
  font-weight: 800;
  color: #0d1117;
  margin-bottom: 10px;
`;

export const SkillsDescription = styled.p`
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
`;

export const PythonIcon = styled(FontAwesomeIcon).attrs({
  icon: faPython,
})`
  font-size: 4rem;
  color: #3776ab;
`;

export const JSIcon = styled(FontAwesomeIcon).attrs({
  icon: faJs,
})`
  font-size: 4rem;
  color: #f7df1e;
`;

export const ReactIcon = styled(FontAwesomeIcon).attrs({
  icon: faReact,
})`
  font-size: 4rem;
  color: #61dafb;
`;