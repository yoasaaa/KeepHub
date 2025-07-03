import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  .tag-cloud-title {
    color: var(--text-color);
    font-size: 1.375rem;
    font-weight: 700;
    margin: 0 0 1.5rem 0;
    text-align: center;
    letter-spacing: -0.025em;
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
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: default;
    position: relative;
  }

  .tag-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    font-weight: bold;
    min-width: 20px;
  }

  .tag-size-1 {
    font-size: 0.875rem;
    background: #fef3c7;
    color: #92400e;
    border: 1px solid #fbbf24;
  }

  .tag-size-2 {
    font-size: 1rem;
    background: #dbeafe;
    color: #1e40af;
    border: 1px solid #3b82f6;
  }

  .tag-size-3 {
    font-size: 1.125rem;
    background: #dcfce7;
    color: #166534;
    border: 1px solid #22c55e;
  }

  .tag-size-4 {
    font-size: 1.25rem;
    background: #fce7f3;
    color: #be185d;
    border: 1px solid #ec4899;
  }

  .tag-size-5 {
    font-size: 1.375rem;
    background: #e0e7ff;
    color: #3730a3;
    border: 1px solid #6366f1;
  }

  /* Additional color variations for more diversity */
  .tag-color-0 {
    background: #fef3c7;
    color: #92400e;
    border: 1px solid #fbbf24;
  }

  .tag-color-1 {
    background: #dbeafe;
    color: #1e40af;
    border: 1px solid #3b82f6;
  }

  .tag-color-2 {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #22c55e;
  }

  .tag-color-3 {
    background: #fce7f3;
    color: #be185d;
    border: 1px solid #ec4899;
  }

  .tag-color-4 {
    background: #e0e7ff;
    color: #3730a3;
    border: 1px solid #6366f1;
  }

  .tag-color-5 {
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #ef4444;
  }

  .tag-color-6 {
    background: #ecfdf5;
    color: #047857;
    border: 1px solid #10b981;
  }

  .tag-color-7 {
    background: #fff7ed;
    color: #c2410c;
    border: 1px solid #f97316;
  }

  .tag-color-8 {
    background: #f0f9ff;
    color: #0369a1;
    border: 1px solid #0ea5e9;
  }

  .tag-color-9 {
    background: #fdf4ff;
    color: #a21caf;
    border: 1px solid #c084fc;
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

  // Calculate tag sizes based on frequency
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
  ),
};

export default TagCloud; 