import { FaLocationArrow, FaCalendarAlt, FaBookOpen, FaClock, FaCheckCircle, FaBookmark } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Resource';
import ResourceInfo from './ResourceInfo';
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import PropTypes from 'prop-types';
day.extend(advancedFormat);

const Resource = ({
  _id,
  title,
  platform,
  resourceType,
  resourceStatus,
  url,
  createdAt,
  tags = [],
}) => {
  const date = day(createdAt).format('MMM Do, YYYY');

  // Get status icon based on resource status
  const getStatusIcon = (status) => {
    switch (status) {
      case 'to read':
        return <FaBookOpen />;
      case 'in progress':
        return <FaClock />;
      case 'completed':
        return <FaCheckCircle />;
      case 'reference':
        return <FaBookmark />;
      default:
        return <FaBookOpen />;
    }
  };

  // Generate color for tags based on string hash
  const getTagColor = (tag) => {
    const colors = [
      { bg: 'var(--tag-yellow-bg)', color: 'var(--tag-yellow-color)', border: 'var(--tag-yellow-border)' },
      { bg: 'var(--tag-blue-bg)', color: 'var(--tag-blue-color)', border: 'var(--tag-blue-border)' },
      { bg: 'var(--tag-green-bg)', color: 'var(--tag-green-color)', border: 'var(--tag-green-border)' },
      { bg: 'var(--tag-pink-bg)', color: 'var(--tag-pink-color)', border: 'var(--tag-pink-border)' },
      { bg: 'var(--tag-purple-bg)', color: 'var(--tag-purple-color)', border: 'var(--tag-purple-border)' },
      { bg: 'var(--tag-red-bg)', color: 'var(--tag-red-color)', border: 'var(--tag-red-border)' },
      { bg: 'var(--tag-cyan-bg)', color: 'var(--tag-cyan-color)', border: 'var(--tag-cyan-border)' },
      { bg: 'var(--tag-orange-bg)', color: 'var(--tag-orange-color)', border: 'var(--tag-orange-border)' },
    ];
    
    let hash = 0;
    for (let i = 0; i < tag.length; i++) {
      hash = tag.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>{title.charAt(0).toUpperCase()}</div>
        <div className='info'>
          <h5>{title}</h5>
          <p>{platform || ''}</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <ResourceInfo icon={<FaLocationArrow />} text={resourceType} />
          <ResourceInfo icon={<FaCalendarAlt />} text={date} />
        </div>

        {/* Status section */}
        <div className='status-row'>
          <ResourceInfo 
            icon={getStatusIcon(resourceStatus)} 
            text={resourceStatus}
            className={`status-${resourceStatus.replace(' ', '-')}`}
          />
        </div>

        {/* Tags section */}
        <div className='tags-container'>
          {tags && Array.isArray(tags) && tags.length > 0 && tags
            .filter(tag => tag && tag.trim().length > 0)
            .map((tag, index) => {
              const tagColor = getTagColor(tag);
              return (
                <span 
                  key={index} 
                  className='tag'
                  style={{
                    backgroundColor: tagColor.bg,
                    color: tagColor.color,
                    borderColor: tagColor.border
                  }}
                >
                  {tag}
                </span>
              );
            })
          }
        </div>

        <footer className='actions'>
          <Link to={`../edit-resource/${_id}`} className='btn edit-btn'>
            Edit
          </Link>
          <Form method='post' action={`../delete-resource/${_id}`}>
            <button type='submit' className='btn delete-btn'>
              Delete
            </button>
          </Form>
          <a href={url} target='_blank' rel='noopener noreferrer' className='btn external-btn'>
            Visit Resource
          </a>
        </footer>
      </div>
    </Wrapper>
  );
};

Resource.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  platform: PropTypes.string,
  resourceType: PropTypes.string.isRequired,
  resourceStatus: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  tags: PropTypes.array,
};

export default Resource; 