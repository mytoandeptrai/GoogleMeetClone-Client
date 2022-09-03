import { useLocation } from 'react-router-dom';

const useSearchParam = () => {
   const location = useLocation();
   const searchParam = new URLSearchParams(location.search);
   return searchParam;
};

export default useSearchParam;
