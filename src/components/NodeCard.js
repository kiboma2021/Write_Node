import React from 'react'

export const NodeCard = ({post}) => {
  return (
    <div className='flex justify-center'>
      <div className="flex justify-between w-4/5 m-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
          <div className="mt-5">
            <span className="bg-gray-300 mr-5 p-2 rounded-xl dark:bg-blue-600">Posted By: Ben Kiboma</span>
            <span className="bg-gray-300 mr-5 p-2 rounded-xl dark:bg-blue-600">Date Created: Ben Kiboma</span>
          
          </div>         
        </div>
        <div className="flex flex-col justify-end p-4">
          <span><i class="bi bi-trash text-2xl text-red-600 "></i></span>
        </div>
      </div>
    </div>
  )
}
