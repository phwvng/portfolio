import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export const SkillsContainer = styled.section`
  background: #f8fafc;
  padding: 85px 6%;
`;

export const SkillsContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

export const SkillsLabel = styled.p`
  font-family: 'JetBrains Mono', monospace;
  color: #00a86b;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const SkillsTitle = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(1.8rem, 3.6vw, 2.8rem);
  font-weight: 800;
  color: #0d1117;
  margin-bottom: 14px;
`;

export const SkillsSubtitle = styled.p`
  max-width: 560px;
  margin: 0 auto 48px;
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.7;
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
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
  border-radius: 16px;
  padding: 30px 20px;
  transition: all 0.3s ease;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);

  &:hover {
    transform: translateY(-6px);
    border-color: #00a86b;
    box-shadow: 0 18px 36px rgba(15, 23, 42, 0.1);
  }
`;

export const SkillsIconWrapper = styled.div`
  margin-bottom: 18px;
`;

export const SkillsText = styled.h3`
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.05rem;
  font-weight: 700;
  color: #0d1117;
  margin-bottom: 8px;
`;

export const SkillsDescription = styled.p`
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.6;
`;

export const PythonIcon = styled(FontAwesomeIcon).attrs({
  icon: faPython,
})`
  font-size: 3rem;
  color: #3776ab;
`;

export const JSIcon = styled(FontAwesomeIcon).attrs({
  icon: faJs,
})`
  font-size: 3rem;
  color: #f7df1e;
`;

export const ReactIcon = styled(FontAwesomeIcon).attrs({
  icon: faReact,
})`
  font-size: 3rem;
  color: #61dafb;
`;