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
  allowedMaterials: string[]
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
    allowedMaterials: [
      'Holzreste, Folien, Metalle, Putzreste',
      'Mörtel- und Betonreste mit Verpackungen und Gipskarton gemischt',
      'Kabelreste, Rohre, Kunststoffe zusammen mit mineralischen Materialien',
      'Türen, Fensterrahmen (ohne Schadstoffe)',
      'Tapetenreste, Dämmstoffe (nicht gefährlich)',
      'Verpackungen (Papier, Folie, Karton) aus Bauarbeiten',
      'Kleinere Mengen Glas, Kunststoffe oder Metalle, die nicht separat gesammelt wurden',
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
    allowedMaterials: [
      'Mischung aus Beton- und Ziegelbruch',
      'Fliesen mit Betonresten',
      'Keramik (z. B. Waschbecken, Toiletten) zusammen mit Ziegeln oder Beton',
      'Abrissmaterial von Wänden, Decken oder Böden mit verschiedenen mineralischen Bestandteilen',
      'Straßenaufbruch (mineralisch, ohne Teer oder Schadstoffe)',
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
    allowedMaterials: [
      'Asphalt ohne Teeranteil',
      'Betonabbruch (z. B. Straßenplatten, Fundamente, Randsteine)',
      'Ziegelsteine, Klinker, Mauerwerk',
      'Pflastersteine, Gehwegplatten, Bordsteine',
      'Fliesen- und Keramikbruch',
      'Mischungen aus den genannten Stoffen (klassischer Straßenaufbruch)',
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
    allowedMaterials: [
      'Betonabbruch aus Hoch- und Tiefbau (Fundamente, Bodenplatten, Decken, Wände)',
      'Unbehandelter Beton aus Rück- und Umbauten',
      'Stahlbeton (Armierungseisen ist zulässig)',
      'Bruchstücke von Betonfertigteilen',
      'Betonreste aus dem Straßen- und Wegebau (sofern ohne Asphalt/Teer)',
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
    allowedMaterials: [
      'Erdaushub mit Grasnarbe, Wurzelresten oder Bewuchs',
      'Boden aus Baugruben, bei dem Oberboden und Muttererde nicht separat abgeschoben wurden',
      'Bodenschichten mit leichter Durchmischung aus Wurzeln, Rasen, Sträuchern',
      'Mineralischer Untergrund mit Humus- oder Wurzelanteilen',
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
    allowedMaterials: [
      'Rigipsplatten (Gipskartonplatten, GK-Platten)',
      'Stuckgips, Formgips',
      'Gipsreste aus Bau- und Abbruchmaßnahmen',
      'Gipskarton mit Papierkaschierung',
      'Gipsblöcke, Gipsbauplatten',
      'Verschnittreste aus Neubau und Ausbau',
      'Deckenplatten aus Gips',
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
    allowedMaterials: [
      'Gussasphalt aus Straßen- und Wegebau (Oberflächen, Deckschichten, Abdichtungen)',
      'Walzasphalt, Splittmastixasphalt',
      'Dach- und Brückenabdichtungen aus Gussasphalt (wenn teerfrei)',
      'Fahrbahndecken, Parkflächenbeläge',
      'Bituminöse Estriche',
      'Fugenmassen, sofern sie auf Bitumen basieren und nicht teerhaltig sind',
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
    allowedMaterials: ['Betondachsteine', 'Tondachziegel', 'Gemischte Dachabdeckungen'],
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
    allowedMaterials: [
      'Bauschutt mit Leichtbaustoffen, die Asbest, KMF (künstliche Mineralfasern) oder andere Schadstoffe enthalten',
      'Beton oder Mauerwerk mit Teer-, PAK- oder PCB-haltigen Beschichtungen',
      'Verputzte Bauteile mit asbesthaltigen Putzen oder Spachtelmassen',
      'Keramik oder Fliesen mit kontaminierten Anhaftungen',
      'Abbruchmaterial, das Holzschutzmittel oder Schwermetalle aufweist',
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
    allowedMaterials: [
      'Bodenaushub mit Ziegel-, Beton- oder Natursteinresten',
      'Erdaushub beim Rückbau von Gebäuden, bei dem Mauerwerk- oder Fundamentreste enthalten sind',
      'Steine, Kies, Schotter aus Baugruben',
      'Nicht verunreinigter Straßenunterbau (ohne Teer/PAK)',
      'Erde mit Bauschuttstücken (Beton, Ziegel)',
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
    allowedMaterials: [
      'Erdaushub aus Baugruben und Baugräben',
      'Bodenmassen mit Sand, Kies, Lehm, Ton',
      'Steine und Felsstücke',
      'Aushub mit Grasnarbe oder geringen Wurzelanteilen',
      'Bodenaushub mit mineralischen Beimengungen (z. B. Ziegel- oder Betonreste in kleiner Menge)',
      'Straßenunterbau ohne Teeranteile',
      'Nicht kontaminierter Boden aus Rück- oder Umbaumaßnahmen',
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
    allowedMaterials: [
      'Betonbruch aus Abbruchmaßnahmen (Fundamente, Bodenplatten, Decken, Wände)',
      'Stahlbetonbrocken (inkl. Armierung, Eisen darf enthalten sein)',
      'Übergrößen: massive Blöcke oder große Stücke, die vor der Verwertung zerkleinert werden müssen',
      'Unbehandelter Beton aus Rückbau oder Straßenbau',
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
    allowedMaterials: [
      'Rasenschnitt, Laub, Unkraut',
      'Strauchschnitt, Hecken- und Baumschnitt (Äste, Zweige)',
      'Blumen, Stauden, Pflanzenreste',
      'Fallobst',
      'Kleine Wurzelstücke (ohne Erde)',
      'Weihnachtsbäume (unbehandelt, ohne Schmuck)',
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
    allowedMaterials: [
      'Möbelplatten (Spanplatten, MDF, OSB)',
      'Türen, Regalteile, Schrankwände',
      'Lackierte, furnierte, beschichtete Hölzer',
      'Innentüren mit Laminat- oder Lackschicht',
      'Holz mit PVC-Beschichtungen oder kunststoffhaltigen Beschichtungen',
      'Lackierte oder behandelte Bauteile mit Chlor- oder anderen halogenorganischen Bestandteilen in den Anstrichen',
      'Furnierte oder dekorbeschichtete Möbel mit Kunststoffüberzügen',
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
    allowedMaterials: [
      'Bahnschwellen, Leitungsmasten, Zaunpfähle mit Teeröl oder Kreosot',
      'Holzfenster, Außentüren und Fassadenhölzer mit Holzschutzmitteln (z. B. Lindan, PCP)',
      'Gartenholz, Spielgeräte, Palisaden, die mit Holzschutzmitteln imprägniert wurden',
      'Imprägnierte Dachkonstruktionen, Sparren oder Dachlatten',
      'Außenmöbel aus behandeltem Holz',
      'Eisenbahnschwellen, Rebenpfähle',
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
    allowedMaterials: [
      'Möbelstücke (Schränke, Tische, Stühle, Sofas, Betten, Matratzen)',
      'Teppiche, Auslegeware, Vorhänge',
      'Lattenroste, Regale, Kommoden',
      'Koffer, große Spielsachen, Sportgeräte',
      'Sonstige sperrige Einrichtungsgegenstände',
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
    allowedMaterials: [
      'Zeitungen, Zeitschriften, Kataloge',
      'Bücher (ohne Kunststoff- oder Ledereinband)',
      'Schreibpapier, Kopierpapier',
      'Briefumschläge, Büro- und Druckerpapier',
      'Kartons und Verpackungen aus Pappe',
      'Wellpappe, Schachteln, Papiertüten',
    ],
  },
]

export function parsePrice(price: string): number {
  return parseFloat(price.replace('€', '').trim().replace(/\./g, '').replace(',', '.'))
}

export function getLowestPrice(sizes: ContainerSize[]): string {
  return sizes.reduce((lowest, size) => (parsePrice(size.price) < parsePrice(lowest.price) ? size : lowest)).price
}
