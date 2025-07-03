import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export default Wrapper;
