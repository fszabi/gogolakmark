import { useState, useEffect } from "react";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function onNavStateChange() {
    !isNavOpen ? setIsNavOpen(true) : setIsNavOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 800 && isNavOpen) {
        setIsNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);

  return (
    <header className="bg-backgroundColor py-3 sticky top-0 left-0 right-0 z-50 border-b border-gray-300">
      <div className="container flex gap-14 justify-between items-center">
        <div className="flex gap-10 items-center">
          <picture className="z-50 basis-16 flex-grow-0 flex-shrink-0">
            <source srcSet="https://picsum.photos/64" />
            <img
              className="rounded-xl z-50"
              src="https://picsum.photos/64"
              alt="random img"
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
