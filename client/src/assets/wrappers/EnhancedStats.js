import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  z-index: 1;
  max-width: 100%;
  overflow: hidden;

  .stats-overview {
    margin-bottom: 2rem;
  }

  .stats-grid {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .stats-grid {
      grid-template-columns: 1fr 1fr;
    }
    
    .full-width {
      grid-column: 1 / -1;
    }
    
    .half-width {
      grid-column: span 1;
    }
  }

  .chart-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    padding: 1rem 1.25rem;
    box-shadow: var(--shadow-2);
    border: 1px solid var(--grey-100);
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 100%;
  }

  .chart-container:hover {
    box-shadow: var(--shadow-4);
    transform: translateY(-2px);
    z-index: 5;
  }

  @media (max-width: 767px) {
    .half-width,
    .full-width {
      grid-column: 1;
    }
  }

  /* Ensure recharts components have controlled z-index */
  .recharts-wrapper {
    max-width: 100% !important;
    position: relative !important;
    z-index: 1 !important;
  }

  .recharts-surface {
    overflow: visible !important;
    z-index: 1 !important;
  }

  .recharts-tooltip-wrapper {
    z-index: 10 !important;
    position: absolute !important;
  }

  .recharts-legend-wrapper {
    z-index: 2 !important;
  }

  .chart-title {
    color: var(--text-color);
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }

  .chart-subtitle {
    color: var(--text-secondary-color);
    font-size: 0.875rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .loading-container {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-secondary-color);
    font-style: italic;
  }

  .progress-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .progress-item {
    text-align: center;
    padding: 1rem;
    background: var(--grey-50);
    border-radius: var(--border-radius);
  }

  .progress-value {
    font-size: 2rem;
    font-weight: bold;
    color: var(--primary-500);
    display: block;
  }

  .progress-label {
    color: var(--text-secondary-color);
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;

export default Wrapper; 