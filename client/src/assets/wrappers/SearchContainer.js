import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 2rem;
  box-shadow: var(--shadow-2);

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }

  .form-title {
    margin-bottom: 2rem;
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--text-color);
    letter-spacing: -0.025em;
    text-transform: none;
    line-height: 1.2;
  }

  .form-center {
    display: grid;
    gap: 1.5rem;
  }

  .search-row {
    display: grid;
    grid-template-columns: 1fr;
  }

  .filters-row {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
    cursor: pointer;
    justify-self: end;
  }

  @media (min-width: 768px) {
    .filters-row {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 992px) {
    .filters-row {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }

  @media (min-width: 1120px) {
    .form {
      max-width: 1000px;
      margin: 0 auto;
    }
  }
`;

export default Wrapper; 