import styled from "styled-components";

export const ProjectsContainer = styled.section`
  background: #111827;
  padding: 140px 8%;
`;

export const ProjectsContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const ProjectsLabel = styled.p`
  font-family: 'JetBrains Mono', monospace;
  color: #00ff88;
  font-size: .95rem;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const ProjectsTitle = styled.h2`
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: #ffffff;
  margin-bottom: 18px;
`;

export const ProjectsSubtitle = styled.p`
  max-width: 650px;
  color: #cbd5e1;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 70px;
`;

export const ProjectCard = styled.div`
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 40px;

  transition: .3s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: #00ff88;
    box-shadow: 0 0 30px rgba(0, 255, 136, .12);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  background: #2b3443;
  padding: 16px 22px;
  border-bottom: 1px solid #374151;
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const WindowButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.color};
`;

export const FileName = styled.div`
  margin-left: 22px;
  color: #9ca3af;
  font-family: 'JetBrains Mono', monospace;
`;

export const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 2rem;
  padding: 40px 40px 20px;
`;

export const ProjectDescription = styled.p`
  color: #d1d5db;
  line-height: 1.9;
  padding: 0 40px;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 35px 40px;
`;

export const Tech = styled.div`
  padding: 8px 16px;
  background: #374151;
  color: #00ff88;
  border-radius: 50px;
  font-family: 'JetBrains Mono', monospace;
  font-size: .9rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 18px;
  padding: 0 40px 40px;
`;

export const ProjectButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  border: 2px solid #00ff88;
  border-radius: 8px;
  color: #00ff88;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  transition: .3s ease;

  &:hover {
    background: #00ff88;
    color: #111827;
  }
`;