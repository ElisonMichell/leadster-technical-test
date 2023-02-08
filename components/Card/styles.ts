import styled from 'styled-components'

export const Container = styled.button`
  max-width: 22.5rem;
  font-weight: bold;
  border-radius: 1rem;
  overflow: hidden;
  text-align: start;
  box-shadow: 0px 20px 40px rgba(115, 115, 200, 0.25);
  transition: transform 0.2s ease-in-out;

  .content {
    padding: 1.25rem 2rem;
  }

  :hover {
    transform: scale(1.05);

    .play-button {
      filter: opacity(100);
    }
  }
`

export const ImageContainer = styled.div`
  position: relative;

  .play-button {
    position: absolute;
    filter: opacity(0);
    inset: 0;
    transition: filter 0.2s ease-in-out;
  }
`