export default function Services() {
  return (
    <section>
      <div className="container py-10 space-y-16">
        <h2 className="text-center text-3xl font-semibold">
          Miért engem válassz?
        </h2>
        <ul className="grid lg:grid-cols-3 gap-5">
          <li className="bg-primary-300 p-10 rounded-md space-y-5">
            <h3
              className="w-fit mx-auto relative flex flex-col justify-end font-medium text-center text-xl hover:before:h-full before:content-[''] before:h-1/2 
              before:block before:absolute before:-z-10 before:opacity-30 before:w-full
              before:bg-[linear-gradient(180deg,_transparent_50%,_#5e60ea_50%)] before:transition-[height] before:duration-300"
            >
              Személyedzés
            </h3>
            <p>
              Testi és szellemi egészségedhez nagyban hozzájárul az edzés.
              Személyesen fogom felügyelni az edzéseidet, így maximális lesz a
              fejlődésed.
            </p>
          </li>
          <li className="bg-primary-300 p-10 rounded-md space-y-5">
            <h3
              className="w-fit mx-auto relative flex flex-col justify-end font-medium text-center text-xl hover:before:h-full before:content-[''] before:h-1/2 
              before:block before:absolute before:-z-10 before:opacity-30 before:w-full
              before:bg-[linear-gradient(180deg,_transparent_50%,_#5e60ea_50%)] before:transition-[height] before:duration-300"
            >
              Táplálkozás tanácsadás
            </h3>
            <p>
              Nagyon fontos, hogy mit viszünk be a szervezetünkbe. Az egészséges
              élethez nem elég az edzés, figyelnünk kell a bevitt táplálék
              minőségére is. Összeállítok neked egy személyreszabott étrendet,
              amely megváltoztatja az életedet.
            </p>
          </li>
          <li className="bg-primary-300 p-10 rounded-md space-y-5">
            <h3
              className="w-fit mx-auto relative flex flex-col justify-end font-medium text-center text-xl hover:before:h-full before:content-[''] before:h-1/2 
              before:block before:absolute before:-z-10 before:opacity-30 before:w-full
              before:bg-[linear-gradient(180deg,_transparent_50%,_#5e60ea_50%)] before:transition-[height] before:duration-300"
            >
              Táplálkozás tanácsadás
            </h3>
            <p>
              Nagyon fontos, hogy mit viszünk be a szervezetünkbe. Az egészséges
              élethez nem elég az edzés, figyelnünk kell a bevitt táplálék
              minőségére is. Összeállítok neked egy személyreszabott étrendet,
              amely megváltoztatja az életedet.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
