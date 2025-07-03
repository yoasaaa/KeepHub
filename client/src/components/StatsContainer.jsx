import { FaBookReader, FaSpinner, FaCheckCircle, FaBookmark } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/StatsContainer';
import StatItem from './StatItem';
import PropTypes from 'prop-types';

const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: 'to read',
      count: defaultStats?.['to read'] || 0,
      icon: <FaBookReader />,
      color: '#d66a6a',
      bcg: '#fdf2f2',
    },
    {
      title: 'in progress',
      count: defaultStats?.['in progress'] || 0,
      icon: <FaSpinner />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'completed',
      count: defaultStats?.completed || 0,
      icon: <FaCheckCircle />,
      color: '#10b981',
      bcg: '#dcfce7',
    },
    {
      title: 'reference',
      count: defaultStats?.reference || 0,
      icon: <FaBookmark />,
      color: '#a78bca',
      bcg: '#f7f3ff',
    },
  ];

  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};

StatsContainer.propTypes = {
  defaultStats: PropTypes.shape({
    'to read': PropTypes.number,
    'in progress': PropTypes.number,
    completed: PropTypes.number,
    reference: PropTypes.number,
  }),
};

export default StatsContainer;
