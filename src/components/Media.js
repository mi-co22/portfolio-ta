import Image from 'next/image'

export function Media({ project }) {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-lg px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={project.image}
                width={464}
                height={580}
                alt=""
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              <span className="mb-0.5 inline-block text-gray-500">
                {project.year}
              </span>
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {project.title}
              </h2>
            </div>

            <div className="mb-8 md:mb-10">
              <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                DevTools
              </span>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border px-2 py-1 text-sm text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 md:mt-16 lg:mt-20">
              <div className="mb-3 text-lg font-semibold text-gray-800">
                Description
              </div>
              <p className="text-gray-500">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
