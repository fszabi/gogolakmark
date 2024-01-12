export default function Header() {
  return (
    <header className="bg-backgroundColor py-3 border-b border-gray-300">
      <div className="wrapper 2xl:wrapper-big 3xl:wrapper-bigger flex gap-10 items-center">
        <picture>
          <source srcSet="assets/logo.png" />
          <img
            className="rounded-xl w-20 h-20"
            src="assets/logo.png"
            alt="logo"
          />
        </picture>
        <p className="text-lg font-semibold">Gogolák Márk</p>
      </div>
    </header>
  );
}
