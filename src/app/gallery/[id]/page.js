import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'
export const metadata = {
  title: '作品詳細ページ | ポートフォリオ',
  description: 'コーディング、デザイン、学習中の各作品について紹介しています。',
}

export default function GalleryPost() {
  return (
    <>
      {/* <!-- hero - start --> */}
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <Header />
        </div>
      </div>
      {/* <!-- hero - end --> */}
      {/* <!-- gallery-post - start --> */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-lg px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* <!-- images - start --> */}
            <div class="space-y-4">
              <div class="relative overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  width={464}
                  height={580}
                  alt="Photo by Himanshu Dewangan"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
            {/* <!-- images - end --> */}

            {/* <!-- content - start --> */}
            <div class="md:py-8">
              {/* <!-- name - start --> */}
              <div class="mb-2 md:mb-3">
                <span class="mb-0.5 inline-block text-gray-500">2024</span>
                <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">
                  D社コーポレートサイト
                </h2>
              </div>
              {/* <!-- name - end --> */}
              {/* <!-- DevTools - start --> */}
              <div class="mb-8 md:mb-10">
                <span class="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">
                  DevTools
                </span>

                <div class="flex flex-wrap gap-3">
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
              {/* <!-- DevTools - end --> */}
              {/* <!-- description - start --> */}
              <div class="mt-10 md:mt-16 lg:mt-20">
                <div class="mb-3 text-lg font-semibold text-gray-800">
                  Description
                </div>
                <p class="text-gray-500">
                  自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。
                  <br />
                  <br />
                  自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。自分が担当した箇所、勉強になったところ、詰まったところなどを記述します。
                </p>
              </div>
              {/* <!-- description - end --> */}
            </div>
            {/* <!-- content - end --> */}
          </div>
        </div>
      </div>
      {/* <!-- gallery-post - end --> */}
      {/* <!-- gallery-slider - start --> */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-xl px-4 md:px-8">
          <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div>
              <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                  width={350}
                  height={384}
                  alt="Photo by Martin Sanchez"
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            <div class="md:pt-8">
              <p class="text-center font-bold text-indigo-500 md:text-left">
                Developed by Me
              </p>

              <h1 class="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                社員紹介ページ
              </h1>

              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                特にここを担当した、などがあればここで示したいです。
              </p>
              <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
                一枚であればそのまま表示、二枚以上あれば、スライダーで一枚ずつ表示したいです。
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- gallery-slider - end --> */}
      <Footer />
    </>
  )
}
