export default function Services() {
  return (
    <section className="py-20">
      <div className="wrapper 2xl:wrapper-big 3xl:wrapper-bigger space-y-16">
        <h2 className="text-center text-3xl font-semibold">
          Miért engem válassz?
        </h2>
        <ul className="grid lg:grid-cols-3 gap-5">
          <li className="bg-textColor-100 p-10 rounded-md space-y-5">
            <h3
              className="w-fit mx-auto relative flex flex-col justify-end font-medium text-center text-xl hover:before:h-full before:content-[''] before:h-1/2 
              before:absolute before:-z-10 before:opacity-30 before:w-full
              before:bg-[linear-gradient(180deg,_transparent_50%,_#5e60ea_50%)] before:transition-[height] before:duration-300"
            >
              Személyi edzés
            </h3>
            <p>
              Testi és szellemi egészségedhez nagyban hozzájárul az edzés.
              Személyesen fogom felügyelni az edzéseidet, így maximális lesz a
              fejlődésed.
            </p>
          </li>
          <li className="bg-textColor-100 p-10 rounded-md space-y-5">
            <h3
              className="w-fit mx-auto relative flex flex-col justify-end font-medium text-center text-xl hover:before:h-full before:content-[''] before:h-1/2 
              before:absolute before:-z-10 before:opacity-30 before:w-full
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
          <li className="bg-textColor-100 p-10 rounded-md space-y-5">
            <h3
              className="w-fit mx-auto relative flex flex-col justify-end font-medium text-center text-xl hover:before:h-full before:content-[''] before:h-1/2 
              before:absolute before:-z-10 before:opacity-30 before:w-full
              before:bg-[linear-gradient(180deg,_transparent_50%,_#5e60ea_50%)] before:transition-[height] before:duration-300"
            >
              Vérzsír analízis
            </h3>
            <p>
              A DBS teszt egy egyszerűen elvégezhető teszt a vérben található
              zsírsavak elemzéséhez, amelyek azt tükrözik, hogy milyen fajta
              zsírokat fogyasztunk. Ez a teszt a megszáradt vércseppek
              vizsgálata, ami tudományosan bizonyítottan épp olyan pontos, mint
              a vénából vett vérminta elemzése, ha a zsírsavakról van szó.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
