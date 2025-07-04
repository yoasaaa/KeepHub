import styled from 'styled-components';

const Wrapper = styled.main`
  .page {
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  /* Theme Toggle Button */
  .theme-toggle-btn {
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    color: var(--grey-700);
    font-size: 1.1rem;
  }

  /* Dark mode theme toggle styling */
  .dark-theme .theme-toggle-btn {
    background: rgba(63, 63, 63, 0.9);
    color: var(--grey-300);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .theme-toggle-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 1);
  }

  .dark-theme .theme-toggle-btn:hover {
    background: rgba(79, 79, 79, 1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  }

  .theme-toggle-btn:active {
    transform: translateY(0px);
  }

  /* Hero Section */
  .hero-section {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
    background: var(--background-color);
    position: relative;
  }

  /* Light mode hero background */
  body:not(.dark-theme) .hero-section {
    background: linear-gradient(135deg, 
      rgba(247, 148, 30, 0.03) 0%, 
      rgba(255, 255, 255, 1) 50%, 
      rgba(247, 148, 30, 0.02) 100%);
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 50%, rgba(247, 148, 30, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  /* Hide decorative gradients in dark mode */
  .dark-theme .hero-section::before {
    display: none;
  }

  .info {
    padding-top: 2rem;
    z-index: 1;
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
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .subtitle {
    font-weight: 500;
    color: var(--text-secondary-color);
    font-size: 2rem;
    margin: 0.75rem 0 0 0;
    line-height: 1.2;
    white-space: nowrap;
  }

  .description {
    line-height: 1.8;
    color: var(--text-secondary-color);
    margin: 1.5rem 0;
    font-size: 1.2rem;
    max-width: 35em;
  }

  .btn-container {
    display: flex;
    gap: 1.5rem;
    margin: 3rem 0;
    flex-wrap: wrap;
  }

  .btn {
    padding: 1.2rem 2.5rem;
    font-size: 1.1rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    text-decoration: none;
    color: white;
    font-weight: 600;
    border: none;
    cursor: pointer;
  }

  .register-link {
    background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
    box-shadow: 0 4px 12px rgba(247, 148, 30, 0.3);
  }

  .login-link {
    background: linear-gradient(135deg, var(--grey-700), var(--grey-800));
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .register-link:hover {
    background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(247, 148, 30, 0.4);
  }

  .login-link:hover {
    background: linear-gradient(135deg, var(--grey-800), var(--grey-900));
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }

  .image-container {
    display: none;
    position: relative;
    z-index: 1;
  }

  .main-img {
    width: 100%;
    height: auto;
    max-width: 700px;
    margin: 0 auto;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
  }

  /* Features Section - Improved Visual Hierarchy */
  .features-section {
    padding: 8rem 2rem;
    background: var(--background-color);
    position: relative;
  }

  /* Light mode features background */
  body:not(.dark-theme) .features-section {
    background: linear-gradient(180deg, 
      rgba(255, 255, 255, 1) 0%, 
      rgba(248, 250, 252, 1) 100%);
  }

  .features-header {
    text-align: center;
    margin-bottom: 4rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .features-header h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .features-header p {
    font-size: 1.2rem;
    color: var(--text-secondary-color);
    line-height: 1.6;
    margin: 0;
  }

  .features {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .feature {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 1rem;
    padding: 2.5rem;
    background: var(--background-secondary-color);
    border-radius: 20px;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-2);
    border: 1px solid var(--grey-200);
  }

  /* Light mode feature styling */
  body:not(.dark-theme) .feature {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  .feature:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-4);
    border-color: var(--primary-300);
  }

  /* Light mode feature hover */
  body:not(.dark-theme) .feature:hover {
    background: rgba(255, 255, 255, 1);
    border-color: rgba(247, 148, 30, 0.2);
  }

  .feature-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-start;
    width: 100%;
  }

  .feature-icon {
    font-size: 2rem;
    padding: 1rem;
    background: var(--primary-50);
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(247, 148, 30, 0.1);
    min-width: 60px;
    text-align: center;
    color: var(--primary-500);
  }

  /* Dark mode feature icon */
  .dark-theme .feature-icon {
    background: var(--primary-900);
    color: var(--primary-300);
  }

  .feature h3 {
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.3;
  }

  .feature p {
    color: var(--text-secondary-color);
    margin: 0;
    font-size: 1rem;
    line-height: 1.7;
    text-align: left;
    width: 100%;
  }

  /* CTA Section - Enhanced Visual Distinction */
  .cta-section {
    padding: 8rem 2rem;
    background: var(--background-color);
    text-align: center;
    position: relative;
  }

  /* Light mode CTA background - distinct from features */
  body:not(.dark-theme) .cta-section {
    background: linear-gradient(135deg, 
      rgba(247, 148, 30, 0.02) 0%, 
      rgba(255, 255, 255, 1) 50%, 
      rgba(247, 148, 30, 0.03) 100%);
  }

  /* Dark mode CTA background - darkest section */
  .dark-theme .cta-section {
    background: var(--dark-mode-bg-color);
  }

  /* CTA Section decorative overlay */
  .cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(247, 148, 30, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  /* Hide CTA overlay in dark mode */
  .dark-theme .cta-section::before {
    display: none;
  }

  .cta-content {
    max-width: 600px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .cta-content h2 {
    font-size: 2.2rem;
    font-weight: 600;
    color: var(--text-color);
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .cta-content p {
    font-size: 1.1rem;
    color: var(--text-secondary-color);
    margin-bottom: 2.5rem;
    line-height: 1.6;
  }

  .cta-btn {
    background: var(--primary-500);
    color: white;
    padding: 1rem 2.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 8px;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    box-shadow: 0 4px 12px rgba(247, 148, 30, 0.15);
    border: none;
  }

  .cta-btn:hover {
    background: var(--primary-600);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(247, 148, 30, 0.25);
  }

  .cta-btn:active {
    transform: translateY(0px);
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .theme-toggle-btn {
      top: 1.5rem;
      right: 1.5rem;
      width: 44px;
      height: 44px;
      font-size: 1rem;
      border-radius: 50%;
    }

    .features {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }

    .features-header h2 {
      font-size: 2.2rem;
    }

    h1 {
      font-size: 3.5rem;
    }

    .subtitle {
      font-size: 1.6rem;
      white-space: normal;
    }

    .features-section {
      padding: 6rem 1.5rem;
    }

    .cta-section {
      padding: 6rem 1.5rem;
    }

    .cta-content h2 {
      font-size: 1.8rem;
    }

    .cta-content p {
      font-size: 1rem;
      margin-bottom: 2rem;
    }

    .cta-btn {
      padding: 0.9rem 2rem;
      font-size: 0.95rem;
    }
  }

  @media (min-width: 992px) {
    .hero-section {
      grid-template-columns: 1fr 500px;
      gap: 4rem;
      padding: 2rem 4rem;
      align-items: center;
    }

    .info {
      max-width: none;
      grid-column: 1;
      padding-top: 0;
    }

    .image-container {
      display: block;
      grid-column: 2;
      align-self: center;
      padding-top: 2rem;
    }

    .features-section {
      padding: 8rem 4rem;
    }

    .cta-section {
      padding: 8rem 4rem;
    }

    .main-img {
      max-width: 500px;
      min-width: 400px;
    }
  }

  @media (min-width: 1200px) {
    .hero-section {
      gap: 6rem;
      padding: 2rem 6rem;
      grid-template-columns: 1fr 550px;
    }

    h1 {
      font-size: 5.5rem;
    }

    .subtitle {
      font-size: 2.2rem;
    }

    .features-section {
      padding: 10rem 6rem;
    }

    .cta-section {
      padding: 8rem 6rem;
    }

    .cta-content h2 {
      font-size: 2.5rem;
    }

    .cta-content p {
      font-size: 1.2rem;
    }

    .cta-btn {
      padding: 1.1rem 3rem;
      font-size: 1.05rem;
    }

    .main-img {
      max-width: 550px;
      min-width: 450px;
    }

    .features {
      gap: 3rem;
      max-width: 1200px;
    }

    .feature {
      padding: 3rem;
    }
  }
`;

export default Wrapper;
