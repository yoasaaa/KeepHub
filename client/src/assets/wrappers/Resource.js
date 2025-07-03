import styled from 'styled-components';

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 2rem;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
      font-size: 1.125rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--text-secondary-color);
      letter-spacing: var(--letter-spacing);
      font-size: 0.875rem;
    }
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1rem;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    align-items: center;
  }

  .status-row {
    margin-bottom: 1rem;
  }

  /* Tags section */
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
    min-height: 1.5rem;
  }
  
  .tag {
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: none;
    border: 1px solid;
    transition: all 0.2s ease;
  }
  
  .tag:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .edit-btn,
  .delete-btn,
  .external-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    padding: 0.25rem 0.75rem;
    margin: 0;
  }


  &:hover .actions {
    visibility: visible;
  }
`;

export default Wrapper; 