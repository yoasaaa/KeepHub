import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { RESOURCE_STATUS, RESOURCE_TYPE } from '../../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = (queryClient) => async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Check required fields
  const requiredFields = ['title', 'url', 'resourceStatus', 'resourceType'];
  const missingFields = requiredFields.filter(field => !data[field]);
  
  if (missingFields.length > 0) {
    toast.error(`Please provide ${missingFields.join(', ')}`);
    return null;
  }

  try {
    await customFetch.post('/resources', data);
    queryClient.invalidateQueries(['resources']);
    toast.success('Resource added successfully');
    return redirect('/dashboard/all-resources');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddResource = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Add New Resource</h4>
        <div className='form-center'>
          {/* Required Fields Section */}
          <div className='form-section'>
            <h5 className='section-title'>Required Information</h5>
            <FormRow 
              type='text' 
              name='title' 
              labelText='Title *'
              required 
            />
            <FormRow 
              type='url' 
              name='url' 
              labelText='URL *'
              required 
            />
            <div className='form-row-flex'>
              <FormRowSelect
                labelText='Status *'
                name='resourceStatus'
                defaultValue={RESOURCE_STATUS.TO_READ}
                list={Object.values(RESOURCE_STATUS)}
                required
              />
              <FormRowSelect
                labelText='Type *'
                name='resourceType'
                defaultValue={RESOURCE_TYPE.ARTICLE}
                list={Object.values(RESOURCE_TYPE)}
                required
              />
            </div>
          </div>

          {/* Optional Fields Section */}
          <div className='form-section'>
            <h5 className='section-title'>Additional Information</h5>
            <FormRow 
              type='text' 
              name='platform' 
              labelText='Platform'
            />
            <FormRow 
              type='text' 
              name='tags' 
              labelText='Tags'
              placeholder='Separate tags with commas'
            />
            <FormRow
              type='textarea'
              name='notes'
              labelText='Notes'
              rows='3'
            />
          </div>

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddResource; 