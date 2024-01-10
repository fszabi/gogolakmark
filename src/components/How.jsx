export default function How() {
  return (
    <section id="how" className="py-20">
      <div className="wrapper 2xl:wrapper-big 3xl:wrapper-bigger p-10 xl:p-20 rounded-2xl bg-secondary-200 flex max-xl:flex-col max-xl:space-y-5 gap-5 justify-between">
        <div className="space-y-10 xl:w-3/6">
          <h2 className="text-2xl font-semibold">Hogyan működik?</h2>
          <div className="flex flex-wrap gap-5 xl:max-w-xl">
            <a
              href="https://www.salonic.hu/"
              target="_blank"
              className="bg-secondary-200 py-3 px-8 rounded-lg hover:-translate-y-1 transition-transform"
            >
              Időpont foglalás
            </a>
            <a
              href="#contact"
              className="bg-primary-400 py-3 px-8 rounded-lg hover:-translate-y-1
              hover:shadow-[0_20px_80px_-10px_rgba(46,228,145,1)] transition-[box-shadow, transform] duration-300"
            >
              Kapcsolat
            </a>
          </div>
        </div>

        <ul className="grid xl:grid-cols-2 gap-y-32 gap-x-16 xl:w-3/6 max-xl:pl-14 max-xl:gap-y-14">
          <li className="before:content-['1'] before:leading-none before:text-2xl before:text-accent before:font-semibold before:absolute before:-translate-x-10">
            Keress fel, vagy foglalj időpontot hozzám
          </li>
          <li className="before:content-['2'] before:leading-none before:text-2xl before:text-accent before:font-semibold before:absolute before:-translate-x-10">
            Összeállítok egy számodra megfelelő tervet
          </li>
          <li className="before:content-['3'] before:leading-none before:text-2xl before:text-accent before:font-semibold before:absolute before:-translate-x-10">
            Segítek elérni a célodat
          </li>
          <li className="before:content-['4'] before:leading-none before:text-2xl before:text-accent before:font-semibold before:absolute before:-translate-x-10">
            Innentől már csak azon múlik, hogy mennyire vagy céltudatos és
            kitartó!
          </li>
        </ul>
      </div>
    </section>
  );
}
