import Wrapper from '../assets/wrappers/ResourceInfo';
import PropTypes from 'prop-types';

const ResourceInfo = ({ icon, text, className = '' }) => {
  return (
    <Wrapper className={className}>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </Wrapper>
  );
};

ResourceInfo.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ResourceInfo; 