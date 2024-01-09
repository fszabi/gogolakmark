export default function Stats() {
  return (
    <section className="py-20">
      <div className="container grid lg:grid-cols-4 lg:grid-rows-[20rem,_15rem] gap-5">
        <div className="lg:col-span-3 bg-primary-400 rounded-2xl p-10 text-center flex justify-center items-center">
          <h3 className="text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-semibold">
            Több mint 1000 boldog ügyfél
          </h3>
        </div>
        <div className="lg:col-span-1 bg-secondary-400 rounded-2xl p-10 text-center flex justify-center items-center">
          <h3 className="text-lg lg:text-xl 2xl:text-2xl font-semibold">
            10+ év tapasztalat
          </h3>
        </div>
        <div className="lg:col-span-2 bg-textColor text-slate-100 rounded-2xl p-10 text-center flex justify-center items-center">
          <h3 className="text-lg 2xl:text-xl font-semibold">
            Személyreszabott szolgáltatások
          </h3>
        </div>
        <div className="lg:col-span-2 bg-accent text-slate-100 rounded-2xl p-10 text-center flex justify-center items-center">
          <h3 className="text-lg 2xl:text-xl font-semibold">
            Messzire nyúló sportmúlt
          </h3>
        </div>
      </div>
    </section>
  );
}
