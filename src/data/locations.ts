export interface LocationDetail {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  priceUnit: string;
  capacity: string;
  duration: string;
  level: string;
  heroImage: string;
  heroAlt: string;
  detailImage: string;
  detailAlt: string;
  tag: string;
  services: { icon: string; label: string }[];
  itinerary: { title: string; text: string }[];
  highlights: string[];
}

export const locationDetails: LocationDetail[] = [
  {
    slug: 'bateau-electrique',
    title: 'Bateaux électriques',
    shortTitle: 'Bateau électrique',
    tagline: 'Sans permis · Jusqu\'à 7 personnes',
    description: 'Naviguez sans permis sur les eaux turquoise du lac de Sainte-Croix. Nos bateaux électriques silencieux vous emmènent au cœur des Gorges du Verdon.',
    longDescription: 'Embarquez à bord de nos bateaux électriques nouvelle génération, silencieux et respectueux de l\'environnement. Sans permis requis, ils accueillent jusqu\'à 7 personnes pour une balade inoubliable sur le lac de Sainte-Croix. Explorez les criques secrètes, longez les falaises des Gorges du Verdon et profitez d\'une vue unique sur les eaux turquoise.',
    price: 55,
    priceUnit: 'heure',
    capacity: 'Jusqu\'à 7 personnes',
    duration: '1h, 2h, demi-journée',
    level: 'Tous niveaux — aucun permis requis',
    heroImage: '/lac-sainte-croix-gorges-verdon-location-bateaux-electriques.jpg',
    heroAlt: 'Bateau électrique sur le lac de Sainte-Croix avec vue sur les Gorges du Verdon',
    detailImage: '/location-bateau-electrique-lac-sainte-croix-surfcenter.jpeg',
    detailAlt: 'Location bateau électrique Surf Center — lac de Sainte-Croix',
    tag: '62329049-d954-482c-82a1-faa16321e3bf',
    services: [
      { icon: 'anchor', label: 'Briefing sécurité inclus' },
      { icon: 'users', label: 'Jusqu\'à 7 passagers' },
      { icon: 'battery', label: 'Moteur 100% électrique' },
      { icon: 'shield', label: 'Gilets fournis' },
      { icon: 'sun', label: 'Bimini (pare-soleil)' },
      { icon: 'map', label: 'Carte du lac fournie' },
    ],
    itinerary: [
      { title: 'La boucle des criques', text: 'Tour de 1h30 le long des criques sauvages, idéal en famille. Baignade possible.' },
      { title: 'L\'entrée des Gorges', text: 'Parcours de 2h jusqu\'à l\'entrée des Gorges du Verdon. Paysages spectaculaires, eaux turquoise.' },
      { title: 'La traversée complète', text: 'Demi-journée pour explorer le lac en profondeur. Pique-nique sur une crique isolée.' },
    ],
    highlights: ['Sans permis', 'Silencieux', 'Écologique', 'Famille'],
  },
  {
    slug: 'paddle',
    title: 'Stand-up Paddle',
    shortTitle: 'Paddle board',
    tagline: 'Accessible à tous · Vue garantie',
    description: 'Debout sur les eaux cristallines du lac de Sainte-Croix, le paddle offre une expérience unique entre sport et contemplation.',
    longDescription: 'Le stand-up paddle est l\'activité phare du lac de Sainte-Croix. Accessible dès le premier essai, il vous permet de glisser sur des eaux d\'un bleu irréel tout en profitant d\'une vue panoramique sur les Gorges du Verdon. Idéal seul, en couple ou en famille, c\'est la meilleure façon de découvrir le lac à son rythme.',
    price: 15,
    priceUnit: 'heure',
    capacity: '1 personne par planche',
    duration: '1h, 2h, demi-journée',
    level: 'Débutant à confirmé',
    heroImage: '/location-paddle-bateaux-electriques-lac-sainte-croix-gorges-verdon.jpeg',
    heroAlt: 'Stand-up paddle sur le lac de Sainte-Croix avec vue sur les Gorges du Verdon',
    detailImage: '/location-paddle-lac-sainte-croix-surfcenter.jpeg',
    detailAlt: 'Location paddle board Surf Center — lac de Sainte-Croix',
    tag: '52bf76b6-6f0a-43ff-b0a2-4c1332d5ede5',
    services: [
      { icon: 'anchor', label: 'Briefing technique inclus' },
      { icon: 'shield', label: 'Gilet de sauvetage fourni' },
      { icon: 'zap', label: 'Planches gonflables stables' },
      { icon: 'sun', label: 'Leash de sécurité fourni' },
      { icon: 'map', label: 'Carte des parcours' },
      { icon: 'users', label: 'Cours collectifs disponibles' },
    ],
    itinerary: [
      { title: 'Balade découverte', text: 'Parcours facile d\'1h le long de la plage. Idéal pour les débutants.' },
      { title: 'Tour des criques', text: 'Parcours de 2h pour pagayer jusqu\'aux criques secrètes et se baigner.' },
      { title: 'Sunrise paddle', text: 'Session matinale au lever du soleil. Lac calme, lumière magique.' },
    ],
    highlights: ['Facile', 'Contemplation', 'Sport', 'Solo ou duo'],
  },
  {
    slug: 'pedalo',
    title: 'Pédalos',
    shortTitle: 'Pédalo',
    tagline: 'En famille · Criques secrètes',
    description: 'Le pédalo reste l\'activité familiale par excellence sur le lac de Sainte-Croix. Accessible à tous, il permet de découvrir les criques à son rythme.',
    longDescription: 'Embarquez en famille ou entre amis à bord de nos pédalos pour une balade tranquille sur le lac de Sainte-Croix. Stables et confortables, ils permettent de longer la côte, de découvrir des criques isolées et de profiter de la baignade dans une eau cristalline. L\'activité parfaite pour les petits comme les grands.',
    price: 15,
    priceUnit: 'heure',
    capacity: 'Jusqu\'à 4 personnes',
    duration: '1h, 2h',
    level: 'Tous niveaux — accessible aux enfants',
    heroImage: '/location-pedalo-lac-sainte-croix-plage-surfcenter.jpeg',
    heroAlt: 'Pédalos sur la plage du lac de Sainte-Croix — Surf Center',
    detailImage: '/location-pedalo-lac-sainte-croix.jpeg',
    detailAlt: 'Location pédalo Surf Center — lac de Sainte-Croix',
    tag: '03a55e88-44ac-4161-ad03-aa857b1d0dc0',
    services: [
      { icon: 'users', label: 'Jusqu\'à 4 personnes' },
      { icon: 'shield', label: 'Gilets enfants fournis' },
      { icon: 'anchor', label: 'Toboggan intégré' },
      { icon: 'sun', label: 'Pare-soleil disponible' },
      { icon: 'battery', label: 'Aucun moteur nécessaire' },
      { icon: 'map', label: 'Parcours balisés' },
    ],
    itinerary: [
      { title: 'Le tour de la plage', text: 'Parcours facile d\'1h autour de la plage. Parfait avec les enfants.' },
      { title: 'Les criques cachées', text: 'Parcours de 2h pour rejoindre les criques isolées côté est.' },
    ],
    highlights: ['Famille', 'Toboggan', 'Facile', 'Baignade'],
  },
  {
    slug: 'canoe',
    title: 'Canoë-Kayak',
    shortTitle: 'Canoë',
    tagline: 'Exploration · Face aux falaises',
    description: 'Le canoë-kayak est l\'activité idéale pour explorer le lac au plus près de l\'eau, en solo ou en duo, face aux falaises des Gorges du Verdon.',
    longDescription: 'Glissez au ras de l\'eau à bord de nos canoës et kayaks pour une expérience d\'immersion totale. Légers et maniables, ils vous permettent d\'atteindre des endroits inaccessibles en bateau : grottes, criques étroites, pieds des falaises. En solo ou en duo, explorez le lac de Sainte-Croix comme jamais.',
    price: 10,
    priceUnit: 'heure',
    capacity: '1 à 2 personnes',
    duration: '1h, 2h, demi-journée',
    level: 'Débutant à intermédiaire',
    heroImage: '/location-canoe-lac-sainte-croix-surfcenter.jpg',
    heroAlt: 'Canoë sur le lac de Sainte-Croix — Surf Center',
    detailImage: '/canoe.jpeg',
    detailAlt: 'Location canoë-kayak Surf Center — lac de Sainte-Croix',
    tag: 'e57bf5a3-2296-4226-94a8-06295b1415d8',
    services: [
      { icon: 'anchor', label: 'Pagaies fournies' },
      { icon: 'shield', label: 'Gilets de sauvetage' },
      { icon: 'zap', label: 'Canoës stables' },
      { icon: 'users', label: 'Solo ou duo' },
      { icon: 'map', label: 'Carte des parcours' },
      { icon: 'sun', label: 'Bidon étanche prêté' },
    ],
    itinerary: [
      { title: 'Les falaises', text: 'Parcours de 1h30 le long des falaises calcaires. Impressionnant.' },
      { title: 'L\'aventure Gorges', text: 'Parcours de 2h30 vers l\'entrée des Gorges du Verdon. Sportif et spectaculaire.' },
    ],
    highlights: ['Exploration', 'Aventure', 'Duo', 'Nature'],
  },
  {
    slug: 'planche-a-voile',
    title: 'Planche à voile',
    shortTitle: 'Planche à voile',
    tagline: 'Adrénaline · Vent du Verdon',
    description: 'La planche à voile sur le lac de Sainte-Croix, c\'est le vent du Verdon, une eau plate idéale et des conditions parfaites pour rider.',
    longDescription: 'Le lac de Sainte-Croix offre des conditions de vent exceptionnelles pour la planche à voile. Protégé des vagues par les falaises, avec un vent thermique régulier l\'après-midi, c\'est le spot idéal pour les débutants comme les confirmés. Notre flotte récente et nos moniteurs diplômés vous accompagnent.',
    price: 20,
    priceUnit: 'heure',
    capacity: '1 personne',
    duration: '1h, 2h, demi-journée',
    level: 'Débutant à confirmé',
    heroImage: '/location-planche-a-voile-windsurf-lac-sainte-croix.png',
    heroAlt: 'Planche à voile sur le lac de Sainte-Croix — Surf Center',
    detailImage: '/location-planche-a-voile-windsurf-lac-sainte-croix.png',
    detailAlt: 'Location planche à voile Surf Center — lac de Sainte-Croix',
    tag: '7a524907-97b7-42bd-bfdc-deb401767b21',
    services: [
      { icon: 'zap', label: 'Voiles adaptées au niveau' },
      { icon: 'anchor', label: 'Combinaison prêtée' },
      { icon: 'shield', label: 'Gilet de sauvetage' },
      { icon: 'users', label: 'Cours avec moniteur' },
      { icon: 'sun', label: 'Vent thermique régulier' },
      { icon: 'map', label: 'Zone de navigation balisée' },
    ],
    itinerary: [
      { title: 'Initiation', text: 'Cours de 1h avec moniteur. Debout sur la planche dès la première session.' },
      { title: 'Perfectionnement', text: 'Session de 2h pour travailler les virements et la vitesse.' },
      { title: 'Navigation libre', text: 'Demi-journée de ride libre pour les confirmés.' },
    ],
    highlights: ['Adrénaline', 'Glisse', 'Vent', 'Sport'],
  },
];

export function getLocationBySlug(slug: string): LocationDetail | undefined {
  return locationDetails.find(l => l.slug === slug);
}

export function getOtherLocations(currentSlug: string): LocationDetail[] {
  return locationDetails.filter(l => l.slug !== currentSlug);
}
