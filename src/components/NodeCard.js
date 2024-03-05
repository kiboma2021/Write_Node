import React from 'react'

export const NodeCard = ({post}) => {
  return (
    <div className='flex justify-center'>
      <a href="#" class="block w-4/5 m-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
      </a>
    </div>
  )
}
