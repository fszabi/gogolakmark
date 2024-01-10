export default function Header() {
  return (
    <header className="bg-backgroundColor py-3 border-b border-gray-300">
      <div className="wrapper 2xl:wrapper-big 3xl:wrapper-bigger flex gap-10 items-center">
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
    </header>
  );
}
