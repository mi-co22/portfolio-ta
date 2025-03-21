import Image from 'next/image'
import Link from 'next/link'
export default function CallToAction({ image, title, text, link, target }) {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
          <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <Image
              src={image}
              width={256}
              height={256}
              alt=""
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>

          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            External Link
            <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
              {title}
            </h2>
            <p className="mb-8 max-w-md text-gray-600">{text}</p>
            <div className="mt-auto">
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
              >
                {target}
              </Link>
            </div>
          </div>
          {/* <!-- content - end --> */}
        </div>
      </div>
    </div>
  )
}
