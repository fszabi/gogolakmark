export default function About() {
  return (
    <section className="py-20">
      <div className="wrapper 2xl:wrapper-big 3xl:wrapper-bigger grid xl:grid-cols-2 gap-20 mx-auto">
        <div className="overflow-hidden rounded-xl">
          <div className="flex animate-slide max-h-[60rem]">
            <picture className="flex-grow flex-shrink-0 basis-full snap-start">
              <source media="(min-width: 500px)" srcSet="assets/mark_1.jpg" />
              <source srcSet="assets/mark_1.jpg" />
              <img
                className="w-full h-full object-cover"
                id="img-1"
                src="assets/mark_1.jpg"
                alt="mark 1"
              />
            </picture>
            <picture className="flex-grow flex-shrink-0 basis-full snap-start">
              <source media="(min-width: 500px)" srcSet="assets/mark_2.jpg" />
              <source srcSet="assets/mark_2.jpg" />
              <img
                className="w-full h-full object-cover"
                id="img-2"
                src="assets/mark_2.jpg"
                alt="mark 2"
              />
            </picture>
            <picture className="flex-grow flex-shrink-0 basis-full snap-start">
              <source media="(min-width: 500px)" srcSet="assets/mark_3.jpg" />
              <source srcSet="assets/mark_3.jpg" />
              <img
                className="w-full h-full object-cover"
                id="img-3"
                src="assets/mark_4.jpg"
                alt="mark 3"
              />
            </picture>
            <picture className="flex-grow flex-shrink-0 basis-full snap-start">
              <source media="(min-width: 500px)" srcSet="assets/mark_4.jpg" />
              <source srcSet="assets/mark_4.jpg" />
              <img
                className="w-full h-full object-cover"
                id="img-4"
                src="assets/mark_4.jpg"
                alt="mark 4"
              />
            </picture>
            <picture className="flex-grow flex-shrink-0 basis-full snap-start">
              <source media="(min-width: 500px)" srcSet="assets/mark_5.jpg" />
              <source srcSet="assets/mark_5.jpg" />
              <img
                className="w-full h-full object-cover"
                id="img-5"
                src="assets/mark_5.jpg"
                alt="mark 5"
              />
            </picture>
            <picture className="flex-grow flex-shrink-0 basis-full snap-start">
              <source media="(min-width: 500px)" srcSet="assets/mark_1.jpg" />
              <source srcSet="assets/mark_1.jpg" />
              <img
                className="w-full h-full object-cover"
                id="img-1"
                src="assets/mark_1.jpg"
                alt="mark 1"
              />
            </picture>
          </div>
        </div>

        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">A hivatásom</h2>
          <p>
            A civilizált társadalmakban legnagyobb mértékben előforduló{" "}
            <span className="text-lg">krónikus betegségek</span> szinte
            mindegyike visszavezethető valamilyen mértékű{" "}
            <span className="text-lg">táplálkozásbeli/életmódbeli</span>{" "}
            ártalomra.
          </p>
          <p>
            Első lépésben szükséges felmérni ezen ártalmak mértékét egyénenként
            az életmódbeli{" "}
            <span className="text-lg">szokások feltérképezése</span>{" "}
            (konzultáció) során, és lehetőség szerint objektív analitikai
            eszközökkel is. Majd ennek megfelelően{" "}
            <span className="text-lg">személyre szabott</span>, terápiás hatású,
            egészséges, fenntartható, kiegyensúlyozott étrendi-életmódbeli
            ismeretekkel és eszközökkel segítem a hozzám fordulók életében
            vissza állítani az <span className="text-lg">egyensúlyt</span>.
          </p>
          <p>
            Ez az egyensúlyi állapot sajnos már nem jár alanyi jogon a
            megváltozott étkezési szokások és mezőgazdasági eljárások, illetve
            egyéb civilizációs körülmények végett. Így nekünk kell kezünkbe
            venni az <span className="text-lg">irányítást</span>, és
            kialakítanunk egy preventív étkezési stratégiát, mellyel{" "}
            <span className="text-lg">minimalizálhatjuk</span> az életünkben
            megjelenő legtöbb krónikus betegség előfordulásának esélyét!
          </p>
          <p>
            Gogolák Márknak hívnak, ebben igyekszem naprakész maradni és a{" "}
            <span className="text-lg">tudomány</span> jelenlegi állásának
            megfelelő táplálkozási ismeretekkel{" "}
            <span className="text-lg">segíteni</span> a hozzám fordulóknak.
          </p>
          <p className="italic">
            „Nem azért élünk, hogy együnk, hanem azért eszünk, hogy élhessünk”
          </p>
        </div>
      </div>
    </section>
  );
}
