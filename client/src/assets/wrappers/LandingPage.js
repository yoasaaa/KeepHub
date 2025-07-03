import styled from 'styled-components';

const Wrapper = styled.main`
  .page {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    align-items: start;
    padding: 2rem;
    gap: 2rem;
  }

  .info {
    padding-top: 4rem;
  }

  .title-container {
    margin-bottom: 2rem;
  }

  h1 {
    font-weight: 700;
    color: var(--primary-500);
    font-size: 4.5rem;
    letter-spacing: -1px;
    margin: 0;
  }

  .subtitle {
    font-weight: 500;
    color: var(--grey-400);
    font-size: 2rem;
    margin: 0.75rem 0 0 0;
    line-height: 1.2;
  }

  p {
    line-height: 1.8;
    color: var(--grey-500);
    margin: 1.5rem 0;
    font-size: 1.2rem;
    max-width: 35em;
  }

  .btn-container {
    display: flex;
    gap: 1.5rem;
    margin: 3rem 0;
  }

  .btn {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
    border-radius: 12px;
    transition: all 0.3s ease;
  }

  .register-link {
    background: var(--primary-500);
    box-shadow: 0 4px 12px rgba(247, 148, 30, 0.2);
  }

  .login-link {
    background: var(--grey-700);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .register-link:hover {
    background: var(--primary-700);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(247, 148, 30, 0.3);
  }

  .login-link:hover {
    background: var(--grey-800);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  .features {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 1.5rem;
    width: 100%;
  }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;
    padding: 1.5rem 2rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
  }

  .feature:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
    background: rgba(255, 255, 255, 0.95);
  }

  .feature-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    justify-content: flex-start;
  }

  .feature-icon {
    font-size: 1.8rem;
    padding: 0.8rem;
    background: var(--primary-50);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  }

  .feature h3 {
    color: var(--grey-900);
    font-size: 1.3rem;
    font-weight: 600;
    margin: 0;
  }

  .feature p {
    color: var(--grey-600);
    margin: 0;
    font-size: 1rem;
    line-height: 1.6;
    text-align: left;
    width: 100%;
    margin-left: 0;
  }

  .image-container {
    display: none;
    position: relative;
  }

  .main-img {
    width: 100%;
    height: auto;
    max-width: 700px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    .features {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      width: 100%;
    }
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 500px;
      grid-template-rows: auto auto;
      gap: 4rem;
      padding: 2rem 4rem;
      align-items: center;
    }

    .info {
      max-width: none;
      grid-column: 1;
      grid-row: 1;
    }

    .image-container {
      display: block;
      align-self: start;
      padding-top: 4rem;
      grid-column: 2;
      grid-row: 1;
    }

    .features {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2rem;
      width: 100%;
      grid-column: 1 / -1;
      grid-row: 2;
      margin-top: -1rem;
    }

    .main-img {
      width: 100%;
      height: auto;
      max-width: 500px;
      min-width: 400px;
    }
  }

  @media (min-width: 1200px) {
    .page {
      gap: 6rem;
      padding: 2rem 6rem;
      grid-template-columns: 1fr 550px;
    }

    h1 {
      font-size: 5rem;
    }

    .subtitle {
      font-size: 2rem;
    }

    .features {
      gap: 3rem;
      margin-top: 0rem;
    }

    .main-img {
      max-width: 550px;
      min-width: 450px;
    }
  }
`;

export default Wrapper;
