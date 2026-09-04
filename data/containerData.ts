import {
  BuildingOffice2Icon,
  CircleStackIcon,
  CubeIcon,
  DocumentDuplicateIcon,
  RectangleStackIcon,
  SparklesIcon,
  Square3Stack3DIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'

export type ContainerSize = {
  name: string
  price: string
}

export type ContainerType = {
  id: number
  slug: string
  name: string
  category: string
  description: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  imageSrc: string
  imageAlt: string
  sizes: ContainerSize[]
}

export const containerData: ContainerType[] = [
  // Bauschutt & Aushub
  {
    id: 1,
    slug: 'baumischabfall',
    name: 'Baumischabfall',
    category: 'Bauschutt & Aushub',
    description: 'Für gemischte Bauabfälle wie Holz, Metall, Kunststoff und Verpackungsmaterial, die nicht sortenrein getrennt sind.',
    icon: Square3Stack3DIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Baumischabfall',
    sizes: [
      { name: '5m³', price: '543,00€' },
      { name: '7m³', price: '734,00€' },
      { name: '10m³', price: '1116,00€' },
    ],
  },
  {
    id: 2,
    slug: 'bauschutt-sortenrein',
    name: 'Bauschutt Sortenrein',
    category: 'Bauschutt & Aushub',
    description: 'Für reinen, sortenrein getrennten Bauschutt aus Abbruch- und Renovierungsarbeiten.',
    icon: CubeIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Bauschutt Sortenrein',
    sizes: [
      { name: '5m³', price: '385,00€' },
      { name: '7m³', price: '565,00€' },
    ],
  },
  {
    id: 3,
    slug: 'mineralischer-strassenaufbruch',
    name: 'Mineralischer Straßenaufbruch',
    category: 'Bauschutt & Aushub',
    description: 'Für Materialien aus dem Rückbau von Straßen- und Wegebefestigungen.',
    icon: CubeIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Mineralischen Straßenaufbruch',
    sizes: [
      { name: '5m³', price: '198,00€' },
      { name: '7m³', price: '214,00€' },
      { name: '10m³', price: '250,00€' },
    ],
  },
  {
    id: 4,
    slug: 'betonbruch',
    name: 'Betonbruch',
    category: 'Bauschutt & Aushub',
    description: 'Für reinen Betonabbruch aus Bau- und Abbrucharbeiten.',
    icon: CubeIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Betonbruch',
    sizes: [
      { name: '5m³', price: '290,00€' },
      { name: '7m³', price: '380,00€' },
    ],
  },
  {
    id: 5,
    slug: 'aushub-wurzeln-grasnarbe',
    name: 'Aushub mit Wurzeln oder Grasnarbe',
    category: 'Bauschutt & Aushub',
    description: 'Für Erdaushub mit anhaftenden Wurzeln und Grasnarbe aus Garten- und Tiefbauarbeiten.',
    icon: CircleStackIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Aushub mit Wurzeln oder Grasnarbe',
    sizes: [
      { name: '5m³', price: '412,00€' },
      { name: '7m³', price: '613,00€' },
    ],
  },
  {
    id: 6,
    slug: 'rigips',
    name: 'Rigips',
    category: 'Bauschutt & Aushub',
    description: 'Für Gipskartonplatten und Trockenbaureste aus Renovierung und Innenausbau.',
    icon: BuildingOffice2Icon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Rigips',
    sizes: [
      { name: '5m³', price: '325,00€' },
      { name: '7m³', price: '405,00€' },
      { name: '10m³', price: '565,00€' },
      { name: '19m³', price: '645,00€' },
      { name: '40m³', price: '885,00€' },
    ],
  },
  {
    id: 7,
    slug: 'gussasphalt',
    name: 'Gussasphalt',
    category: 'Bauschutt & Aushub',
    description: 'Für Gussasphalt aus dem Rückbau von Belägen und Fahrbahnen.',
    icon: CubeIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Gussasphalt',
    sizes: [
      { name: '5m³', price: '632,00€' },
      { name: '7m³', price: '985,00€' },
    ],
  },
  {
    id: 8,
    slug: 'betonbruch-dachpfannen',
    name: 'Betonbruch (Dachpfannen)',
    category: 'Bauschutt & Aushub',
    description: 'Für Betonabbruch mit Dachpfannenanteil aus Abbrucharbeiten.',
    icon: CubeIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Betonbruch mit Dachpfannen',
    sizes: [
      { name: '5m³', price: '387,00€' },
      { name: '7m³', price: '556,00€' },
    ],
  },
  {
    id: 9,
    slug: 'bauschutt-leichtbaustoffen',
    name: 'Bauschutt mit Leichtbaustoffen',
    category: 'Bauschutt & Aushub',
    description: 'Für Bauschutt mit Anteilen an Leichtbaustoffen wie Dämmmaterial.',
    icon: CubeIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Bauschutt mit Leichtbaustoffen',
    sizes: [
      { name: '5m³', price: '637,00€' },
      { name: '7m³', price: '995,00€' },
    ],
  },
  {
    id: 10,
    slug: 'aushub-abbruchsteine',
    name: 'Aushub mit Abbruchsteinen vermischt',
    category: 'Bauschutt & Aushub',
    description: 'Für Erdaushub mit vermischten Abbruchsteinen aus Tiefbauarbeiten.',
    icon: CircleStackIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Aushub mit Abbruchsteinen vermischt',
    sizes: [
      { name: '5m³', price: '400,00€' },
      { name: '7m³', price: '590,00€' },
    ],
  },
  {
    id: 11,
    slug: 'aushub',
    name: 'Aushub',
    category: 'Bauschutt & Aushub',
    description: 'Für unbelasteten Erdaushub aus Garten- und Tiefbauarbeiten.',
    icon: CircleStackIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Aushub',
    sizes: [
      { name: '5m³', price: '512,00€' },
      { name: '7m³', price: '656,00€' },
    ],
  },
  {
    id: 12,
    slug: 'betonbruch-uebergroesse',
    name: 'Betonbruch mit Übergröße',
    category: 'Bauschutt & Aushub',
    description: 'Für Betonabbruch mit übergroßen Bruchstücken aus Abbrucharbeiten.',
    icon: CubeIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Betonbruch mit Übergröße',
    sizes: [
      { name: '5m³', price: '290,00€' },
      { name: '7m³', price: '380,00€' },
    ],
  },
  // Grünschnitt & Gartenabfälle
  {
    id: 13,
    slug: 'gruenschnitt',
    name: 'Grünschnitt',
    category: 'Grünschnitt & Gartenabfälle',
    description: 'Für Laub, Grünschnitt, Äste und sonstige Gartenabfälle.',
    icon: SparklesIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Grünschnitt',
    sizes: [
      { name: '5m³', price: '308,00€' },
      { name: '7m³', price: '370,00€' },
      { name: '10m³', price: '458,00€' },
      { name: '19m³', price: '722,00€' },
      { name: '40m³', price: '1338,00€' },
    ],
  },
  // Holz
  {
    id: 14,
    slug: 'holz-a2-a3',
    name: 'A II - A III Holz',
    category: 'Holz',
    description: 'Für unbehandeltes bis leicht verunreinigtes Altholz der Kategorien A II und A III.',
    icon: RectangleStackIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für A II - A III Holz',
    sizes: [
      { name: '5m³', price: '294,00€' },
      { name: '7m³', price: '360,00€' },
      { name: '10m³', price: '555,00€' },
      { name: '19m³', price: '622,00€' },
      { name: '40m³', price: '753,00€' },
    ],
  },
  {
    id: 15,
    slug: 'holz-a4',
    name: 'A IV Holz',
    category: 'Holz',
    description: 'Für belastetes Altholz der Kategorie A IV aus Bau und Rückbau.',
    icon: RectangleStackIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für A IV Holz',
    sizes: [
      { name: '5m³', price: '425,00€' },
      { name: '7m³', price: '531,00€' },
      { name: '10m³', price: '744,00€' },
      { name: '19m³', price: '850,00€' },
      { name: '40m³', price: '1170,00€' },
    ],
  },
  // Papier, Kunststoffe & Mischabfälle
  {
    id: 16,
    slug: 'sperrmuell',
    name: 'Sperrmüll',
    category: 'Papier, Kunststoffe & Mischabfälle',
    description: 'Für Möbel, Matratzen und andere sperrige Haushaltsgegenstände.',
    icon: TrashIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Sperrmüll',
    sizes: [
      { name: '5m³', price: '522,00€' },
      { name: '7m³', price: '703,00€' },
      { name: '10m³', price: '1062,00€' },
      { name: '19m³', price: '1243,00€' },
      { name: '40m³', price: '1784,00€' },
    ],
  },
  {
    id: 17,
    slug: 'mischpapier',
    name: 'B12, Mischpapier',
    category: 'Papier, Kunststoffe & Mischabfälle',
    description: 'Für Mischpapier, Kartonagen und Verpackungsmaterial.',
    icon: DocumentDuplicateIcon,
    imageSrc: '/container.placeholder.jpg',
    imageAlt: 'Container für Mischpapier',
    sizes: [
      { name: '5m³', price: '172,45€' },
      { name: '7m³', price: '177,14€' },
      { name: '10m³', price: '183,40€' },
      { name: '19m³', price: '228,78€' },
      { name: '40m³', price: '277,29€' },
    ],
  },
]

export function parsePrice(price: string): number {
  return parseFloat(price.replace('€', '').trim().replace(/\./g, '').replace(',', '.'))
}

export function getLowestPrice(sizes: ContainerSize[]): string {
  return sizes.reduce((lowest, size) => (parsePrice(size.price) < parsePrice(lowest.price) ? size : lowest)).price
}
