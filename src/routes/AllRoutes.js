import { Routes,Route } from 'react-router-dom';
import { Home,CreatePost,PageNotFound } from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' component={<Home title='Home' />} />
        <Route path='/post' component={<CreatePost title='Add Post' />} />
        <Route path='*' component={<PageNotFound title='404!' />} />
      
    </Routes>
  )
}
