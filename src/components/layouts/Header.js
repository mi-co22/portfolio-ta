import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-4 flex items-center justify-between py-4 md:py-8">
      {/* <!-- logo - start --> */}

      <Link
        href="/"
        className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
        aria-label="logo"
      >
        <Image
          src="/logo.svg" // SVGファイルのパスを指定
          width={95}
          height={94}
          alt=""
          className="h-auto w-6"
        />
        Portfolio
      </Link>
      {/* <!-- logo - end --> */}

      {/* <!-- nav - start --> */}
      <nav className="hidden gap-12 lg:flex">
        <Link href="/" className="text-lg font-semibold text-indigo-500">
          Home
        </Link>
        <Link
          href="/gallery"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          Gallery
        </Link>
        <Link
          href="/contact"
          className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
        >
          Contact
        </Link>
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <a
        href="#"
        className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
      >
        フリーワード検索にしたい
      </a>

      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
      >
        <Image
          src="/hamburger.svg" // SVGファイルのパスを指定
          width={95}
          height={94}
          alt="ハンバーガーメニュー"
          className="h-6 w-6"
        />
      </button>
      {/* <!-- buttons - end --> */}
    </header>
  )
}
