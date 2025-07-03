import Resource from './Resource';
import Wrapper from '../assets/wrappers/ResourcesContainer';
import { useAllResourcesContext } from '../pages/AllResources';
import PageBtnContainer from './PageBtnContainer';

const ResourcesContainer = () => {
  const { data } = useAllResourcesContext();
  const { resources, totalResources, numPages } = data;

  if (resources.length === 0) {
    return (
      <Wrapper>
        <h2>No resources to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalResources} resource{resources.length > 1 && 's'} found
      </h5>
      <div className='resources'>
        {resources.map((resource) => {
          return <Resource key={resource._id} {...resource} />;
        })}
      </div>
      {numPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default ResourcesContainer; 