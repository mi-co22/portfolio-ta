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
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Gallery
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              これまでの実績案件と、学習したコンテンツをご紹介いたします。
            </p>
          </div>
          {/* <!-- text - end --> */}

          <div class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
            {/* <!-- article - start --> */}
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <Image
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                  width={160}
                  height={160}
                  alt="Photo by Minh Pham"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">2021</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    A社コーポレートサイト
                  </a>
                </h2>

                <p class="text-gray-500">
                  A社の中途採用サイトのリニューアル案件です。
                </p>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    CSS
                  </span>
                </div>
                <div>
                  <a
                    href="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
            {/* <!-- article - start --> */}
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <Image
                  src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                  width={160}
                  height={160}
                  alt="Photo by Lorenzo Herrera"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">2022</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    B社コーポレートサイト
                  </a>
                </h2>

                <p class="text-gray-500">
                  B社の中途採用サイトのリニューアル案件です。
                </p>
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
                <div>
                  <a
                    href="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
            {/* <!-- article - start --> */}
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <Image
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  width={160}
                  height={160}
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">2023</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    C社コーポレートサイト
                  </a>
                </h2>

                <p class="text-gray-500">
                  C社の中途採用サイトのリニューアル案件です。
                </p>
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
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    FIGMA
                  </span>
                </div>
                <div>
                  <a
                    href="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
            {/* <!-- article - start --> */}
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <Image
                  src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600"
                  width={160}
                  height={160}
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">2024</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    D社コーポレートサイト
                  </a>
                </h2>

                <p class="text-gray-500">
                  D社の中途採用サイトのリニューアル案件です。
                </p>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    CSS,SCSS
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    FIGMA
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    ASTRO
                  </span>
                </div>
                <div>
                  <a
                    href="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
            {/* <!-- article - start --> */}
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <Image
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  width={160}
                  height={160}
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">2025</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    E社コーポレートサイト
                  </a>
                </h2>

                <p class="text-gray-500">
                  E社の中途採用サイトのリニューアル案件です。
                </p>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    CSS,SCSS
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
                <div>
                  <a
                    href="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
            {/* <!-- article - start --> */}
            <div class="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
              <a
                href="#"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <Image
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600"
                  width={160}
                  height={160}
                  alt="Photo by Martin Sanchez"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  loading="lazy"
                />
              </a>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">2025</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <a
                    href="#"
                    class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                  >
                    F社コーポレートサイト
                  </a>
                </h2>

                <p class="text-gray-500">
                  F社の中途採用サイトのリニューアル案件です。
                </p>
                <div class="flex flex-wrap items-center gap-4 md:flex-row lg:gap-2">
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    HTML
                  </span>
                  <span class="rounded border px-2 py-1 text-sm text-gray-500">
                    CSS,SCSS
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
                <div>
                  <a
                    href="#"
                    class="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- article - end --> */}
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
