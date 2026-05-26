
import { ArchiveBoxIcon, BugAntIcon, HomeIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Garten- & Landschaftsbau',
    description:
      'Professioneller Garten- und Landschaftsbau für Außenbereiche mit Struktur, Qualität und langlebigen Lösungen – individuell geplant und umgesetzt.',
    href: '#',
    icon: BugAntIcon,
  },
  {
    name: 'Tiefbau',
    description:
      'Zuverlässiger Tiefbau für Kanalbau, Erdarbeiten und Infrastrukturprojekte – präzise umgesetzt mit moderner Technik und langjähriger Erfahrung.',
    href: '#',
    icon: HomeIcon,
  },
  {
    name: 'Containerservice',
    description:
      'Flexibler Containerservice für Bauprojekte, Gartenabfälle und fachgerechte Entsorgung – schnell geliefert, zuverlässig abgeholt und sauber organisiert.',
    href: '#',
    icon: ArchiveBoxIcon,
  },
]

export default function MainBigLinks() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="text-base/7 font-semibold text-red-700">D. Kilavuz GmbH</h2> */}
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
           <span className='text-red-700 animate-pulse duration-100'>/ </span>Unsere Dienstleistungen auf einen Blick
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-red-700" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm/6 font-semibold text-red-700 hover:text-red-900 group">
                      Mehr erfahren <span aria-hidden="true" className='group-hover:pl-1 transition-all'>→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
