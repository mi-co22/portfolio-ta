import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/layouts/Header'
import { Footer } from '@/components/layouts/Footer'

export const metadata = {
  title: 'お問い合わせページ | ポートフォリオ',
  description: 'お気軽にお問い合わせください。',
}

export default function Contact() {
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
                  お問い合わせ
                </h2>

                <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                  お気軽にお問い合わせください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- hero - end --> */}
      {/* <!-- form - start --> */}
      <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          {/* <!-- text - start --> */}
          <div class="mb-10 md:mb-16">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Get in touch
            </h2>

            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated.
            </p>
          </div>
          {/* <!-- text - end --> */}

          {/* <!-- form - start --> */}
          <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                First name*
              </label>
              <input
                name="first-name"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                for="last-name"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Last name*
              </label>
              <input
                name="last-name"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="company"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Company
              </label>
              <input
                name="company"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="email"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email*
              </label>
              <input
                name="email"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="subject"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Subject*
              </label>
              <input
                name="subject"
                class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div class="sm:col-span-2">
              <label
                for="message"
                class="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Message*
              </label>
              <textarea
                name="message"
                class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div class="flex items-center justify-between sm:col-span-2">
              <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Send
              </button>

              <span class="text-sm text-gray-500">*Required</span>
            </div>

            <p class="text-xs text-gray-400">
              By signing up to our newsletter you agree to our{' '}
              <a
                href="#"
                class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
          {/* <!-- form - end --> */}
        </div>
      </div>
      {/* <!-- form - end --> */}
      <Footer />
    </>
  )
}
