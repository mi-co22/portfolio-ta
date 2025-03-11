import Image from 'next/image'
import Link from 'next/link'
export default function Card({ project }) {
  return (
    <>
      {/* <!-- article - start --> */}
      <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <Link
          href={project.link}
          className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
        >
          <Image
            src={project.image}
            width={160}
            height={160}
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            loading="lazy"
          />
        </Link>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">{project.year}</span>

          <h2 className="text-xl font-bold text-gray-800">
            <Link
              href="#"
              className="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
            >
              {project.title}
            </Link>
          </h2>

          <p className="text-gray-500">{project.text}</p>
          <div className="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded border px-2 py-1 text-sm text-gray-500"
              >
                {tag}
              </span>
            ))}
          </div>
          <div>
            <Link
              href={project.link}
              className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- article - end --> */}
    </>
  )
}
