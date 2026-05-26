export default function MainHero() {

  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden pt-14">
        <img
          alt=""
          src="placeholder-garden.jpg"
          className="absolute inset-0 -z-10 size-full object-cover opacity-100"
        />

        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-800 opacity-50 -z-10"></div>
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <p className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Zuverlässige Arbeit aus einer Hand.
              </p>
              <h1 className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
                Ihr Partner für Garten- & Landschaftsbau, Tiefbau und Containerservice im privaten und gewerblichen Bereich aus Limburg an der Lahn.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
