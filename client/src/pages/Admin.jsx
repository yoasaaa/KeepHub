import { FaBook, FaUsers } from 'react-icons/fa';
import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import { StatItem } from '../components';

export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, resources } = useLoaderData();
  return (
    <Wrapper>
      <StatItem
        title='current users'
        count={users}
        color='#e9b949'
        bcg='#fcefc7'
        icon={<FaUsers />}
      />
      <StatItem
        title='total resources'
        count={resources}
        color='#647acb'
        bcg='#e0e8f9'
        icon={<FaBook />}
      />
    </Wrapper>
  );
};
export default Admin;
