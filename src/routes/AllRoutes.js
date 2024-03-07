import { Routes,Route } from 'react-router-dom';
import { Home,CreatePost,PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home title='All Posts' />} />
        <Route path='/post' element={<CreatePost title='Add Post' />} />
        <Route path='*' element={<PageNotFound title='404!' />} />
      
    </Routes>
  )
}
