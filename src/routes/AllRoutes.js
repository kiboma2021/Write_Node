import { Routes,Route } from 'react-router-dom';
import { Home,CreatePost,PageNotFound } from '../pages';
import { ProtectedRoutes } from './ProtectedRoutes';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home title='All Posts' />} />
        <Route path='/post' element={<ProtectedRoutes><CreatePost title='Add Post' /></ProtectedRoutes> } />
        <Route path='*' element={<PageNotFound title='404!' />} />
      
    </Routes>
  )
}
