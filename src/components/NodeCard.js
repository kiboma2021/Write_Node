import React from 'react'
import moment from 'moment';
import { doc, deleteDoc, } from 'firebase/firestore';
import { auth,db } from '../firebase/config';

export const NodeCard = ({post,toogleUpdate,setToogleUpdate}) => {
  const createdAt = post.createdAt.toMillis();
  const updatedAt = post.updatedAt.toMillis();

  const isAuth = JSON.parse(localStorage.getItem("Authenticated") || false);

  async function handleDelete(){
    const get_doc = doc(db, "posts",post.id) 
    await deleteDoc(get_doc);
    setToogleUpdate(!toogleUpdate);
  }

  // async function handleEdit(){
  //   const get_doc = doc(db, "posts",post.id);
  // }

  return (
    <div className='flex flex-wrap justify-center'>
      <div className="flex justify-between w-4/5 m-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
          <div className="flex flex-wrap gap-5 mt-5">
            <span className="bg-green-300 text-wh mr-5 p-2 rounded-xl dark:bg-green-600">Posted By: {post.author.name}</span>
            <span className="bg-blue-300 mr-5 p-2 rounded-xl dark:bg-blue-600">Date Created: {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
            <span className="bg-yellow-300 mr-5 p-2 rounded-xl dark:bg-yellow-600">Date Updated: {moment(updatedAt).format('MMMM Do YYYY, h:mm:ss a')}</span>
          </div>         
        </div>
        { isAuth && (post.author.id===auth.currentUser.uid) && (
        <div className="flex flex-col justify-end p-4">
          <span><i className="bi bi-pencil-square text-2xl text-red-600 "></i></span>
          <span onClick={handleDelete}><i className="bi bi-trash text-2xl text-red-600 "></i></span>
        </div>
        )}
      </div>
    </div>
  )
}
