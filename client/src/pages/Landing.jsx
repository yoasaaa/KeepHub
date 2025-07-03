import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';

const Landing = () => {
  return (
    <Wrapper>
      <div className='page'>
        <div className='info'>
          <div className='title-container'>
            <h1>KeepHub</h1>
            <h2 className='subtitle'>Your Digital Knowledge Vault</h2>
          </div>
          <p>
            Organize your learning journey in one place. Save and manage articles,
            videos, courses, and tools with ease. Never lose valuable resources
            again.
          </p>
          <div className='btn-container'>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
            <Link to='/login' className='btn login-link'>
            Login / Demo User
          </Link>
          </div>
        </div>
        <div className='image-container'>
          <img src={main} alt='job hunt' className='main-img' />
        </div>
        <div className='features'>
          <div className='feature'>
            <div className='feature-header'>
              <span className='feature-icon'>📚</span>
              <h3>Smart Organization</h3>
            </div>
            <p>Categorize and tag your resources for quick access anytime</p>
          </div>
          <div className='feature'>
            <div className='feature-header'>
              <span className='feature-icon'>🎯</span>
              <h3>Progress Tracking</h3>
            </div>
            <p>Mark resources as to-read, in-progress, or completed</p>
          </div>
          <div className='feature'>
            <div className='feature-header'>
              <span className='feature-icon'>🔍</span>
              <h3>Powerful Search</h3>
            </div>
            <p>Find any saved resource instantly with smart search</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
