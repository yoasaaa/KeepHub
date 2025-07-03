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
    row-gap: 1rem;
  }

  .form-section {
    background: var(--background-color);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin-bottom: 1.5rem;
    border: 1px solid var(--grey-100);
  }

  .section-title {
    color: var(--text-secondary-color);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    padding-bottom: 0.75rem;
    letter-spacing: -0.01em;
    text-transform: none;
  }

  .form-row-flex {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr;
      align-items: center;
      column-gap: 1rem;
    }

    .form-row-flex {
      grid-template-columns: 1fr 1fr;
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
