import styled from 'styled-components';

const Wrapper = styled.section`
  text-align: center;

  .chart-header {
    margin-bottom: 1.5rem;
    position: relative;
  }

  .chart-title {
    color: var(--text-color);
    font-size: 1.375rem;
    font-weight: 700;
    margin: 0 0 1rem 0;
    text-align: center;
    letter-spacing: -0.025em;
  }

  .chart-toggle-btn {
    background: transparent;
    border: 2px solid var(--primary-500);
    color: var(--primary-500);
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: capitalize;
    position: absolute;
    top: 0;
    right: 0;
  }

  .chart-toggle-btn:hover {
    background: var(--primary-500);
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .chart-toggle-btn {
      position: static;
      margin-top: 0.5rem;
    }
    
    .chart-title {
      font-size: 1.25rem;
    }
  }
`;

export default Wrapper;
