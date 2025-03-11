import CallToAction from '@/components/CallToAction'
import { CardList } from '@/components/CardList'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  // pages配下のものはexport default functionにする必要がある
  return (
    <>
      {/* <!-- hero - start --> */}
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
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
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Gallery
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              これまでの実績案件と、学習したコンテンツをご紹介いたします。お気に入りにチェックした作品から４つを表示するようにしたいです。
            </p>
          </div>

          {/* <!-- text - end --> */}
          <CardList />
          <div className="flex justify-center mt-5">
            <Link
              href="/gallery"
              className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-950 py-1 pl-6 pr-14 font-medium text-neutral-50"
            >
              <span className="z-10 pr-2">作品一覧ページへ</span>
              <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-neutral-700 transition-[width] group-hover:w-[calc(100%-8px)]">
                <div className="mr-3.5 flex items-center justify-center">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-neutral-50"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- gallery - end --> */}
      {/* <!-- call to action - start --> */}
      <CallToAction
        image="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
        title="コンポーネント集"
        text="小モジュールからレイアウトまで、今までに作成してきたブロックを集めたサイトです。"
        link="test.com"
        target="ストックサイトへ"
      />
      <CallToAction
        image="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
        title="アニメーション集"
        text="小さなトランジション、フェードから、ライブラリを使ったリッチな動きを集めたサイトです。"
        link="test2.com"
        target="ストックサイトへ"
      />
      {/* <!-- call to action - end --> */}
    </>
  )
}
