export default function Hero() {
  return (
    <section>
      <div className="container py-10 flex max-xl:flex-col max-xl:items-center max-xl:text-center max-xl:gap-20 justify-between gap-14">
        <div className="xl:w-2/3 space-y-20 max-xl:space-y-10">
          <h1 className="text-4xl font-semibold leading-tight xl:max-w-xl">
            Mondj <span className="gradient-text">nemet</span> a{" "}
            <span className="bordered-text">modernkori</span> betegségekre!
          </h1>
          <p className="leading-loose xl:max-w-lg">
            Unod már, hogy mindig beteg vagy, és ezért nem tudsz megfelelően
            koncentrálni, nem tudod elérni a céljaidat? Ideje, hogy
            megváltoztasd az életedet!
          </p>
          <div className="flex flex-wrap gap-5 xl:max-w-xl max-xl:justify-center">
            <a
              href="#how"
              className="bg-secondary-300 py-3 px-8 rounded-xl hover:-translate-y-1 transition-transform"
            >
              Hogyan működik?
            </a>
            <a
              href="#"
              className="bg-primary-400 py-3 px-8 rounded-lg hover:-translate-y-1
              hover:shadow-[0_20px_80px_-10px_rgba(46,228,145,1)] transition-[box-shadow, transform] duration-300"
            >
              Vágjunk bele!
            </a>
          </div>
        </div>
        <div className="xl:w-1/3">
          <picture className="z-50 basis-16 flex-grow-0 flex-shrink-0">
            <source srcSet="assets/health.jpeg" />
            <img
              className="rounded-xl z-50"
              src="assets/health.jpeg"
              alt="random img"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
