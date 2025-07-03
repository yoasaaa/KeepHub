import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import PropTypes from 'prop-types';

const PieChartComponent = ({ data, title }) => {
  // Define colors for different data types
  const COLORS = {
    // Resource types
    video: '#8884d8',
    article: '#82ca9d', 
    tool: '#ffc658',
    course: '#ff7c7c',
    // Access types
    free: '#00C49F',
    paid: '#FF8042',
    subscription: '#FFBB28',
  };

  const formatData = (rawData) => {
    return rawData.map(item => ({
      name: item.type || item.access,
      value: item.count,
      fill: COLORS[item.type || item.access] || '#8884d8'
    }));
  };

  const chartData = formatData(data);

  // eslint-disable-next-line react/prop-types
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div style={{
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>
            {data.payload.name}: {data.value}
          </p>
        </div>
      );
    }
    return null;
  };

  if (!data || data.length === 0) {
    return (
      <div style={{ 
        height: '300px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#666'
      }}>
        No data available
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <h3 style={{ 
        textAlign: 'center', 
        marginBottom: '20px', 
        color: 'var(--text-color)', 
        fontSize: '1.375rem',
        fontWeight: '700',
        letterSpacing: '-0.025em',
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
            fill="#8884d8"
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
      type: PropTypes.string,
      access: PropTypes.string,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default PieChartComponent; 