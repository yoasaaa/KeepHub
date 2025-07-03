import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  useRouteError(); // Hook must be called even if not used
  
  return <h4>There was an error...</h4>;
};

export default ErrorElement;
