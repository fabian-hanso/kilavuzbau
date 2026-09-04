"use client"

import { CheckCircleIcon, CheckIcon} from '@heroicons/react/20/solid'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState, type FormEvent } from 'react'
import { useParams, useRouter, notFound } from 'next/navigation'
import { containerData } from '@/data/containerData'
import ContainerIllustration from '@/components/Shared/ContainerIllustration/ContainerIllustration'

export default function Page() {
  const { slug } = useParams<{ slug: string }>()
  const router = useRouter()
  const container = containerData.find((item) => item.slug === slug)

  const [price, setPrice] = useState(container?.sizes[0]?.price)
  const [selectedSize, setSelectedSize] = useState(container?.sizes[0]?.name)

  if (!container) {
    notFound()
  }

  const activeContainer = container

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const params = new URLSearchParams({
      container: activeContainer.slug,
      size: selectedSize ?? activeContainer.sizes[0].name,
    })
    router.push(`/anfrage?${params.toString()}`)
  }

  const breadcrumbs = [
    { id: 1, name: 'Containerdienst', href: '/containerdienst' },
    { id: 2, name: container.category, href: '/containerdienst' },
    { id: 3, name: container.name, href: '#' },
  ]

  return (
    <div className="bg-white pt-48">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-0 md:pb-32 sm:px-6 lg:flex lg:items-start lg:max-w-7xl lg:gap-x-8 lg:px-8">
        {/* Product image */}
        <div className="relative aspect-square w-full overflow-hidden bg-gray-50 lg:order-2 lg:w-1/2 lg:shrink-0">
          <ContainerIllustration />
        </div>

        {/* Left column: details, allowed materials, form */}
        <div className="mt-10 lg:order-1 lg:mt-0 lg:max-w-lg">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
              {breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                <li key={breadcrumb.id}>
                  <div className="flex items-center text-sm">
                    <a href={breadcrumb.href} className="font-medium text-gray-500 hover:text-gray-900">
                      {breadcrumb.name}
                    </a>
                    {breadcrumbIdx !== breadcrumbs.length - 1 ? (
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="ml-2 size-5 shrink-0 text-gray-300"
                      >
                        <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-4">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{container.name}</h1>
          </div>

          <section aria-labelledby="information-heading" className="mt-4">
            <h2 id="information-heading" className="sr-only">
              Product information
            </h2>

            <div className="flex items-center">
              <p className="text-lg text-gray-900 sm:text-xl">{price}</p>
            </div>

            <div className="mt-4 space-y-6">
              <p className="text-base text-gray-500">{container.description}</p>
            </div>

            <div className='flex flex-col mt-6'>
              <div className="flex items-center">
                <CheckIcon aria-hidden="true" className="size-5 shrink-0 text-red-700" />
                <p className="ml-2 text-sm text-gray-500">Inkl. Lieferung und Abholung</p>
              </div>
              <div className="mt-4 flex items-center">
                <XMarkIcon aria-hidden="true" className="size-5 shrink-0 text-red-700" />
                <p className="ml-2 text-sm text-gray-500">Standtage exklusive</p>
              </div>
            </div>
          </section>

          {/* Allowed materials */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-gray-900">Was darf in den Container?</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              {activeContainer.allowedMaterials.map((material) => (
                <li key={material} className="flex items-start gap-x-2">
                  <CheckIcon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-red-700" />
                  <span>{material}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product form */}
          <section aria-labelledby="options-heading" className="mt-10">
            <h2 id="options-heading" className="sr-only">
              Product options
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="sm:flex sm:justify-between">
                {/* Size selector */}
                <fieldset className='w-full'>
                  <legend className="block text-sm font-medium text-gray-700">Größe</legend>
                  <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {container.sizes.map((size) => (
                      <label
                        key={size.name}
                        aria-label={size.name}
                        aria-description={size.name}
                        className="group relative flex border border-gray-300 bg-white p-4 has-[:disabled]:border-gray-400 has-[:disabled]:bg-gray-200 has-[:disabled]:opacity-25 has-[:checked]:outline has-[:focus-visible]:outline has-[:checked]:outline-2 has-[:focus-visible]:outline-[3px] has-[:checked]:-outline-offset-2 has-[:focus-visible]:-outline-offset-1 has-[:checked]:outline-red-700"
                      >
                        <input
                          defaultValue={size.name}
                          defaultChecked={size === activeContainer.sizes[0]}
                          onChange={() => {
                            setPrice(size.price)
                            setSelectedSize(size.name)
                          }}
                          name="size"
                          type="radio"
                          className="absolute inset-0 appearance-none focus:outline focus:outline-0 cursor-pointer"
                        />
                        <div className="flex-1">
                          <span className="block text-base font-medium text-gray-900">{size.name}</span>
                          {/* <span className="mt-1 block text-sm text-gray-500">{size.description}</span> */}
                        </div>
                        <CheckCircleIcon
                          aria-hidden="true"
                          className="invisible size-5 text-red-700 group-has-[:checked]:visible"
                        />
                      </label>
                    ))}
                  </div>
                </fieldset>
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-gray-50 cursor-pointer"
                >
                  Anfragen
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
