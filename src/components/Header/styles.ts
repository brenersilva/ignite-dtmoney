import styled from 'styled-components';

import backgroundImg from '../../assets/background.svg';

export const Container = styled.header`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    font-size: 1rem;
    color: #fff;
    background: var(--green);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    outline: none;
    transition: filter 0.2s;
    box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.3);

    img {
      margin-left: 0.5rem
    }

    &:hover {
      filter: brightness(0.95);
    }
  }
`;