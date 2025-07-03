import { redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = (queryClient) => async ({ params }) => {
  try {
    await customFetch.delete(`/resources/${params.id}`);
    queryClient.invalidateQueries(['resources']);
    toast.success('Resource deleted successfully');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return redirect('/dashboard/all-resources');
};

const DeleteResource = () => {
  return <div>DeleteResource</div>;
};

export default DeleteResource; 