import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'

export default function Home() {
  return (
    <>
      {/* <!-- hero - start --> */}
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Header />
          <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            {/* <!-- image - start --> */}
            <Image
              src="https://images.unsplash.com/photo-1618004652321-13a63e576b80?auto=format&q=75&fit=crop&w=1500"
              width={1472}
              height={524}
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="lazy"
            />
            {/* <!-- image - end --> */}

            {/* <!-- overlay - start --> */}
            <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
            {/* <!-- overlay - end --> */}

            {/* <!-- text start --> */}
            <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
              <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
                メインビジュアル
              </h1>
            </div>
            {/* <!-- text end --> */}
          </section>
        </div>
      </div>
      {/* <!-- hero - end --> */}
      {/* <!-- gallery - start --> */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">
            Gallery
          </h2>

          <div className="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                width={344}
                height={320}
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
                VR
              </span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                width={344}
                height={320}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tech
              </span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                width={344}
                height={320}
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
                Dev
              </span>
            </a>
            {/* <!-- image - end --> */}

            {/* <!-- image - start --> */}
            <a
              href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <Image
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                width={344}
                height={320}
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">
                Retro
              </span>
            </a>
            {/* <!-- image - end --> */}
          </div>

          <div className="flex items-start justify-between gap-8 sm:items-center">
            <p className="max-w-screen-sm text-sm text-gray-500 lg:text-base">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text.
            </p>

            <a
              href="#"
              className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              More
            </a>
          </div>
        </div>
      </div>
      {/* <!-- gallery - end --> */}

      {/* <!-- call to action - start --> */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
            {/* <!-- image - start --> */}
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <Image
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
                width={256}
                height={256} // 適切な高さを指定してください
                alt="Photo by Andras Vas"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- content - start --> */}
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <Link
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                External Link
                <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                  コンポーネント集
                </h2>
                <p className="mb-8 max-w-md text-gray-600">
                  小モジュールからレイアウトまで、今までに作成してきたブロックを集めたサイトです。
                </p>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    ストックサイトへ
                  </a>
                </div>
              </Link>
            </div>
            {/* <!-- content - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- call to action - end --> */}
      {/* <!-- call to action - start --> */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
            {/* <!-- image - start --> */}
            <div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <Image
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
                width={256}
                height={256} // 適切な高さを指定してください
                alt="Photo by Andras Vas"
                className="h-full w-full object-cover object-center"
                loading="lazy"
              />
            </div>
            {/* <!-- image - end --> */}

            {/* <!-- content - start --> */}
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <Link
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                External Link
                <h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">
                  アニメーション集
                </h2>
                <p className="mb-8 max-w-md text-gray-600">
                  小さなトランジション、フェードから、ライブラリを使ったリッチな動きを集めたサイトです。
                </p>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                  >
                    ストックサイトへ
                  </a>
                </div>
              </Link>
            </div>
            {/* <!-- content - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- call to action - end --> */}
      <Footer />
    </>
  )
}
