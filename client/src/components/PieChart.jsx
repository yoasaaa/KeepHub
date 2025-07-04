import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import PropTypes from 'prop-types';

const PieChartComponent = ({ data, title }) => {
  const COLORS = {
    video: '#a8c8e1',
    article: '#a8d5b7', 
    tool: '#f4d03f',
    course: '#d2b4de',
    book: '#f1948a',
    podcast: '#85c1e9',
    other: '#d5d8dc',
  };

  const formatData = (rawData) => {
    return rawData.map(item => ({
      name: item.type,
      value: item.count,
      fill: COLORS[item.type] || '#d5d8dc'
    }));
  };

  const chartData = formatData(data);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div style={{
          backgroundColor: 'var(--background-secondary-color)',
          color: 'var(--text-color)',
          padding: '0.75rem',
          border: '1px solid var(--grey-200)',
          borderRadius: '0.5rem',
          boxShadow: 'var(--shadow-2)',
          fontSize: '0.875rem'
        }}>
          <p style={{ margin: 0, fontWeight: '600' }}>
            {data.payload.name}: {data.value}
          </p>
        </div>
      );
    }
    return null;
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        payload: PropTypes.shape({
          name: PropTypes.string,
        }),
        value: PropTypes.number,
      })
    ),
  };

  if (!data || data.length === 0) {
    return (
      <div style={{ 
        height: '300px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--text-secondary-color)',
        fontSize: '0.875rem'
      }}>
        No data available
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <h3 style={{ 
        textAlign: 'center', 
        color: 'var(--text-color)', 
        fontSize: '1.375rem',
        fontWeight: '600',
        margin: '0 0 1.5rem 0'
      }}>
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#d5d8dc"
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

PieChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default PieChartComponent; 