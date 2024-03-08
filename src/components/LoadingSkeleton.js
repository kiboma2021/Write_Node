import Skeleton from 'react-loading-skeleton'

export const LoadingSkeleton = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      <div className="flex justify-between w-4/5 m-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Skeleton />Loading...</h5>
          <p className="font-normal text-gray-700 dark:text-gray-400"><Skeleton width='20rem' count={10} /></p>
          <div className="flex flex-wrap gap-5 mt-5">
            <Skeleton width='70px' />
          </div>         
        </div>
      </div>
    </div>
  )
}
