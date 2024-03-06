import React from 'react'

export const CreatePost = () => {
  return (
      <main>
        <div className='w-1/2 '>
            <h2 className='text-3xl my-5'>Add a new product</h2>
            <form>
                <div>
                    <div className="text-xl my-5">
                        <label for="name" className="text-xl">Product Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                    </div>
                    <div className="sm:col-span-2">
                        <label for="description" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
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
