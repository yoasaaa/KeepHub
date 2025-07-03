import { 
  ChartsContainer, 
  StatsContainer, 
  PieChart, 
  TagCloud 
} from '../components';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';
import Wrapper from '../assets/wrappers/EnhancedStats';

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/resources/stats');
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  await queryClient.ensureQueryData(statsQuery);
  return null;
};

const Stats = () => {
  const { data } = useQuery(statsQuery);
  const { 
    defaultStats, 
    monthlyAdditions, 
    resourceTypeStats, 
    popularTags 
  } = data;

  return (
    <Wrapper>
      <div className="stats-overview">
        <StatsContainer defaultStats={defaultStats} />
      </div>
      
      <div className="stats-grid">
        {/* Monthly Additions Chart - Full Width */}
        {monthlyAdditions?.length > 0 && (
          <div className="chart-container full-width">
            <ChartsContainer data={monthlyAdditions} />
          </div>
        )}
        
        {/* Resource Type Distribution and Popular Tags - One Row */}
        {resourceTypeStats?.length > 0 && (
          <div className="chart-container half-width">
            <PieChart 
              data={resourceTypeStats} 
              title="Resource Type Distribution" 
            />
          </div>
        )}
        
        {popularTags?.length > 0 && (
          <div className="chart-container half-width">
            <TagCloud tagStats={popularTags} />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Stats;
