export default function Hero() {
  return (
    <section className="py-20">
      <div className="container xl:grid max-xl:space-y-14 max-xl:text-center xl:grid-cols-2 gap-14">
        <div className="space-y-20 max-xl:space-y-10 max-w-3xl xl:max-w-xl max-xl:mx-auto">
          <h1 className="text-4xl font-semibold leading-tight">
            Mondj <span className="gradient-text">nemet</span> a{" "}
            <span className="bordered-text">modernkori</span> betegségekre!
          </h1>
          <p className="leading-loose">
            Unod már, hogy mindig beteg vagy, és ezért nem tudsz megfelelően
            koncentrálni, nem tudod elérni a céljaidat? Ideje, hogy
            megváltoztasd az életedet!
          </p>
          <div className="flex flex-wrap gap-5 max-xl:justify-center">
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
        <div className="grid place-items-center">
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
