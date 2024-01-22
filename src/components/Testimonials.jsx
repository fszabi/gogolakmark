export default function About() {
  return (
    <section className="py-20">
      <div
        className="wrapper 2xl:wrapper-big 3xl:wrapper-bigger grid gap-6 auto-cols-fr
       [grid-template-areas:'one'_'two'_'three'_'four'_'five'] sm:[grid-template-areas:'one_one'_'two_three'_'five_five'_'four_four'] 
       normal:[grid-template-areas:'one_one'_'two_five'_'three_five'_'four_four']
       md:[grid-template-areas:'one_one_two'_'five_five_five'_'three_four_four']
       xl:[grid-template-areas:'one_one_two_five'_'three_four_four_five']"
      >
        <div
          className="bg-accent text-backgroundColor p-8 space-y-7 rounded-lg [grid-area:one] bg-['assets/bg-pattern-quotation.svg']
        bg-no-repeat bg-right-top"
        >
          <div class="flex items-center gap-5">
            <div>
              <img
                className="w-16 aspect-square rounded-full"
                src="assets/testimonial_1.jpg"
                alt="első referencia"
              />
            </div>
            <h2 class="name text-lg">Ági</h2>
          </div>
          <p className="text-lg">
            Márkot 2 éve kerestem meg hogy segítsen kialakítani egy
            egészségesebb étrendet és legfőképp egy hatékony edzéstervet.
          </p>
          <p className="text-xs italic leading-relaxed">
            „A véletlen műve hogy kedvenc edzőtermemben volt pont személyi edző.
            Le is csaptam rá gyorsan hogy biztosan beférjek hozzá...
            megegyeztünk és megkezdtük a közös munkát aminek meg is lett az
            eredménye pár hónapon belül. Márk az edzések alatt mind emberileg
            mind szakmailag kimagasló teljesítményt és segítséget nyújtott
            mindvégig. Türelme határtalan, humorérzéke csillagos ötös. Az
            edzések mindig jó hangulatban de dolgosan teltek. Igazi
            ,,hajtóerő,,. Sokat tanultam tőle és mégtöbbet fejlődtem általa
            legfőképp testileg no meg lelkileg is. Neki köszönhetően 44 évesen
            sikerült ,,anyatestemet,, átalakítani kicsit egészségesebbé.
            Őszintén ajánlom bárkinek mert egy csupaszív ember, tudatos edző, és
            jó barát.”
          </p>
        </div>
        <div className="bg-secondary-200 p-8 space-y-7 rounded-lg [grid-area:two]">
          <div class="flex items-center gap-5">
            <div>
              <img
                className="w-16 aspect-square rounded-full"
                src="assets/testimonial_2.jpg"
                alt="második referencia"
              />
            </div>
            <h2 class="name">Tamás</h2>
          </div>
          <p className="text-lg">Teljesen meg vagyok elégedve a munkájával!</p>
          <p className="text-xs italic">
            „Márk kiváló szakember mind a személyi edzés és a
            táplálkozástudomány területén. Ez számára nem munka hanem hivatás,
            őszintén és szívből teszi a dolgát. Ajánlom mindenkinek aki
            fontolgatja az életmódváltást, ha figyelsz arra amit mond, komoly
            eredményeket fogsz tudni elérni.”
          </p>
        </div>
        <div className="bg-textColor-100 p-8 space-y-7 rounded-lg [grid-area:three]">
          <div class="flex items-center gap-5">
            <div>
              <img
                className="w-16 aspect-square rounded-full"
                src="assets/testimonial_3.jpg"
                alt="harmadik referencia"
              />
            </div>
            <h2 class="name">Balázs</h2>
          </div>
          <p className="text-lg">Nagyban hozzájárult a fejlődésemhez!</p>
          <p className="text-xs italic">
            „Rengeteg magabiztosságot az edzéshez, nagyon nagy kitartást,
            biztató szavakat kaptam tőled nem számított mennyi ment! Ajánlom
            mindenkinek a Márkot rengeteget segít, mindent megad ahhoz hogy jobb
            életed legyen és hogy küzdj mert mindenből van kiút és ő ismeri az
            egészséghez vezető utat!”
          </p>
        </div>
        <div className="bg-textColor-400 text-backgroundColor p-8 space-y-7 rounded-lg [grid-area:four]">
          <div class="flex items-center gap-5">
            <div>
              <img
                className="w-16 aspect-square rounded-full"
                src="assets/testimonial_4.jpg"
                alt="negyedik referencia"
              />
            </div>
            <h2 class="name">Amanda</h2>
          </div>
          <p className="text-lg">
            Míg a Márkkal jártam edzeni, bár babaléptekkel haladtam, a
            hétköznapi életem teljesen megváltozott.
          </p>
          <p className="text-xs italic">
            „Az edzés már nem csak a célom eléréséről szólt, hanem az oda vezető
            út élvezetéről is. Egy olyan kellemes, otthonias környezetben
            edzhettem, ahol egy pár perces nevetés sosem volt tiltott és örömmel
            töltött el az edzés. A Márk sokat segített a működésem megértésében,
            a betegségek elkerülésében és gyors gyógyulásban is. Nem beszélve
            arról, hogy a testi egészségem mellett a mentális egészségemre is
            odafigyelt. Pontos edzéstervekkel, a fejlődésem folyamatos
            megfigyelésével, a sok beszélgetéssel mindig aktívan részt vett az
            edzéseimen és ott volt, ha szükség volt rá. A pozitivitása rendkívül
            jó hatással volt rám, hiszen sosem hagyta, hogy úgy érezzem nem
            értem el semmit. Sok biztatás, jókedv és nulla előítélettel vitte
            végig az edzéseket a legelső alkalomtól kezdve. Tiszta szívvel tudom
            ajánlani mindenkinek!””
          </p>
        </div>
        <div className="bg-textColor-100 p-8 space-y-7 rounded-lg [grid-area:five]">
          <div class="flex items-center gap-5">
            <div>
              <img
                className="w-16 aspect-square rounded-full"
                src="assets/testimonial_5.jpg"
                alt="ötödik referencia"
              />
            </div>
            <h2 class="name">Emese</h2>
          </div>
          <p className="text-lg">Miért a Márk az edzőm?</p>
          <p className="text-xs italic">
            „Sohasem gondoltam volna, hogy nekem személyi edzőm lesz. 2023.
            januárban kezdtem el újra járni az ABcenterbe, három hónap
            elteltével nem éreztem a fejlődést, közben láttam, hogy edzi a
            vendégeit és áprilisban megkértem segítsen az edzésekben. Az első
            pár együtt edzés után úgy gondoltam ez túl sok nekem „öreg vagyok”
            ehhez. De Márk nem hagyott, folyamatosan bíztatott, pozitív
            visszajelzéseket adott így növelte az önbizalmam. Heti háromszor
            edzünk ami változatos és folyamatos megpróbáltatást jelent. Mindig
            annyi plusz van a gyakorlatokba, hogy újabb kihívások elé tud
            állítani. Megfelelő táplálkozási tanácsait követve sokkal
            energikusabb lettem, csökkent a fáradtságérzetem, erősödött az
            immunrendszerem és most már bátran mondhatom látszik rajtam az a
            kemény munka. Úgyhogy ha bárki életmódot váltana, vagy szeretne új
            célokat kitűzni maga elé és azokért hajlandó kitartó munkával
            dolgozni, akkor ehhez bátran ajánlom, nagyon jó szakember!”
          </p>
        </div>
      </div>
    </section>
  );
}
