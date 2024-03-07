import React from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase/config';
import { useTitle } from '../hooks/useTitle';

export const CreatePost = ({title}) => {
    useTitle({title});
    const navigate = useNavigate();

    const postRef = collection(db, 'posts');

    async function handleSubmit(event){
        event.preventDefault();
        const document = {
            title: event.target.title.value,
            body: event.target.body.value,
            author: {
                name: auth.currentUser.displayName,
                id: auth.currentUser.uid
            }
        }
        await addDoc(postRef, document);
        navigate("/");
    }

  return (
      <main>
        <div className='w-1/2 '>
            <h2 className='text-3xl my-5'>ADD NEW POST</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className="text-xl my-5">
                        <label htmlFor="title" className="text-xl">Post Title</label>
                        <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type post title" required="" />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="body" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Post Content</label>
                        <textarea name="body" id="body" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your content here"></textarea>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button type="submit" className="mt-5 p-2 bg-blue-700 w-full text-white font-bold rounded-xl">
                        Create Post
                    </button>
                </div>
            </form>
        </div>
      </main>

  )
}
