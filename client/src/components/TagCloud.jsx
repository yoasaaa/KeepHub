import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  .tag-cloud-title {
    color: var(--text-color);
    font-size: 1.375rem;
    font-weight: 600;
    margin: 0 0 1.5rem 0;
    text-align: center;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
  }

  .tag-item {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: default;
    position: relative;
  }

  .tag-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .tag-count {
    background: var(--primary-500);
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    min-width: 20px;
  }

  /* Tag sizes based on frequency */
  .tag-size-1 {
    font-size: 0.875rem;
  }

  .tag-size-2 {
    font-size: 1rem;
  }

  .tag-size-3 {
    font-size: 1.125rem;
  }

  .tag-size-4 {
    font-size: 1.25rem;
  }

  .tag-size-5 {
    font-size: 1.375rem;
  }

  .tag-color-0 {
    background: var(--tag-yellow-bg);
    color: var(--tag-yellow-color);
  }

  .tag-color-1 {
    background: var(--tag-blue-bg);
    color: var(--tag-blue-color);
  }

  .tag-color-2 {
    background: var(--tag-green-bg);
    color: var(--tag-green-color);
  }

  .tag-color-3 {
    background: var(--tag-pink-bg);
    color: var(--tag-pink-color);
  }

  .tag-color-4 {
    background: var(--tag-purple-bg);
    color: var(--tag-purple-color);
  }

  .tag-color-5 {
    background: var(--tag-red-bg);
    color: var(--tag-red-color);
  }

  .tag-color-6 {
    background: var(--tag-cyan-bg);
    color: var(--tag-cyan-color);
  }

  .tag-color-7 {
    background: var(--tag-orange-bg);
    color: var(--tag-orange-color);
  }

  .tag-color-8 {
    background: var(--tag-blue-bg);
    color: var(--tag-blue-color);
  }

  .tag-color-9 {
    background: var(--tag-gray-bg);
    color: var(--tag-gray-color);
  }

  .no-tags {
    text-align: center;
    color: var(--text-secondary-color);
    font-style: italic;
    padding: 2rem;
  }
`;

const TagCloud = ({ tagStats }) => {
  if (!tagStats || tagStats.length === 0) {
    return (
      <Wrapper>
        <h3 className="tag-cloud-title">Popular Tags</h3>
        <div className="no-tags">
          No tags data available
        </div>
      </Wrapper>
    );
  }

  const maxCount = Math.max(...tagStats.map(tag => tag.count));
  const getTagSize = (count) => {
    const ratio = count / maxCount;
    if (ratio >= 0.8) return 5;
    if (ratio >= 0.6) return 4;
    if (ratio >= 0.4) return 3;
    if (ratio >= 0.2) return 2;
    return 1;
  };

  return (
    <Wrapper>
      <h3 className="tag-cloud-title">Popular Tags</h3>
      <div className="tags-container">
        {tagStats.map((tag, index) => (
          <span
            key={index}
            className={`tag-item tag-size-${getTagSize(tag.count)} tag-color-${index % 10}`}
          >
            <span>{tag.tag}</span>
            <span className="tag-count">{tag.count}</span>
          </span>
        ))}
      </div>
    </Wrapper>
  );
};

TagCloud.propTypes = {
  tagStats: PropTypes.arrayOf(
    PropTypes.shape({
      tag: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TagCloud; 