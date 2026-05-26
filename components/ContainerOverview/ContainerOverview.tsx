const callouts = [
  {
    name: '3 Größen',
    description: 'Baumischcontainer',
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/containerdienst/baumischcontainer',
  },
  {
    name: '3 Größen',
    description: 'Baumischcontainer',
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/containerdienst/baumischcontainer',
  },
  {
    name: '3 Größen',
    description: 'Baumischcontainer',
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/containerdienst/baumischcontainer',
  },
]

export default function ContainerOverview() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:py-32">
          <div className="mx-auto max-w-2xl lg:text-center mt-12 md:mt-0">
          {/* <h2 className="text-base/7 font-semibold text-red-700">D. Kilavuz GmbH</h2> */}
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
           <span className='text-red-700 animate-pulse duration-100'>/ </span>Unser Containerangebot auf einen Blick
          </p>
        </div>

          <div className="mt-12 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 md:mt-32 mb-12 md:mb-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative border-2 border-red-700">
                <div className="w-full relative">
                    <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="w-full bg-white object-cover max-sm:h-80 sm:aspect-[2/1] lg:aspect-square"
                    />
                    <div className="absolute top-0 right-0 left-0 bottom-0 bg-red-700 opacity-0 group-hover:opacity-40"></div>
                </div>
                
                <div className="p-6">
                <h3 className="text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 group-hover:text-red-700 transition-all">{callout.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
