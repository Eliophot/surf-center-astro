export interface Location {
  title: string;
  description: string;
  price: number;
  image: string;
  alt: string;
  tag: string;
}

export interface Review {
  quote: string;
  author: string;
  context: string;
}

export interface MeshLink {
  title: string;
  description: string;
  href: string;
  image: string;
  alt: string;
}

export interface BrandValue {
  title: string;
  text: string;
}

export const locations: Location[] = [
  {
    title: "Planche à voile",
    description: "Adrénaline · Vent du Verdon",
    price: 20,
    image: "/location-planche-a-voile-windsurf-lac-sainte-croix.png",
    alt: "Planche à voile sur le lac de Sainte-Croix",
    tag: "7a524907-97b7-42bd-bfdc-deb401767b21",
  },
  {
    title: "Bateau électrique",
    description: "Sans permis · Jusqu'à 7 pers.",
    price: 55,
    image: "/location-bateau-electrique-lac-sainte-croix-surfcenter.jpeg",
    alt: "Bateau électrique sur le lac de Sainte-Croix",
    tag: "62329049-d954-482c-82a1-faa16321e3bf",
  },
  {
    title: "Pédalo",
    description: "En famille · Criques secrètes",
    price: 15,
    image: "/pedalos_lac_sainte_croix.jpg",
    alt: "Pédalos sur le lac de Sainte-Croix",
    tag: "03a55e88-44ac-4161-ad03-aa857b1d0dc0",
  },
  {
    title: "Paddle board",
    description: "Accessible à tous · Vue garantie",
    price: 15,
    image: "/location-paddle-lac-sainte-croix-surfcenter.jpeg",
    alt: "Paddle board sur le lac de Sainte-Croix",
    tag: "52bf76b6-6f0a-43ff-b0a2-4c1332d5ede5",
  },
  {
    title: "Canoë",
    description: "Exploration · Face aux falaises",
    price: 10,
    image: "/canoe.jpeg",
    alt: "Canoë sur le lac de Sainte-Croix",
    tag: "e57bf5a3-2296-4226-94a8-06295b1415d8",
  },
  {
    title: "Catamaran",
    description: "Exploration · Face aux falaises",
    price: 10,
    image: "/catamaran-lac-sainte-croix-falaises.jpg",
    alt: "Catamaran sur le lac de Sainte-Croix face aux falaises",
    tag: "c47a7a17-4a60-4cba-9b3f-d3b401717172",
  },
];

export const reviews: Review[] = [
  {
    quote:
      "Un cadre magnifique, un accueil au top et des bateaux en très bon état. On a passé une journée incroyable sur le lac avec les enfants.",
    author: "Sophie L.",
    context: "Famille — Août 2025",
  },
  {
    quote:
      "La meilleure base nautique du Verdon. Le paddle au lever du soleil sur le lac de Sainte-Croix, c'est juste magique.",
    author: "Maxime R.",
    context: "Paddle — Juillet 2025",
  },
  {
    quote:
      "Super spot, super équipe. Les pizzas du snack sont excellentes. L'endroit idéal pour une journée complète au lac.",
    author: "Camille & Julien",
    context: "Couple — Septembre 2025",
  },
];

export const meshLinks: MeshLink[] = [
  {
    title: "Nos locations",
    description: "Bateaux, paddle, pédalo, canoë",
    href: "/nos-locations",
    image: "/location-bateau-electrique-lac-sainte-croix-surfcenter.jpeg",
    alt: "Location de bateaux — Surf Center",
  },
  {
    title: "L'esprit Surf Center",
    description: "Notre histoire & nos valeurs",
    href: "/esprit-surf-center",
    image: "/esprit.png",
    alt: "L'esprit Surf Center — lac de Sainte-Croix",
  },
  {
    title: "Restauration",
    description: "Snack-pizzeria face au lac",
    href: "/restauration",
    image: "/drone-snack-pedalo-lac-sainte-croix-surfcenter-salades.jpeg",
    alt: "Restaurant Surf Center",
  },
  {
    title: "Animations",
    description: "Yoga, cours & activités",
    href: "/animations",
    image: "/sarah-cours-yoga-surfcenter-lac-sainte-croix.jpg",
    alt: "Yoga au Surf Center",
  },
  {
    title: "Groupes & Événements",
    description: "Concerts, soirées & privatisation",
    href: "/groupes-evenements",
    image: "/concert-surfcenter-lac-sainte-croix.png",
    alt: "Concert au Surf Center",
  },
];

export const brandValues: BrandValue[] = [
  { title: "Nature", text: "Un lac d'exception, des paysages préservés" },
  { title: "Simplicité", text: "Du bon matériel, un bon accueil" },
  { title: "Convivialité", text: "Chacun trouve ici sa façon de profiter" },
  { title: "Qualité", text: "Bateaux récents, équipe passionnée" },
];
