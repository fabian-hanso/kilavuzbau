import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { containerData, getLowestPrice } from '@/data/containerData'

function ContainerIllustration() {
  return (
    <div className="relative size-full">
      <svg viewBox="0 0 200 150" className="relative size-full p-8" fill="none">
        <polygon
          points="140,58 168,32 168,86 140,112"
          fill="#f3f4f6"
          stroke="#b91c1c"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="38,58 140,58 168,32 66,32"
          fill="#e5e7eb"
          stroke="#b91c1c"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <polygon
          points="38,58 140,58 140,112 38,112"
          fill="#fafafa"
          stroke="#b91c1c"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line x1="64" y1="58" x2="64" y2="112" stroke="#b91c1c" strokeWidth="1" opacity="0.35" />
        <line x1="90" y1="58" x2="90" y2="112" stroke="#b91c1c" strokeWidth="1" opacity="0.35" />
        <line x1="116" y1="58" x2="116" y2="112" stroke="#b91c1c" strokeWidth="1" opacity="0.35" />
        <line x1="154" y1="45" x2="154" y2="99" stroke="#b91c1c" strokeWidth="1" opacity="0.35" />
        <image href="/logo-mark.png" x="72" y="69" width="34" height="32" preserveAspectRatio="xMidYMid meet" />
      </svg>
    </div>
  )
}

function groupByCategory() {
  const groups = new Map<string, typeof containerData>()
  for (const container of containerData) {
    const group = groups.get(container.category)
    if (group) {
      group.push(container)
    } else {
      groups.set(container.category, [container])
    }
  }
  return groups
}

export default function ContainerOverview() {
  const groups = groupByCategory()

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none lg:py-32">
          <div className="mx-auto max-w-2xl lg:text-center mt-12 md:mt-0">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              <span className="text-red-700 animate-pulse duration-100">/ </span>Unser Containerangebot auf einen Blick
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Vom Bauschutt bis zum Gartenabfall – wir liefern den passenden Container in der richtigen Größe, zuverlässig und schnell.
            </p>
          </div>

          <div className="mt-12 space-y-16 sm:mt-16 md:mt-24">
            {Array.from(groups.entries()).map(([category, containers]) => (
              <div key={category}>
                <h2 className="text-2xl font-semibold tracking-tight text-gray-900 border-b border-gray-200 pb-4">
                  {category}
                </h2>

                <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                  {containers.map((container) => (
                    <Link key={container.slug} href={`/containerdienst/${container.slug}`} className="group">
                      <div className="relative aspect-4/3 w-full overflow-hidden bg-gray-50 transition-transform duration-500 ease-out group-hover:scale-105">
                        <ContainerIllustration />
                      </div>

                      <div className="mt-5 flex items-center gap-x-2 text-xs font-semibold tracking-wide text-red-700 uppercase">
                        <container.icon aria-hidden="true" className="size-4" />
                        {container.sizes.length} Größen
                      </div>

                      <h3 className="mt-2 text-lg font-semibold text-gray-900">{container.name}</h3>
                      <p className="mt-2 text-sm/6 text-gray-600 line-clamp-2">{container.description}</p>

                      <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                        <p className="text-sm text-gray-500">
                          ab <span className="font-semibold text-gray-900">{getLowestPrice(container.sizes)}</span>
                        </p>
                        <span className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-red-700 group-hover:text-red-900">
                          Anfragen
                          <ArrowRightIcon aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
