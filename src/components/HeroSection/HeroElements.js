import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const blink = keyframes`
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
`;

export const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 1;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(8, 12, 20, 0.72);
  backdrop-filter: blur(2px);
  z-index: 2;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 6%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroGreeting = styled.p`
  font-family: 'JetBrains Mono', monospace;
  color: #00ff88;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 14px;

  &::before {
    content: "> ";
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(2.5rem, 5.2vw, 4.6rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.05;
  margin-bottom: 20px;
`;

export const Highlight = styled.span`
  color: #00ff88;
`;

export const Cursor = styled.span`
  color: #00ff88;
  animation: ${blink} 1s infinite;
`;

export const HeroSubtitle = styled.p`
  font-family: 'JetBrains Mono', monospace;
  max-width: 620px;
  color: #d1d5db;
  font-size: 0.95rem;
  line-height: 1.75;
  margin-bottom: 34px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 11px 24px;
  background: #00ff88;
  color: #0d1117;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.85rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 25px rgba(0,255,136,.45);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 11px 24px;
  border: 2px solid #00ff88;
  color: #00ff88;
  border-radius: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  font-size: 0.85rem;
  transition: all 0.3s ease;

  &:hover {
    background: #00ff88;
    color: #0d1117;
    transform: translateY(-4px);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 38px;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .3s ease;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const GithubIcon = styled(FaGithub)`
  font-size: 1.8rem;
  color: #ffffff;
  transition: color .3s ease;

  &:hover {
    color: #00ff88;
  }
`;

export const LinkedinIcon = styled(FaLinkedinIn)`
  font-size: 1.8rem;
  color: #ffffff;
  transition: color .3s ease;

  &:hover {
    color: #00ff88;
  }
`;