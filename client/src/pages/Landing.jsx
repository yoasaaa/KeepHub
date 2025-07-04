import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { checkDefaultTheme } from '../App';

const Landing = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme', newDarkTheme);
  };

  useEffect(() => {
    // Ensure theme is applied correctly on component mount
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, []);

  return (
    <Wrapper>
      <div className='page'>
        {/* Theme Toggle Button */}
        <button 
          className='theme-toggle-btn' 
          onClick={toggleDarkTheme}
          aria-label="Toggle dark theme"
        >
          {isDarkTheme ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>

        {/* Hero Section */}
        <section className='hero-section'>
          <div className='info'>
            <div className='title-container'>
              <h1>KeepHub</h1>
              <h2 className='subtitle'>Your Digital Knowledge Vault</h2>
            </div>
            <p className='description'>
              Organize your learning journey in one place. Save and manage articles,
              videos, courses, and tools with ease. Never lose valuable resources
              again.
            </p>
            <div className='btn-container'>
              <Link to='/register' className='btn register-link'>
                Get Started Free
              </Link>
              <Link to='/login' className='btn login-link'>
                Login / Demo
              </Link>
            </div>
          </div>
          <div className='image-container'>
            <img src={main} alt='KeepHub Digital Knowledge Management' className='main-img' />
          </div>
        </section>

        {/* Features Section */}
        <section className='features-section'>
          <div className='features-header'>
            <h2>Powerful Features for Modern Learners</h2>
            <p>Everything you need to manage your digital knowledge effectively</p>
          </div>
          <div className='features'>
            <div className='feature'>
              <div className='feature-header'>
                <span className='feature-icon'>📚</span>
                <h3>Smart Organization</h3>
              </div>
              <p>Categorize and tag your resources for quick access anytime.</p>
            </div>
            <div className='feature'>
              <div className='feature-header'>
                <span className='feature-icon'>🎯</span>
                <h3>Progress Tracking</h3>
              </div>
              <p>Mark resources as to-read, in-progress, or completed to stay organized.</p>
            </div>
            <div className='feature'>
              <div className='feature-header'>
                <span className='feature-icon'>🔍</span>
                <h3>Powerful Search</h3>
              </div>
              <p>Find any saved resource instantly with advanced search and filtering.</p>
            </div>
            <div className='feature'>
              <div className='feature-header'>
                <span className='feature-icon'>🤖</span>
                <h3>AI Content Analysis</h3>
              </div>
              <p>Automatically extract titles, tags, and summaries from any URL.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className='cta-section'>
          <div className='cta-content'>
            <h2>Ready to Get Started?</h2>
            <p>Join the community of organized learners today</p>
            <Link to='/register' className='btn cta-btn'>
              Create Your Account
            </Link>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Landing;
