import ScrollArrow from "./ScrollArrow";

export default function Footer() {
  return (
    <footer id="contact" className="py-20">
      <div className="bg-textColor-100 wrapper 2xl:wrapper-big 3xl:wrapper-bigger p-5 xl:p-32 rounded-2xl grid grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-14">
        <div>
          <div className="flex gap-10 items-center">
            <picture>
              <source srcSet="assets/logo.webp" />
              <img
                className="rounded-xl w-20 h-20"
                src="assets/logo.png"
                alt="egeszsegkultura logo"
              />
            </picture>
            <p className="text-lg font-semibold">Gogolák Márk</p>
          </div>
        </div>
        <div className="space-y-10">
          <h3 className="opacity-50 uppercase">Elérhetőségek</h3>
          <ul className="space-y-5">
            <li className="flex gap-3 items-center max-xs:flex-col max-xs:items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="min-w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                />
              </svg>
              <a
                href="tel:+36304029926"
                className="hover:opacity-60 transition-opacity duration-300"
              >
                +36 30 402 9926
              </a>
            </li>
            <li className="flex gap-3 items-center max-xs:flex-col max-xs:items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="min-w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
              <a
                href="mailto:gogolakmark@gmail.com"
                className="hover:opacity-60 transition-opacity duration-300"
              >
                gogolakmark@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-10">
          <h3 className="opacity-50 uppercase">Közösségi média</h3>
          <ul className="space-y-5">
            <li className="flex flex-wrap gap-3 items-center">
              <img
                className="min-w-10 h-10"
                src="assets/icons/facebook.svg"
                alt="facebook icon"
              />
              <a
                href="https://www.facebook.com/mark.gogolak"
                target="_blank"
                className="hover:opacity-60 transition-opacity duration-300"
              >
                Facebook
              </a>
            </li>
            <li className="flex flex-wrap gap-3 items-center">
              <img
                className="min-w-10 h-10"
                src="assets/icons/instagram.svg"
                alt="instagram icon"
              />
              <a
                href="https://www.instagram.com/gogolakm/"
                target="_blank"
                className="hover:opacity-60 transition-opacity duration-300"
              >
                Instagram
              </a>
            </li>
            <li className="flex flex-wrap gap-3 items-center">
              <a
                href="https://www.zinzino.com/2015023479"
                target="_blank"
                className="hover:opacity-60 transition-opacity duration-300"
              >
                <picture>
                  <source srcSet="assets/zinzino.webp" />
                  <img
                    className="min-w-10 h-10"
                    src="assets/zinzino.png"
                    alt="zinzino logo"
                  />
                </picture>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ScrollArrow />
    </footer>
  );
}
