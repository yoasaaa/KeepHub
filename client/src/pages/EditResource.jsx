import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { RESOURCE_STATUS, RESOURCE_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';
import { useQuery } from '@tanstack/react-query';

const singleResourceQuery = (id) => {
  return {
    queryKey: ['resource', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/resources/${id}`);
      return data;
    },
  };
};

export const loader = (queryClient) => async ({ params }) => {
  try {
    await queryClient.ensureQueryData(singleResourceQuery(params.id));
    return params.id;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-resources');
  }
};

export const action = (queryClient) => async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.patch(`/resources/${params.id}`, data);
    queryClient.invalidateQueries(['resources']);
    toast.success('Resource edited successfully');
    return redirect('/dashboard/all-resources');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditResource = () => {
  const id = useLoaderData();
  const {
    data: { resource },
  } = useQuery(singleResourceQuery(id));

  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Edit Resource</h4>
        <div className='form-center'>
          <FormRow type='text' name='title' defaultValue={resource.title} />
          <FormRow type='text' name='platform' defaultValue={resource.platform} />
          <FormRow
            type='url'
            name='url'
            labelText='resource URL'
            defaultValue={resource.url}
          />
          <FormRow
            type='text'
            name='tags'
            labelText='tags (comma separated)'
            defaultValue={resource.tags.join(', ')}
          />
          <FormRowSelect
            name='resourceStatus'
            labelText='resource status'
            defaultValue={resource.resourceStatus}
            list={Object.values(RESOURCE_STATUS)}
          />
          <FormRowSelect
            name='resourceType'
            labelText='resource type'
            defaultValue={resource.resourceType}
            list={Object.values(RESOURCE_TYPE)}
          />
          <FormRow
            type='textarea'
            name='notes'
            defaultValue={resource.notes}
            rows='3'
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditResource; 