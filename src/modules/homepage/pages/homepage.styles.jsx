import styled from 'styled-components'

export const HomePageStyles = styled.div` 
  position:relative;
  z-index:999;
` 
export const FixedComponent = styled.div`
  top:0;
  position:fixed;
  z-index:-1;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  min-width: 100vw;
  min-height: 100vh;
`