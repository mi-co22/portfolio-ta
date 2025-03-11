export function FilterSection() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto md:max-w-screen-sm lg:max-w-screen-md px-8 md:px-16">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            フィルター検索
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 sm:gap-12 sm:gap-y-6 lg:grid-cols-5 lg:gap-y-6 xl:grid-cols-5 xl:gap-16 xl:gap-y-6">
          <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
            <input
              type="checkbox"
              id="example1"
              name="checkGroup1"
              className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label for="example1" className="flex w-full space-x-2 text-sm">
              {' '}
              HTML{' '}
            </label>
          </div>
          <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
            <input
              type="checkbox"
              id="example2"
              name="checkGroup1"
              className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label for="example2" className="flex w-full space-x-2 text-sm">
              {' '}
              CSS{' '}
            </label>
          </div>
          <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
            <input
              type="checkbox"
              id="example3"
              name="checkGroup1"
              className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label for="example3" className="flex w-full space-x-2 text-sm">
              {' '}
              Javascript{' '}
            </label>
          </div>
          <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
            <input
              type="checkbox"
              id="example4"
              name="checkGroup1"
              className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label for="example4" className="flex w-full space-x-2 text-sm">
              {' '}
              Wordpress{' '}
            </label>
          </div>
          <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
            <input
              type="checkbox"
              id="example5"
              name="checkGroup1"
              className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label for="example5" className="flex w-full space-x-2 text-sm">
              {' '}
              Astro{' '}
            </label>
          </div>
          <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
            <input
              type="checkbox"
              id="example6"
              name="checkGroup1"
              className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label for="example6" className="flex w-full space-x-2 text-sm">
              {' '}
              Next.js{' '}
            </label>
          </div>
          <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
            <input
              type="checkbox"
              id="example7"
              name="checkGroup1"
              className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label for="example7" className="flex w-full space-x-2 text-sm">
              {' '}
              Photoshop{' '}
            </label>
          </div>
          <div className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
            <input
              type="checkbox"
              id="example8"
              name="checkGroup1"
              className="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
            />
            <label for="example8" className="flex w-full space-x-2 text-sm">
              {' '}
              Figma{' '}
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
