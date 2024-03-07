import { Link } from 'react-router-dom'
import NotFoundImage from '../assets/pageNotFound.png'

export const PageNotFound = () => {
  return (
    <main>
      <Link to="/" className='w-full flex justify-center'>
        <img className='w-auto h-3/4' src={NotFoundImage} alt="Not Found" />
      </Link>
    </main>
  )
}
