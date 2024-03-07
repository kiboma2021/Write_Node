import { Link } from 'react-router-dom';
import { useTitle } from '../hooks/useTitle';
import NotFoundImage from '../assets/pageNotFound.png';

export const PageNotFound = ({title}) => {
  useTitle({title});
  return (
    <main>
      <Link to="/" className='w-full flex justify-center'>
        <img className='w-auto h-3/4' src={NotFoundImage} alt="Not Found" />
      </Link>
    </main>
  )
}
