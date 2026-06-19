import styled from "styled-components";

export const ProjectsContainer = styled.section`
  background: #111827;
  padding: 85px 6%;
`;

export const ProjectsContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const ProjectsLabel = styled.p`
  font-family: "JetBrains Mono", monospace;
  color: #00ff88;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const ProjectsTitle = styled.h2`
  font-family: "JetBrains Mono", monospace;
  font-size: clamp(1.9rem, 3.8vw, 3rem);
  color: #ffffff;
  margin-bottom: 14px;
`;

export const ProjectsSubtitle = styled.p`
  max-width: 560px;
  color: #cbd5e1;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 48px;
`;

export const ProjectCard = styled.div`
  background: #1f2937;
  border: 1px solid #374151;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 30px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: #00ff88;
    box-shadow: 0 0 28px rgba(0, 255, 136, 0.12);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  background: #2b3443;
  padding: 12px 18px;
  border-bottom: 1px solid #374151;
`;

export const WindowButtons = styled.div`
  display: flex;
  gap: 8px;
`;

export const WindowButton = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;

export const FileName = styled.div`
  margin-left: 18px;
  color: #9ca3af;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
`;

export const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.45rem;
  padding: 26px 28px 14px;
`;

export const ProjectDescription = styled.p`
  color: #d1d5db;
  line-height: 1.8;
  font-size: 0.9rem;
  padding: 0 28px;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 26px 28px;
`;

export const Tech = styled.div`
  padding: 6px 12px;
  background: #374151;
  color: #00ff88;
  border-radius: 50px;
  font-family: "JetBrains Mono", monospace;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
  padding: 0 28px 28px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ProjectButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  border: 2px solid #00ff88;
  border-radius: 8px;

  color: #00ff88;
  background: transparent;

  font-family: "JetBrains Mono", monospace;
  font-size: 0.82rem;
  font-weight: 700;

  transition: all 0.3s ease;

  &:hover {
    background: #00ff88;
    color: #111827;
    transform: translateY(-2px);
  }
`;