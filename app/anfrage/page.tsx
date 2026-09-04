"use client"

import { Suspense, useState, type FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { containerData } from '@/data/containerData'

function AnfrageForm() {
  const searchParams = useSearchParams()
  const container = containerData.find((item) => item.slug === searchParams.get('container'))
  const requestedSize = searchParams.get('size')

  const [selectedSize, setSelectedSize] = useState(
    container?.sizes.find((size) => size.name === requestedSize)?.name ?? container?.sizes[0]?.name ?? ''
  )
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [vonDatum, setVonDatum] = useState('')

  const today = new Date().toISOString().split('T')[0]

  const selectedPrice = container?.sizes.find((size) => size.name === selectedSize)?.price

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      telefon: formData.get('telefon'),
      strasse: formData.get('strasse'),
      plz: formData.get('plz'),
      ort: formData.get('ort'),
      von: formData.get('von'),
      bis: formData.get('bis'),
      nachricht: formData.get('nachricht'),
      container: container?.name ?? null,
      groesse: container ? selectedSize : null,
      preis: container ? selectedPrice : null,
    }

    try {
      await fetch('/api/anfrage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
    } finally {
      setStatus('success')
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Vielen Dank für Ihre Anfrage!</h1>
        <p className="mt-4 text-base text-gray-600">Wir melden uns schnellstmöglich bei Ihnen.</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Container anfragen</h1>

      {container ? (
        <div className="mt-6 border-2 border-red-700 p-4">
          <p className="text-sm text-gray-500">Ihre Auswahl</p>
          <p className="mt-1 text-lg font-semibold text-gray-900">{container.name}</p>
          {selectedPrice ? (
            <p className="mt-1 text-sm text-gray-600">
              {selectedSize} · {selectedPrice}
            </p>
          ) : null}
        </div>
      ) : (
        <p className="mt-6 text-sm text-gray-600">
          Keinen Container ausgewählt? Kein Problem, teilen Sie uns Ihre Wünsche einfach im Nachrichtenfeld mit.
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {container && container.sizes.length > 1 ? (
          <div className="md:col-span-2">
            <label htmlFor="groesse" className="block text-sm font-medium text-gray-700">
              Größe
            </label>
            <select
              id="groesse"
              name="groesse"
              value={selectedSize}
              onChange={(event) => setSelectedSize(event.target.value)}
              className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-700 focus:outline-none"
            >
              {container.sizes.map((size) => (
                <option key={size.name} value={size.name}>
                  {size.name} – {size.price}
                </option>
              ))}
            </select>
          </div>
        ) : null}

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-700 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-Mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-700 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="telefon" className="block text-sm font-medium text-gray-700">
            Telefon
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-700 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="strasse" className="block text-sm font-medium text-gray-700">
            Straße
          </label>
          <input
            id="strasse"
            name="strasse"
            type="text"
            className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-700 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="plz" className="block text-sm font-medium text-gray-700">
            Postleitzahl
          </label>
          <input
            id="plz"
            name="plz"
            type="text"
            inputMode="numeric"
            className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-700 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="ort" className="block text-sm font-medium text-gray-700">
            Ort
          </label>
          <input
            id="ort"
            name="ort"
            type="text"
            className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-700 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="von" className="block text-sm font-medium text-gray-700">
            Lieferung ab
          </label>
          <input
            id="von"
            name="von"
            type="date"
            min={today}
            value={vonDatum}
            onChange={(event) => setVonDatum(event.target.value)}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-700 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="bis" className="block text-sm font-medium text-gray-700">
            Abholung bis
          </label>
          <input
            id="bis"
            name="bis"
            type="date"
            min={vonDatum || today}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-700 focus:outline-none"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="nachricht" className="block text-sm font-medium text-gray-700">
            Nachricht
          </label>
          <textarea
            id="nachricht"
            name="nachricht"
            rows={4}
            className="mt-1 block w-full border border-gray-300 px-3 py-2 text-gray-900 focus:border-red-700 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="md:col-span-2 flex w-full items-center justify-center border border-transparent bg-red-700 px-8 py-3 text-base font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:opacity-50 cursor-pointer"
        >
          {status === 'submitting' ? 'Wird gesendet…' : 'Anfrage senden'}
        </button>
      </form>
    </div>
  )
}

export default function AnfragePage() {
  return (
    <div className="bg-white pt-24">
      <Suspense fallback={null}>
        <AnfrageForm />
      </Suspense>
    </div>
  )
}
