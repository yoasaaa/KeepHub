import { ResourcesContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import { useQuery } from '@tanstack/react-query';

const allResourcesQuery = (params) => {
  const { search, resourceType, resourceStatus, sort, page, tag } = params;
  return {
    queryKey: [
      'resources',
      search ?? '',
      resourceType ?? 'all',
      resourceStatus ?? 'all',
      sort ?? 'newest',
      page ?? 1,
      tag ?? 'all',
    ],
    queryFn: async () => {
      const { data } = await customFetch.get('/resources', {
        params,
      });
      return data;
    },
  };
};

export const loader = (queryClient) => async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  await queryClient.ensureQueryData(allResourcesQuery(params));
  return { searchValues: { ...params } };
};

const AllResourcesContext = createContext();

const AllResources = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allResourcesQuery(searchValues));

  return (
    <AllResourcesContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <ResourcesContainer />
    </AllResourcesContext.Provider>
  );
};

export const useAllResourcesContext = () => useContext(AllResourcesContext);

export default AllResources; 