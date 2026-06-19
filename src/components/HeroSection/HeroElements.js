import styled, { keyframes } from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const blink = keyframes`
  0%, 50% {
    opacity: 1;
  }

  51%, 100% {
    opacity: 0;
  }
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
  max-width: 1200px;

  margin: 0 auto;
  padding: 0 8%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeroGreeting = styled.p`
  font-family: 'JetBrains Mono', monospace;
  color: #00ff88;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 20px;

  &::before {
    content: "> ";
  }
`;

export const HeroTitle = styled.h1`
  font-family: 'JetBrains Mono', monospace;
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.05;
  margin-bottom: 28px;
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
  max-width: 720px;
  color: #d1d5db;

  font-size: 1.15rem;
  line-height: 1.9;

  margin-bottom: 50px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 15px 34px;

  background: #00ff88;
  color: #0d1117;

  border-radius: 8px;

  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;

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

  padding: 15px 34px;

  border: 2px solid #00ff88;
  color: #00ff88;

  border-radius: 8px;

  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;

  transition: all 0.3s ease;

  &:hover {
    background: #00ff88;
    color: #0d1117;
    transform: translateY(-4px);
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 28px;
  margin-top: 40px;
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
  font-size: 2.2rem;
  color: #ffffff;
  transition: color .3s ease;

  &:hover {
    color: #00ff88;
  }
`;

export const LinkedinIcon = styled(FaLinkedinIn)`
  font-size: 2.2rem;
  color: #ffffff;
  transition: color .3s ease;

  &:hover {
    color: #00ff88;
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);

  color: rgba(255,255,255,.6);
  font-family: 'JetBrains Mono', monospace;
  font-size: .9rem;
  letter-spacing: 1px;

  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,20%,50%,80%,100% {
      transform: translate(-50%,0);
    }

    40% {
      transform: translate(-50%,-10px);
    }

    60% {
      transform: translate(-50%,-5px);
    }
  }
`;