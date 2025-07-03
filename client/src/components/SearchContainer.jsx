import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { Form, useSubmit, Link } from 'react-router-dom';
import { RESOURCE_TYPE, RESOURCE_STATUS, RESOURCE_SORT_BY } from '../../../utils/constants';
import { useAllResourcesContext } from '../pages/AllResources';
import { useQuery } from '@tanstack/react-query';
import customFetch from '../utils/customFetch';

const SearchContainer = () => {
  const { searchValues } = useAllResourcesContext();
  const submit = useSubmit();

  // Fetch available tags
  const { data: tagsData } = useQuery({
    queryKey: ['tags'],
    queryFn: async () => {
      const { data } = await customFetch.get('/resources/tags');
      return data;
    },
  });

  const availableTags = tagsData?.tags || [];

  const debounce = (onChange) => {
    let timeout;
    return (e) => {
      const form = e.currentTarget.form;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        onChange(form);
      }, 2000);
    };
  };

  return (
    <Wrapper>
      <Form className='form'>
        <h5 className='form-title'>Search Form</h5>
        <div className='form-center'>
          {/* Search input - full width row */}
          <div className='search-row'>
            <FormRow
              type='search'
              name='search'
              labelText='Search'
              placeholder='Search by title, platform, or tags...'
              defaultValue={searchValues.search}
              onChange={debounce((form) => {
                submit(form);
              })}
            />
          </div>

          {/* Filters row - four columns */}
          <div className='filters-row'>
            <FormRowSelect
              labelText='Filter by Tag'
              name='tag'
              list={['all', ...availableTags]}
              defaultValue={searchValues.tag}
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            />

            <FormRowSelect
              labelText='Resource Status'
              name='resourceStatus'
              list={['all', ...Object.values(RESOURCE_STATUS)]}
              defaultValue={searchValues.resourceStatus}
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            />

            <FormRowSelect
              labelText='Resource Type'
              name='resourceType'
              list={['all', ...Object.values(RESOURCE_TYPE)]}
              defaultValue={searchValues.resourceType}
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            />

            <FormRowSelect
              labelText='Sort'
              name='sort'
              list={Object.values(RESOURCE_SORT_BY)}
              defaultValue={searchValues.sort || 'newest'}
              onChange={(e) => {
                submit(e.currentTarget.form);
              }}
            />
          </div>

          {/* Reset button */}
          <Link to='/dashboard/all-resources' className='btn form-btn delete-btn'>
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
