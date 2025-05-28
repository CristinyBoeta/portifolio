import styled from 'styled-components';

export const HomeContainer = styled.main`
  background: linear-gradient(to bottom, #ffdbd4, #ffe4df, #ffedea);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  padding: 1.5rem;

  @media (min-width: 48.75rem) {
    flex-direction: row;
    justify-content: center;
    gap: 12rem;
  }
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 48.75rem) {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Pulse = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  fill: #fff;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #8b4513;
    border-radius: 50%;
    z-index: 0;
    opacity: 0.4;
    animation: pulse 2s ease-out infinite;
  }

  @keyframes pulse {
    100% {
      transform: scale(7);
      opacity: 0;
    }
  }

  &::after {
    animation-delay: 1s;
  }

  img {
    position: relative;
    border-radius: 200px;
    border: 5px solid #8b4513;
    z-index: 1;
    width: 18.75rem;
    height: 18.75rem;
  }

  @media (max-width: 48.75rem) {
    margin-top: 3rem;
    width: 2.5rem;
    height: 2.5rem;

    &::before,
    &::after {
      width: 100%;
      height: 100%;
      animation: none;
    }

    img {
      width: 9rem;
      height: 9rem;
    }
  }
`;

export const Title = styled.span`
  display: flex;
  flex-direction: column;
  color: #8b4513;
  gap: 1rem;

  h1 {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }

  p {
    text-align: justify;
    line-height: 1.5;
    font-size: 1.25rem;
    font-weight: 500;
  }

  @media (min-width: 48.75rem) {
    h1 {
      text-align: justify;
      font-size: 3.25rem;
    }

    p {
      text-align: start;
      font-size: 1.375rem;
    }
  }
`;

export const SectionButtons = styled.section`
  display: flex;
  gap: 1rem;

  button {
    width: 6.5rem;
    background-color: #8b4513;
    color: #ffff;
    padding: 0.5rem;
    border: 1px solid #ffff;
    font-size: 0.875rem;
  }

  @media (min-width: 48.75rem) {
    button {
      width: 7.5rem;
      font-size: 0.875rem;
      cursor: pointer;
      &:hover {
        background-color: #a0522d;
      }
    }
  }
`;
