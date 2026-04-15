export interface EventFormula {
  title: string;
  description: string;
  features: string[];
  capacity: string;
  image: string;
  alt: string;
}

export const proFormulas: EventFormula[] = [
  {
    title: 'Team Building nautique',
    description: 'Renforcez la cohésion de vos équipes avec une journée d\'activités nautiques sur le lac de Sainte-Croix. Organisation clé en main.',
    features: [
      'Activités nautiques au choix',
      'Encadrement moniteurs dédiés',
      'Espace privatisé',
      'Restauration sur place',
      'Devis sur mesure',
    ],
    capacity: '10 à 100 personnes',
    image: '/location-bateau-electriques-evjf-lac-sainte-croix.jpg',
    alt: 'Team building nautique au Surf Center — lac de Sainte-Croix',
  },
  {
    title: 'Séminaire & Incentive',
    description: 'Organisez votre séminaire dans un cadre exceptionnel. Activités nautiques le matin, déjeuner face au lac, workshops l\'après-midi.',
    features: [
      'Cadre unique Gorges du Verdon',
      'Formule demi-journée ou journée',
      'Pause déjeuner au snack-pizzeria',
      'Activités team building incluses',
      'Interlocuteur dédié',
    ],
    capacity: '15 à 80 personnes',
    image: '/trophee-hobie-shop-lac-sainte-croix-surf-center.jpeg',
    alt: 'Séminaire entreprise au Surf Center — lac de Sainte-Croix',
  },
  {
    title: 'Soirée d\'entreprise',
    description: 'Privatisez le Surf Center pour une soirée inoubliable. Coucher de soleil, concert privé, buffet — tout est possible.',
    features: [
      'Privatisation en soirée',
      'Programmation musicale au choix',
      'Buffet ou cocktail dînatoire',
      'Coucher de soleil sur le lac',
      'Capacité flexible',
    ],
    capacity: '20 à 150 personnes',
    image: '/concert-surfcenter-lac-sainte-croix.png',
    alt: 'Soirée d\'entreprise au Surf Center — coucher de soleil sur le lac',
  },
];

export const privateFormulas: EventFormula[] = [
  {
    title: 'EVJF / EVG',
    description: 'Enterrement de vie de jeune fille ou garçon au bord du lac. Activités fun, ambiance garantie, souvenirs mémorables.',
    features: [
      'Activités nautiques au choix',
      'Formule personnalisable',
      'Espace dédié au groupe',
      'Accueil personnalisé',
      'Ambiance festive',
    ],
    capacity: '8 à 30 personnes',
    image: '/location-bateau-electriques-evjf-lac-sainte-croix.jpg',
    alt: 'EVJF au Surf Center — activités nautiques lac de Sainte-Croix',
  },
  {
    title: 'Anniversaire & Fête privée',
    description: 'Fêtez votre anniversaire au bord du lac de Sainte-Croix. Location d\'un espace, activités et restauration incluses.',
    features: [
      'Espace privatisé',
      'Activités nautiques',
      'Restauration sur place',
      'Décoration possible',
      'Sur mesure',
    ],
    capacity: '10 à 50 personnes',
    image: '/framboise-et-ceatera-lac-sainte-croix-concert-surfcenter.jpg',
    alt: 'Fête privée au Surf Center — lac de Sainte-Croix',
  },
  {
    title: 'Concert & Soirée privée',
    description: 'Privatisez notre scène pour un concert privé au bord du lac. Sonorisation, éclairage et restauration disponibles.',
    features: [
      'Scène avec vue lac',
      'Sonorisation & lumières',
      'Buffet ou service traiteur',
      'Coucher de soleil garanti',
      'Sur devis',
    ],
    capacity: '30 à 200 personnes',
    image: '/concert-joulik-lac-sainte-croix-surfcenter.jpg',
    alt: 'Concert privé au Surf Center — lac de Sainte-Croix',
  },
];
