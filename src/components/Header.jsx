export default function Header() {
  return (
    <header className="bg-backgroundColor py-3 border-b border-gray-300">
      <div className="container flex flex-wrap gap-x-14 gap-y-7 justify-between items-center">
        <div className="flex gap-5 xl:gap-10 items-center">
          <picture>
            <source srcSet="https://picsum.photos/64" />
            <img
              className="rounded-xl"
              src="https://picsum.photos/64"
              alt="logo"
            />
          </picture>
          <p className="text-lg font-semibold">Gogolák Márk</p>
        </div>
        <a
          href="#"
          className="bg-primary-400 py-3 px-8 rounded-lg hover:opacity-80 duration-300"
        >
          Vágjunk bele!
        </a>
      </div>
    </header>
  );
}
