import Image from 'next/image'

export function Slider() {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div
          id="default-carousel"
          class="relative w-full"
          data-carousel="slide"
        >
          {/* <!-- Carousel wrapper --> */}
          <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* <!-- Item 1 --> */}
            {/* <div class="duration-700 ease-in-out" data-carousel-item>
            <Image
                  src="https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                  width={464}
                  height={580}
                  alt="Photo by Himanshu Dewangan"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  loading="lazy"
                />
        </div> */}
            <div class="duration-700 ease-in-out" data-carousel-item>
              <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                <div>
                  <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
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

                <div className="md:pt-8 md:pr-16">
                  <p className="text-center font-bold text-indigo-500 md:text-left">
                    Developed by Me
                  </p>

                  <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                    社員紹介ページ
                  </h1>

                  <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    特にここを担当した、などがあればここで示したいです。
                  </p>
                  <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    一枚であればそのまま表示、二枚以上あれば、スライダーで一枚ずつ表示したいです。
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Item 2 --> */}
            <div class="duration-700 ease-in-out" data-carousel-item>
              <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                <div>
                  <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
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

                <div className="md:pt-8 md:pr-16">
                  <p className="text-center font-bold text-indigo-500 md:text-left">
                    Developed by Me
                  </p>

                  <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                    社員紹介ページ
                  </h1>

                  <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    特にここを担当した、などがあればここで示したいです。
                  </p>
                  <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    一枚であればそのまま表示、二枚以上あれば、スライダーで一枚ずつ表示したいです。
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Item 3 --> */}
            <div class="duration-700 ease-in-out" data-carousel-item>
              <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                <div>
                  <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
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

                <div className="md:pt-8 md:pr-16">
                  <p className="text-center font-bold text-indigo-500 md:text-left">
                    Developed by Me
                  </p>

                  <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                    社員紹介ページ
                  </h1>

                  <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    特にここを担当した、などがあればここで示したいです。
                  </p>
                  <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    一枚であればそのまま表示、二枚以上あれば、スライダーで一枚ずつ表示したいです。
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Item 4 --> */}
            <div class="duration-700 ease-in-out" data-carousel-item>
              <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                <div>
                  <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                    <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                      <div>
                        <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
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

                      <div className="md:pt-8 md:pr-16">
                        <p className="text-center font-bold text-indigo-500 md:text-left">
                          Developed by Me
                        </p>

                        <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                          社員紹介ページ
                        </h1>

                        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                          特にここを担当した、などがあればここで示したいです。
                        </p>
                        <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                          一枚であればそのまま表示、二枚以上あれば、スライダーで一枚ずつ表示したいです。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:pt-8 md:pr-16">
                  <p className="text-center font-bold text-indigo-500 md:text-left">
                    Developed by Me
                  </p>

                  <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                    社員紹介ページ
                  </h1>

                  <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    特にここを担当した、などがあればここで示したいです。
                  </p>
                  <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    一枚であればそのまま表示、二枚以上あれば、スライダーで一枚ずつ表示したいです。
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Item 5 --> */}
            <div class="duration-700 ease-in-out" data-carousel-item>
              <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                <div>
                  <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
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
                k
                <div className="md:pt-8 md:pr-16">
                  <p className="text-center font-bold text-indigo-500 md:text-left">
                    Developed by Me
                  </p>

                  <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                    社員紹介ページ
                  </h1>

                  <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    特にここを担当した、などがあればここで示したいです。
                  </p>
                  <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                    一枚であればそのまま表示、二枚以上あれば、スライダーで一枚ずつ表示したいです。
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              class="bg-indigo-500 w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="bg-gray-300 w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="bg-gray-300 w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="bg-gray-300 w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="bg-gray-300 w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
