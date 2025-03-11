import { Pagination } from '@/components/Pagination'
import { FilterSection } from '@/components/FilterSection'
import { GalleryList } from '@/components/GalleryList'

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
          <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="rounded-lg bg-gray-100 px-4 py-6 md:py-8 lg:py-12">
                <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">
                  Gallery
                </p>

                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
                  作品一覧
                </h2>

                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                  コーディング、デザイン、学習中の各作品を一覧にして紹介しています。後々検索項目が増減しても動くようにしたいです。ペジネーションは、八枚以上ある場合に出現するようにしたいです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- hero - end --> */}
      <FilterSection />
      <GalleryList />
      <Pagination />
    </>
  )
}
