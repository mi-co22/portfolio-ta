import Image from 'next/image'
import Link from 'next/link'

export default function GalleryCard({ project }) {
  return (
    <>
      <div>
        <Link
          href={project.link}
          className="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
        >
          <Image
            src={project.image}
            width={350}
            height={384}
            alt=""
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute right-0 bottom-2 flex gap-2">
            <span className="rounded-l-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">
              Read more
            </span>
          </div>
        </Link>
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-2 px-2">
            <Link
              href={project.link}
              className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
            >
              {project.title}
            </Link>

            <div className="flex flex-col items-end">
              <span className=" text-gray-600 lg:text-lg">{project.year}</span>
            </div>
          </div>
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
        </div>
      </div>
    </>
  )
}
