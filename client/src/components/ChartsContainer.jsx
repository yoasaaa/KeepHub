import { useState } from 'react';

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);

  return (
    <Wrapper>
      <div className="chart-header">
        <h3 className="chart-title">Monthly Resource Additions</h3>
        <button type='button' className="chart-toggle-btn" onClick={() => setBarChart(!barChart)}>
          {barChart ? 'Area Chart' : 'Bar Chart'}
        </button>
      </div>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
