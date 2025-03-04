import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'

export const metadata = {
  title: '作品一覧ページ | ポートフォリオ',
  description:
    'コーディング、デザイン、学習中の各作品を一覧にして紹介しています。',
}

export default function Gallery() {
  // pages配下のものはexport default functionにする必要がある

  return (
    <>
      {/* <!-- hero - start --> */}
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Header />
          <div class="bg-white py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div class="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
                <p class="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
                  Gallery
                </p>

                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  作品一覧
                </h2>

                <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                  コーディング、デザイン、学習中の各作品を一覧にして紹介しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- hero - end --> */}
      {/* <!-- Search - start --> */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto md:max-w-screen-sm lg:max-w-screen-md px-8 md:px-16">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              フィルター検索
            </h2>
          </div>
          <div class="grid grid-cols-3 gap-8 sm:grid-cols-4 sm:gap-12 sm:gap-y-6 lg:grid-cols-5 lg:gap-y-6 xl:grid-cols-5 xl:gap-16 xl:gap-y-6">
            <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                id="example1"
                name="checkGroup1"
                class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label for="example1" class="flex w-full space-x-2 text-sm">
                {' '}
                HTML{' '}
              </label>
            </div>
            <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                id="example2"
                name="checkGroup1"
                class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label for="example2" class="flex w-full space-x-2 text-sm">
                {' '}
                CSS{' '}
              </label>
            </div>
            <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                id="example3"
                name="checkGroup1"
                class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label for="example3" class="flex w-full space-x-2 text-sm">
                {' '}
                Javascript{' '}
              </label>
            </div>
            <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                id="example4"
                name="checkGroup1"
                class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label for="example4" class="flex w-full space-x-2 text-sm">
                {' '}
                Wordpress{' '}
              </label>
            </div>
            <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                id="example5"
                name="checkGroup1"
                class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label for="example5" class="flex w-full space-x-2 text-sm">
                {' '}
                Astro{' '}
              </label>
            </div>
            <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                id="example6"
                name="checkGroup1"
                class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label for="example6" class="flex w-full space-x-2 text-sm">
                {' '}
                Next.js{' '}
              </label>
            </div>
            <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                id="example7"
                name="checkGroup1"
                class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label for="example7" class="flex w-full space-x-2 text-sm">
                {' '}
                Photoshop{' '}
              </label>
            </div>
            <div class="flex items-center space-x-2 rounded p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                id="example8"
                name="checkGroup1"
                class="h-4 w-4 rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400"
              />
              <label for="example8" class="flex w-full space-x-2 text-sm">
                {' '}
                Figma{' '}
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Search - end --> */}
      {/* <!-- Gallery List - start --> */}
      <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <a
                href="#"
                class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  width={350}
                  height={384}
                  alt="Photo by Austin Wade"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute right-0 bottom-2 flex gap-2">
                  <span class="rounded-l-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">
                    Read more
                  </span>
                </div>
              </a>
              <div className="flex flex-col gap-2">
                <div class="flex items-start justify-between gap-2 px-2">
                  <a
                    href="#"
                    class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    A社コーポレートサイト
                  </a>
                  <div class="flex flex-col items-end">
                    <span class=" text-gray-600 lg:text-lg">2021</span>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    CSS
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  width={350}
                  height={384}
                  alt="Photo by Nick Karvounis"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute right-0 bottom-2 flex gap-2">
                  <span class="rounded-l-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">
                    Read more
                  </span>
                </div>
              </a>
              <div className="flex flex-col gap-2">
                <div class="flex items-start justify-between gap-2 px-2">
                  <a
                    href="#"
                    class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    B社コーポレートサイト
                  </a>
                  <div class="flex flex-col items-end">
                    <span class=" text-gray-600 lg:text-lg">2022</span>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    CSS
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    JAVASCRIPT
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  width={350}
                  height={384}
                  alt="Photo by Austin Wade"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute right-0 bottom-2 flex gap-2">
                  <span class="rounded-l-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">
                    Read more
                  </span>
                </div>
              </a>
              <div className="flex flex-col gap-2">
                <div class="flex items-start justify-between gap-2 px-2">
                  <a
                    href="#"
                    class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    C社コーポレートサイト
                  </a>
                  <div class="flex flex-col items-end">
                    <span class=" text-gray-600 lg:text-lg">2023</span>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    SCSS
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    FIGMA
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    PHOTOSHOP
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    WORDPRESS
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  width={350}
                  height={384}
                  alt="Photo by Vladimir Fedotov"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute right-0 bottom-2 flex gap-2">
                  <span class="rounded-l-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">
                    Read more
                  </span>
                </div>
              </a>
              <div className="flex flex-col gap-2">
                <div class="flex items-start justify-between gap-2 px-2">
                  <a
                    href="#"
                    class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    D社コーポレートサイト
                  </a>
                  <div class="flex flex-col items-end">
                    <span class=" text-gray-600 lg:text-lg">2024</span>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    SCSS
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    FIGMA
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    PHOTOSHOP
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    NEXT.JS
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    DOCKER
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    WORDPRESS
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  width={350}
                  height={384}
                  alt="Photo by Austin Wade"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute right-0 bottom-2 flex gap-2">
                  <span class="rounded-l-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">
                    Read more
                  </span>
                </div>
              </a>
              <div className="flex flex-col gap-2">
                <div class="flex items-start justify-between gap-2 px-2">
                  <a
                    href="#"
                    class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    Xサイト
                  </a>
                  <div class="flex flex-col items-end">
                    <span class=" text-gray-600 lg:text-lg">2025</span>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    CSS
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1523359346063-d879354c0ea5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  width={350}
                  height={384}
                  alt="Photo by Nick Karvounis"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute right-0 bottom-2 flex gap-2">
                  <span class="rounded-l-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">
                    Read more
                  </span>
                </div>
              </a>
              <div className="flex flex-col gap-2">
                <div class="flex items-start justify-between gap-2 px-2">
                  <a
                    href="#"
                    class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    X2サイト
                  </a>
                  <div class="flex flex-col items-end">
                    <span class=" text-gray-600 lg:text-lg">2025</span>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    CSS
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    JAVASCRIPT
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1548286978-f218023f8d18?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  width={350}
                  height={384}
                  alt="Photo by Austin Wade"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute right-0 bottom-2 flex gap-2">
                  <span class="rounded-l-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">
                    Read more
                  </span>
                </div>
              </a>
              <div className="flex flex-col gap-2">
                <div class="flex items-start justify-between gap-2 px-2">
                  <a
                    href="#"
                    class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    X3サイト
                  </a>
                  <div class="flex flex-col items-end">
                    <span class=" text-gray-600 lg:text-lg">2026</span>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    SCSS
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    FIGMA
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    PHOTOSHOP
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    WORDPRESS
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="#"
                class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
              >
                <Image
                  src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  width={350}
                  height={384}
                  alt="Photo by Vladimir Fedotov"
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
                <div class="absolute right-0 bottom-2 flex gap-2">
                  <span class="rounded-l-lg bg-indigo-500 px-3 py-1.5 text-sm font-semibold tracking-wider text-white">
                    Read more
                  </span>
                </div>
              </a>
              <div className="flex flex-col gap-2">
                <div class="flex items-start justify-between gap-2 px-2">
                  <a
                    href="#"
                    class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                  >
                    X4サイト
                  </a>
                  <div class="flex flex-col items-end">
                    <span class=" text-gray-600 lg:text-lg">2026</span>
                  </div>
                </div>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    SCSS
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    FIGMA
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    PHOTOSHOP
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    NEXT.JS
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    DOCKER
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    WORDPRESS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Gallery List  - end --> */}

      <Footer />
    </>
  )
}
