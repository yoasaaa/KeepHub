import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0;

  .icon {
    font-size: 1.125rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--text-secondary-color);
    }
  }
  
  /* Status-specific icon colors - matching Stats page colors */
  &.status-to-read .icon svg {
    color: #d66a6a;
  }
  &.status-to-read .text {
    color: #d66a6a;
  }
  
  &.status-in-progress .icon svg {
    color: #647acb;
  }
  &.status-in-progress .text {
    color: #647acb;
  }
  
  &.status-completed .icon svg {
    color: #10b981;
  }
  &.status-completed .text {
    color: #10b981;
  }
  
  &.status-reference .icon svg {
    color: #a78bca;
  }
  &.status-reference .text {
    color: #a78bca;
  }
  
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    font-size: 1rem;
    color: var(--text-secondary-color);
    line-height: 1.25;
    margin: 0;
  }
`;

export default Wrapper; 