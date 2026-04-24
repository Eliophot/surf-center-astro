export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  categoryColor: string;
  image: string;
  imageAlt: string;
  content: string[];
}

export const blogPostsV11: BlogPost[] = [
  {
    slug: '5-criques-secretes-lac-sainte-croix',
    title: '5 criques secrètes du lac de Sainte-Croix',
    excerpt: 'Découvrez les plus belles criques cachées du lac, accessibles uniquement par l\'eau.',
    date: '15 juin 2026',
    readTime: '6 min',
    author: 'Équipe Surf Center',
    category: 'Découverte',
    categoryColor: '#26cfff',
    image: '/location-paddle-bateaux-electriques-lac-sainte-croix-gorges-verdon.jpeg',
    imageAlt: 'Criques secrètes du lac de Sainte-Croix vues depuis un paddle',
    content: [
      'Le lac de Sainte-Croix regorge de trésors cachés. Loin des plages principales, des criques secrètes attendent les aventuriers prêts à pagayer un peu plus loin.',
      'La Crique de l\'Ermite est cachée derrière un promontoire rocheux à 20 minutes en paddle depuis le Surf Center. Eau turquoise irréel, fond de sable blanc, parois calcaires.',
      'L\'Anse des Pins offre une ombre naturelle bienvenue en plein été. L\'eau y est particulièrement claire grâce au fond rocheux.',
      'À l\'entrée des Gorges, la Crique du Verdon est encadrée de falaises vertigineuses. L\'eau y prend une teinte émeraude unique.',
      'La Plage Cachée est accessible uniquement par l\'eau. Vue panoramique sur le plateau de Valensole.',
      'Le Recoin des Falaises, nichée au pied d\'une falaise de 50 mètres, est un amphithéâtre naturel au silence incroyable.',
    ],
  },
  {
    slug: 'guide-debutant-paddle-lac-verdon',
    title: 'Guide débutant : votre premier paddle sur le lac',
    excerpt: 'Tout ce qu\'il faut savoir pour débuter le stand-up paddle sur le lac de Sainte-Croix.',
    date: '8 juin 2026',
    readTime: '8 min',
    author: 'Équipe Surf Center',
    category: 'Guide pratique',
    categoryColor: '#3b82f6',
    image: '/location-paddle-lac-sainte-croix-surfcenter.jpeg',
    imageAlt: 'Débutant en paddle sur le lac de Sainte-Croix',
    content: [
      'Le stand-up paddle est l\'activité nautique la plus accessible du lac de Sainte-Croix. En 10 minutes, vous serez debout sur votre planche.',
      'Au Surf Center, nous proposons des planches gonflables de dernière génération. Larges et stables, parfaites pour les débutants.',
      'Commencez à genoux, pagayez doucement, puis levez-vous un pied après l\'autre. Regardez l\'horizon, pas vos pieds !',
      'Le matin entre 9h et 11h, le lac est un miroir. C\'est le moment idéal pour les débutants.',
      'Prenez le cours d\'initiation de 30 minutes offert avec chaque première location.',
    ],
  },
  {
    slug: 'concerts-ete-2026-programme-surfcenter',
    title: 'Concerts été 2026 : la programmation du Surf Center',
    excerpt: 'Jazz, reggae, musique du monde — retrouvez tous les concerts de l\'été au Surf Center.',
    date: '1er juin 2026',
    readTime: '4 min',
    author: 'Équipe Surf Center',
    category: 'Événements',
    categoryColor: '#f77b46',
    image: '/concert-joulik-lac-sainte-croix-surfcenter.jpg',
    imageAlt: 'Concert au coucher de soleil au Surf Center',
    content: [
      'L\'été au Surf Center, c\'est aussi de la musique live face au lac. Chaque semaine, des concerts en plein air au coucher du soleil.',
      'Juillet : Joulik (musique du monde), The Sunset Trio (jazz), Roots Connection (reggae), Soirée DJ électro-chill.',
      'Août : Framboise et Cætera (chanson française), Mediterranean Vibes, Acoustic Lake Session, Grande soirée de clôture.',
      'Tous les concerts débutent à 19h30 et sont en accès libre. Restauration assurée par notre snack-pizzeria.',
    ],
  },
  {
    slug: 'bateau-electrique-gorges-verdon-itineraire',
    title: 'Bateau électrique : l\'itinéraire parfait dans les Gorges',
    excerpt: 'Notre guide complet pour naviguer en bateau électrique jusqu\'aux Gorges du Verdon.',
    date: '25 mai 2026',
    readTime: '7 min',
    author: 'Équipe Surf Center',
    category: 'Itinéraire',
    categoryColor: '#6b21a8',
    image: '/lac-sainte-croix-gorges-verdon-location-bateaux-electriques.jpg',
    imageAlt: 'Bateau électrique dans les Gorges du Verdon',
    content: [
      'Le bateau électrique est le moyen le plus confortable pour atteindre l\'entrée des Gorges du Verdon depuis le Surf Center.',
      'Longez la rive est en admirant les falaises calcaires. L\'eau passe du bleu ciel au turquoise profond.',
      'Le paysage change radicalement à l\'approche des Gorges. Les falaises atteignent 300 mètres. Le silence est total.',
      'Prenez le chemin inverse ou explorez la rive opposée. Arrêtez-vous dans une crique pour une baignade.',
      'Réservez la formule demi-journée. Emportez de l\'eau, crème solaire et un appareil photo.',
    ],
  },
];

export interface BlogPostV8 {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPostsV8: BlogPostV8[] = [
  {
    slug: 'top-5-activites-lac-sainte-croix',
    title: 'Top 5 des activités nautiques au lac de Sainte-Croix',
    excerpt: 'Paddle, bateau électrique, pédalo… Découvrez notre sélection des meilleures activités pour profiter du lac cet été.',
    image: '/location-paddle-bateaux-electriques-lac-sainte-croix-gorges-verdon.jpeg',
    date: '15 avril 2026',
    readTime: '5 min',
    category: 'Guide',
    content: `
      <p>Le lac de Sainte-Croix, avec ses eaux turquoise et son cadre spectaculaire entre les Gorges du Verdon, est le terrain de jeu idéal pour les amateurs d'activités nautiques. Voici notre sélection des 5 meilleures activités à essayer cet été.</p>

      <h2>1. Bateau électrique — L'incontournable</h2>
      <p>Naviguer sans permis sur les eaux cristallines du lac, c'est possible avec nos bateaux électriques. Silencieux et écologiques, ils accueillent jusqu'à 7 personnes pour une balade inoubliable. Explorez les criques secrètes, longez les falaises et profitez d'un moment de pur bonheur. Dès 55€/h.</p>

      <h2>2. Stand-up Paddle — Le must</h2>
      <p>Debout sur l'eau, vous profitez d'une vue imprenable sur les Gorges du Verdon. Le paddle est accessible dès le premier essai et offre une expérience unique entre sport et contemplation. Notre conseil : essayez la session au lever du soleil. Dès 15€/h.</p>

      <h2>3. Pédalo — En famille</h2>
      <p>Le pédalo reste l'activité familiale par excellence. Avec toboggan intégré, il fait le bonheur des petits comme des grands. Parcourez les criques à votre rythme. Dès 15€/h.</p>

      <h2>4. Canoë-Kayak — L'aventure</h2>
      <p>Pour les plus sportifs, le canoë permet d'atteindre des endroits inaccessibles en bateau. Grottes, criques étroites, pieds des falaises — l'aventure totale. Dès 10€/h.</p>

      <h2>5. Planche à voile — L'adrénaline</h2>
      <p>Le lac offre des conditions de vent exceptionnelles. Avec un vent thermique régulier l'après-midi, c'est le spot idéal pour la planche à voile. Dès 20€/h.</p>

      <h2>En résumé</h2>
      <p>Quelle que soit votre envie — détente en famille, aventure sportive ou simple contemplation — le lac de Sainte-Croix a l'activité qu'il vous faut. Réservez en ligne pour garantir votre créneau, surtout en juillet-août !</p>
    `,
  },
  {
    slug: 'preparer-journee-gorges-verdon',
    title: 'Comment préparer sa journée dans les Gorges du Verdon',
    excerpt: 'Tout ce qu\'il faut savoir avant de venir : horaires, équipement, astuces pour éviter la foule et profiter au maximum.',
    image: '/lac-sainte-croix-gorges-verdon-location-bateaux-electriques.jpg',
    date: '8 avril 2026',
    readTime: '7 min',
    category: 'Conseils',
    content: `
      <p>Une journée dans les Gorges du Verdon, ça se prépare. Voici nos meilleurs conseils pour profiter au maximum de votre visite au lac de Sainte-Croix.</p>

      <h2>Quand venir ?</h2>
      <p>La saison s'étend d'avril à octobre. Pour éviter la foule, privilégiez le matin (avant 10h) ou la fin d'après-midi. Les mois de juin et septembre offrent un excellent compromis entre météo et fréquentation.</p>

      <h2>Que faut-il apporter ?</h2>
      <p>Crème solaire biodégradable (obligatoire pour protéger le lac), chapeau, lunettes de soleil, maillot de bain, serviette et chaussures d'eau. Nous fournissons tout le matériel nautique et les gilets de sauvetage.</p>

      <h2>Où se garer ?</h2>
      <p>Le parking du Surf Center est gratuit et accessible facilement. En haute saison, arrivez avant 10h pour être sûr d'avoir une place à proximité.</p>

      <h2>Comment réserver ?</h2>
      <p>Réservez en ligne pour garantir votre créneau. Paiement sécurisé, annulation gratuite jusqu'à 24h avant. Vous pouvez aussi nous appeler au 04 92 77 14 50.</p>

      <h2>Se restaurer sur place</h2>
      <p>Notre snack-pizzeria propose pizzas, salades et boissons fraîches avec vue sur le lac. Idéal pour une pause déjeuner entre deux activités !</p>
    `,
  },
  {
    slug: 'bateau-electrique-guide-debutant',
    title: 'Bateau électrique : le guide complet pour débutants',
    excerpt: 'Pas besoin de permis ! On vous explique tout sur la navigation en bateau électrique sur le lac.',
    image: '/location-bateau-electrique-lac-sainte-croix-surfcenter.jpeg',
    date: '1er avril 2026',
    readTime: '6 min',
    category: 'Tutoriel',
    content: `
      <p>Le bateau électrique est l'activité phare du lac de Sainte-Croix, et pour cause : aucun permis n'est requis, c'est silencieux, écologique et accessible à tous. Voici tout ce qu'il faut savoir.</p>

      <h2>Aucun permis nécessaire</h2>
      <p>Nos bateaux électriques sont limités à 6 CV et ne nécessitent aucun permis. Après un bref briefing de 5 minutes, vous êtes autonome sur le lac.</p>

      <h2>Combien de personnes ?</h2>
      <p>Nos bateaux accueillent jusqu'à 7 personnes, dont les enfants. Parfait pour une sortie en famille ou entre amis.</p>

      <h2>Quels parcours ?</h2>
      <p>Nous vous remettons une carte du lac avec nos parcours recommandés. La boucle des criques (1h30) est idéale pour une première sortie. Les plus aventuriers peuvent rallier l'entrée des Gorges du Verdon (2h).</p>

      <h2>Conseils de navigation</h2>
      <p>Restez à droite dans les passages étroits, respectez les zones de baignade, et n'oubliez pas la crème solaire ! Le soleil tape fort sur l'eau, même par temps couvert.</p>

      <h2>Tarifs</h2>
      <p>À partir de 55€/h. Des réductions sont disponibles pour les demi-journées et journées complètes. Réservez en ligne pour garantir votre créneau.</p>
    `,
  },
  {
    slug: 'paddle-coucher-soleil-verdon',
    title: 'Paddle au coucher du soleil : une expérience magique',
    excerpt: 'Le lac se transforme à la golden hour. Récit d\'une session paddle inoubliable face aux falaises du Verdon.',
    image: '/location-paddle-lac-sainte-croix-surfcenter.jpeg',
    date: '25 mars 2026',
    readTime: '4 min',
    category: 'Récit',
    content: `
      <p>Il est 19h. Le lac de Sainte-Croix se pare de reflets dorés. Les falaises des Gorges du Verdon prennent une teinte orangée. C'est l'heure de la session paddle la plus magique de l'été.</p>

      <h2>Le calme absolu</h2>
      <p>En fin de journée, le lac est d'un calme absolu. Les bateaux ont rejoint le port, les familles plient leurs serviettes. Il ne reste que le silence, l'eau et vous.</p>

      <h2>Une lumière irréelle</h2>
      <p>La golden hour au Verdon, c'est quelque chose de spécial. La lumière rasante transforme chaque coup de pagaie en une peinture vivante. Les couleurs changent de minute en minute.</p>

      <h2>Notre parcours recommandé</h2>
      <p>Départ depuis la plage du Surf Center, direction les criques côté ouest. La lumière y est spectaculaire en fin de journée. Comptez 1h30 aller-retour pour un moment inoubliable.</p>

      <h2>Infos pratiques</h2>
      <p>Sessions sunset disponibles de juin à septembre. Réservez en ligne, le nombre de planches est limité pour préserver l'expérience. Dès 15€/h.</p>
    `,
  },
];

export interface BlogPostV7 {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  date: string;
  category: string;
  content: string;
}

export const blogPostsV7: BlogPostV7[] = [
  {
    slug: 'top-5-activites-lac-sainte-croix',
    title: 'Top 5 des activités nautiques au lac de Sainte-Croix',
    excerpt: 'Paddle, bateau électrique, canoë… découvrez les incontournables pour une journée parfaite sur le plus beau lac du Verdon.',
    image: '/location-paddle-bateaux-electriques-lac-sainte-croix-gorges-verdon.jpeg',
    alt: 'Activités nautiques sur le lac de Sainte-Croix',
    date: '2026-04-15',
    category: 'Activités',
    content: `
      <p>Le lac de Sainte-Croix, joyau turquoise niché au pied des Gorges du Verdon, offre un terrain de jeu exceptionnel pour les amoureux d'activités nautiques. Au Surf Center, nous proposons cinq activités phares qui ont chacune leur personnalité.</p>

      <h2>1. Le bateau électrique — la liberté sans permis</h2>
      <p>Nos bateaux électriques silencieux accueillent jusqu'à 7 personnes et ne nécessitent aucun permis. Glissez sur les eaux turquoise, explorez les criques secrètes et approchez les falaises des Gorges du Verdon. Le briefing sécurité dure 5 minutes, et vous voilà partis pour une aventure en famille ou entre amis.</p>

      <h2>2. Le stand-up paddle — entre sport et contemplation</h2>
      <p>Debout sur une eau cristalline, le paddle offre une perspective unique sur le lac. Accessible dès la première fois, c'est l'activité parfaite pour ceux qui cherchent un mélange de sport doux et de découverte. Nos planches gonflables ultra-stables facilitent l'apprentissage.</p>

      <h2>3. Le pédalo — l'incontournable familial</h2>
      <p>Avec toboggan intégré et pare-soleil, nos pédalos sont taillés pour les journées en famille. Les enfants adorent, les parents aussi. Direction les criques cachées côté est pour une baignade dans une eau à 24°C en plein été.</p>

      <h2>4. Le canoë-kayak — l'aventure au ras de l'eau</h2>
      <p>Léger, maniable, le canoë vous emmène là où les bateaux ne vont pas : grottes, pieds de falaises, criques étroites. En solo ou en duo, c'est l'activité la plus immersive du lac. Les parcours balisés vous guident vers les plus beaux spots.</p>

      <h2>5. La planche à voile — adrénaline garantie</h2>
      <p>Le vent thermique régulier de l'après-midi fait du lac de Sainte-Croix un spot de windsurf réputé. Nos moniteurs diplômés vous accompagnent de l'initiation au perfectionnement. Eau plate, vent constant — les conditions rêvées pour progresser.</p>

      <h2>Pratique</h2>
      <p>Toutes nos activités sont disponibles à la réservation en ligne ou directement sur place. Gilets de sauvetage, briefing sécurité et carte du lac sont inclus dans chaque location. Et après l'effort, notre snack-pizzeria vous attend avec vue sur le lac.</p>
    `,
  },
  {
    slug: 'gorges-du-verdon-guide-complet',
    title: 'Gorges du Verdon : le guide complet pour votre séjour',
    excerpt: 'Randonnées, baignades, villages perchés — tout ce qu\'il faut savoir pour planifier votre escapade dans le Grand Canyon d\'Europe.',
    image: '/lac-sainte-croix-gorges-verdon-location-bateaux-electriques.jpg',
    alt: 'Vue des Gorges du Verdon depuis le lac de Sainte-Croix',
    date: '2026-03-28',
    category: 'Guide',
    content: `
      <p>Surnommées le « Grand Canyon d'Europe », les Gorges du Verdon s'étendent sur plus de 50 kilomètres avec des falaises atteignant 700 mètres de hauteur. Le lac de Sainte-Croix en est la porte d'entrée — et le Surf Center, votre camp de base idéal.</p>

      <h2>Quand venir ?</h2>
      <p>La saison idéale s'étend de mai à septembre. Juin et septembre offrent un compromis parfait : moins de monde, températures agréables (25-30°C), eau déjà chaude. Juillet-août sont les mois les plus animés avec nos concerts et événements.</p>

      <h2>Les incontournables</h2>
      <p>Le Sentier Blanc-Martel est la randonnée emblématique : 15 km de marche au fond des gorges, entre tunnels et passerelles. Pour une version plus douce, le sentier de l'Imbut offre des vues spectaculaires en 3h. Côté eau, une navigation en bateau électrique jusqu'à l'entrée des gorges est un must.</p>

      <h2>Les villages à découvrir</h2>
      <p>Moustiers-Sainte-Marie, classé parmi les plus beaux villages de France, vaut le détour avec ses faïences et son étoile suspendue. Aiguines, perché face au lac, offre un panorama à couper le souffle. Les Salles-sur-Verdon, village reconstruit dans les années 70, est le point de départ de nos activités.</p>

      <h2>Où manger ?</h2>
      <p>Au Surf Center bien sûr ! Nos pizzas au feu de bois et nos salades fraîches sont préparées chaque jour. La terrasse vue lac est le spot parfait pour une pause gourmande entre deux activités. Autour, vous trouverez des restaurants à Moustiers et Aiguines.</p>

      <h2>Nos conseils pratiques</h2>
      <p>Prévoyez de la crème solaire (l'eau turquoise réverbère fort), des chaussures d'eau pour les criques, et réservez vos activités en avance en haute saison. Le parking du Surf Center est gratuit et spacieux.</p>
    `,
  },
  {
    slug: 'paddle-debutant-conseils',
    title: 'Débuter en paddle : nos 7 conseils pour réussir',
    excerpt: 'Première fois sur un paddle ? Nos moniteurs partagent leurs astuces pour se lever, pagayer et profiter dès la première session.',
    image: '/location-paddle-lac-sainte-croix-surfcenter.jpeg',
    alt: 'Paddle board au lac de Sainte-Croix — conseils débutant',
    date: '2026-03-10',
    category: 'Conseils',
    content: `
      <p>Le stand-up paddle est l'une des activités nautiques les plus accessibles. Sur le lac de Sainte-Croix, les conditions sont idéales pour débuter : eau plate, pas de courant, et une vue qui fait oublier l'effort. Voici nos 7 conseils de moniteurs.</p>

      <h2>1. Commencez à genoux</h2>
      <p>Avant de vous lever, faites quelques coups de pagaie à genoux. Cela vous permet de trouver votre équilibre et de vous familiariser avec la planche. Sur le lac, l'eau est calme — c'est le terrain parfait.</p>

      <h2>2. Regardez l'horizon, pas vos pieds</h2>
      <p>Le secret de l'équilibre en paddle, c'est le regard. Fixez un point à l'horizon et votre corps s'ajuste naturellement. Baisser les yeux sur vos pieds, c'est la chute assurée.</p>

      <h2>3. Les pieds parallèles, écartés largeur d'épaules</h2>
      <p>Placez-vous au centre de la planche, pieds parallèles de chaque côté de la poignée centrale. Genoux légèrement fléchis. Cette position de base est la clé de la stabilité.</p>

      <h2>4. Pagayez avec le corps, pas les bras</h2>
      <p>La pagaie est un levier : utilisez la rotation du buste pour propulser la planche. Vos bras guident, votre corps pousse. Moins de fatigue, plus d'efficacité.</p>

      <h2>5. Choisissez le bon créneau</h2>
      <p>Le matin, le lac de Sainte-Croix est souvent un miroir. C'est le moment idéal pour débuter. L'après-midi, le vent thermique se lève — parfait pour les plus à l'aise, moins pour les débutants.</p>

      <h2>6. N'ayez pas peur de tomber</h2>
      <p>L'eau est à 22-26°C en été. Tomber fait partie de l'apprentissage et c'est franchement agréable. Notre leash de sécurité vous relie à la planche en permanence.</p>

      <h2>7. Prenez un cours</h2>
      <p>Nos moniteurs diplômés proposent des sessions d'initiation d'une heure. En groupe ou en privé, c'est le moyen le plus rapide de maîtriser les bases et de profiter pleinement dès la première sortie.</p>
    `,
  },
  {
    slug: 'concerts-evenements-ete-2026',
    title: 'Concerts & événements : le programme de l\'été 2026',
    excerpt: 'Musique live, soirées coucher de soleil, yoga matinal — découvrez toutes les animations prévues cet été au Surf Center.',
    image: '/concert-surfcenter-lac-sainte-croix.png',
    alt: 'Concert au Surf Center — lac de Sainte-Croix',
    date: '2026-02-20',
    category: 'Événements',
    content: `
      <p>L'été au Surf Center, c'est bien plus que des activités nautiques. Chaque saison, nous accueillons des artistes, organisons des soirées thématiques et proposons des animations pour tous. Voici le programme de l'été 2026.</p>

      <h2>Concerts live — chaque vendredi soir</h2>
      <p>De fin juin à début septembre, le Surf Center se transforme en scène musicale. Folk, reggae, électro acoustique — chaque vendredi, un artiste ou groupe joue face au lac, dans la lumière dorée du coucher de soleil. Entrée libre, buvette et restauration sur place.</p>

      <h2>Yoga sunrise — mardi et jeudi</h2>
      <p>Sarah, notre professeure de yoga certifiée, vous accueille à 7h30 sur la plage pour une session d'une heure. Hatha yoga doux, accessible à tous, avec le lac comme tapis de fond. Pensez à réserver — les places partent vite.</p>

      <h2>Soirées coucher de soleil</h2>
      <p>Le samedi soir en juillet-août, nous organisons des soirées spéciales : DJ set ambient, cocktails, tapas. Le coucher de soleil sur le lac de Sainte-Croix est classé parmi les plus beaux de Provence — venez le vérifier.</p>

      <h2>Initiations gratuites</h2>
      <p>Chaque mercredi matin, nos moniteurs proposent des initiations gratuites au paddle pour les enfants (8-14 ans). 45 minutes d'apprentissage ludique en groupe. Inscription sur place le matin même.</p>

      <h2>Événements privés</h2>
      <p>Le Surf Center est aussi disponible pour vos événements privés : EVJF, anniversaires, team building, concerts privés. Contactez-nous pour un devis sur mesure. Notre équipe s'occupe de tout, de la logistique à la restauration.</p>
    `,
  },
];

export interface BlogPostV2 {
  slug: string;
  title: string;
  date: string;
  dateFormatted: string;
  image: string;
  alt: string;
  category: string;
  readTime: string;
  content: string;
}

export const blogPostsV2: BlogPostV2[] = [
  {
    slug: 'top-5-activites-lac-sainte-croix',
    title: 'Top 5 des activités incontournables au lac de Sainte-Croix',
    date: '2026-04-15',
    dateFormatted: '15 avril 2026',
    image: '/location-paddle-bateaux-electriques-lac-sainte-croix-gorges-verdon.jpeg',
    alt: 'Activités nautiques au lac de Sainte-Croix',
    category: 'Activités',
    readTime: '5 min',
    content: `
      <p>Le lac de Sainte-Croix est l'un des plus beaux lacs de Provence, et le Surf Center est la base idéale pour le découvrir. Voici les cinq activités que nous recommandons à tous nos visiteurs.</p>

      <h2>1. Bateau électrique sans permis</h2>
      <p>Naviguez en toute liberté sur les eaux turquoise du lac à bord de nos bateaux électriques silencieux. Aucun permis n'est nécessaire, et chaque bateau accueille jusqu'à 7 personnes. C'est l'activité préférée des familles : on s'approche des criques secrètes, on longe les falaises calcaires, et on profite d'un panorama exceptionnel sur les Gorges du Verdon.</p>

      <h2>2. Stand-up Paddle</h2>
      <p>Le paddle est l'activité phare du lac. Debout sur votre planche, vous glissez au-dessus d'une eau d'un bleu irréel. C'est à la fois sportif et contemplatif — idéal pour déconnecter. Notre astuce : venez tôt le matin pour une session sunrise, quand le lac est parfaitement calme et la lumière magique.</p>

      <h2>3. Canoë-Kayak</h2>
      <p>Pour les plus aventureux, le canoë permet d'atteindre des endroits inaccessibles en bateau : grottes, criques étroites, pieds des falaises. En solo ou en duo, c'est l'activité d'exploration par excellence. Le parcours vers l'entrée des Gorges du Verdon est particulièrement spectaculaire.</p>

      <h2>4. Pédalo en famille</h2>
      <p>Le pédalo reste un classique indémodable. Stable, amusant (surtout avec le toboggan intégré !), il permet de longer la côte tranquillement. Les enfants adorent, et les parents apprécient la simplicité. Comptez 1 à 2 heures pour une balade complète autour de la plage.</p>

      <h2>5. Planche à voile</h2>
      <p>Le lac de Sainte-Croix offre des conditions de vent exceptionnelles grâce au thermique du Verdon. L'eau est plate, le vent régulier l'après-midi — des conditions parfaites pour s'initier ou progresser. Nos moniteurs diplômés vous accompagnent dès la première session.</p>

      <h2>Conclusion</h2>
      <p>Que vous soyez en famille, en couple ou entre amis, le lac de Sainte-Croix a une activité pour vous. Et au retour, une pizza au feu de bois sur notre terrasse face au lac — la journée parfaite.</p>
    `,
  },
  {
    slug: 'gorges-du-verdon-guide-complet',
    title: 'Gorges du Verdon : le guide complet pour votre séjour',
    date: '2026-03-28',
    dateFormatted: '28 mars 2026',
    image: '/lac-sainte-croix-gorges-verdon-location-bateaux-electriques.jpg',
    alt: 'Gorges du Verdon et lac de Sainte-Croix',
    category: 'Découverte',
    readTime: '7 min',
    content: `
      <p>Les Gorges du Verdon sont souvent surnommées le « Grand Canyon de l'Europe ». Avec leurs falaises vertigineuses, leurs eaux émeraude et leur biodiversité exceptionnelle, elles attirent chaque année des milliers de visiteurs. Voici notre guide complet pour préparer votre séjour.</p>

      <h2>Quand venir ?</h2>
      <p>La saison idéale s'étend d'avril à octobre. Les mois de juin et septembre offrent le meilleur compromis : météo clémente, eaux agréables et fréquentation modérée. Juillet et août sont les mois les plus animés — réservez à l'avance pour les activités nautiques.</p>

      <h2>Comment accéder au lac de Sainte-Croix ?</h2>
      <p>Le Surf Center est situé aux Salles-sur-Verdon, directement sur la plage du lac. Depuis Aix-en-Provence, comptez 1h15 de route. Depuis Nice, environ 2h. Depuis Marseille, 1h30. Un parking gratuit est disponible sur place.</p>

      <h2>Les activités incontournables</h2>
      <p>En plus des activités nautiques au Surf Center (bateaux électriques, paddle, canoë, pédalo), la région offre de nombreuses possibilités : randonnées sur le sentier Martel, escalade sur les falaises, parapente, vélo sur la route des crêtes, et baignade dans les eaux turquoise des criques.</p>

      <h2>Où manger ?</h2>
      <p>Notre snack-pizzeria au Surf Center propose des pizzas artisanales au feu de bois, des salades fraîches et des glaces — le tout avec vue directe sur le lac. Pour un dîner plus élaboré, les villages de Moustiers-Sainte-Marie et Aiguines offrent d'excellentes tables provençales.</p>

      <h2>Hébergement</h2>
      <p>Campings, gîtes, hôtels — les options sont variées autour du lac. Nous recommandons de séjourner aux Salles-sur-Verdon ou à Bauduen pour être au plus près de l'eau. Moustiers-Sainte-Marie est idéal pour les amateurs de villages pittoresques.</p>
    `,
  },
  {
    slug: 'concerts-ete-2026-programme',
    title: 'Concerts été 2026 : la programmation du Surf Center',
    date: '2026-03-10',
    dateFormatted: '10 mars 2026',
    image: '/concert-surfcenter-lac-sainte-croix.png',
    alt: 'Concert au coucher du soleil au Surf Center',
    category: 'Événements',
    readTime: '4 min',
    content: `
      <p>Chaque été, le Surf Center se transforme en scène musicale à ciel ouvert. Pieds dans le sable, face au lac de Sainte-Croix, nos soirées sont devenues un rendez-vous incontournable du Verdon. Découvrez la programmation 2026.</p>

      <h2>Le concept</h2>
      <p>Des concerts acoustiques intimistes, des DJ sets au coucher du soleil, des soirées thématiques — notre programmation mêle artistes locaux et têtes d'affiche dans un cadre naturel exceptionnel. L'entrée est libre pour tous les événements publics.</p>

      <h2>Les temps forts de l'été</h2>
      <p>Cette saison, nous accueillons une dizaine de soirées réparties de juin à septembre. Les vendredis « Sunset Session » proposeront des DJ sets ambient et deep house de 18h au coucher du soleil. Les samedis seront dédiés aux concerts live : folk, reggae, chanson française et musiques du monde.</p>

      <h2>Privatisation</h2>
      <p>Le Surf Center est également disponible pour vos événements privés : anniversaires, EVJF, soirées d'entreprise. Nous disposons d'une sonorisation professionnelle, d'un éclairage scénique et d'une capacité pouvant aller jusqu'à 200 personnes. Contactez-nous pour un devis personnalisé.</p>

      <h2>Informations pratiques</h2>
      <p>Toutes nos soirées débutent en fin d'après-midi. Notre snack-pizzeria reste ouvert pour l'occasion. La programmation détaillée sera publiée sur nos réseaux sociaux au fil de la saison. Suivez-nous sur Instagram pour ne rien manquer.</p>
    `,
  },
  {
    slug: 'bateau-electrique-sans-permis-famille',
    title: 'Bateau électrique sans permis : l\'activité famille par excellence',
    date: '2026-02-22',
    dateFormatted: '22 février 2026',
    image: '/location-bateau-electrique-lac-sainte-croix-surfcenter.jpeg',
    alt: 'Bateau électrique sur le lac de Sainte-Croix',
    category: 'Locations',
    readTime: '5 min',
    content: `
      <p>Si vous cherchez une activité familiale sur le lac de Sainte-Croix, le bateau électrique sans permis est la réponse. Silencieux, facile à manœuvrer, et respectueux de l'environnement, il offre une expérience unique au cœur des Gorges du Verdon.</p>

      <h2>Pourquoi choisir le bateau électrique ?</h2>
      <p>Contrairement aux bateaux thermiques (interdits sur le lac), nos bateaux électriques naviguent en silence total. Vous entendez les oiseaux, le clapotis de l'eau, le vent dans les falaises. C'est une immersion complète dans la nature, sans aucune pollution sonore ou atmosphérique.</p>

      <h2>Accessible à tous</h2>
      <p>Aucun permis n'est requis. Avant chaque départ, notre équipe vous donne un briefing de sécurité et vous explique le fonctionnement du bateau. En 5 minutes, vous êtes autonome sur le lac. Les bateaux accueillent jusqu'à 7 personnes — idéal pour une sortie en famille ou entre amis.</p>

      <h2>Que voir pendant la balade ?</h2>
      <p>Trois parcours s'offrent à vous. La « boucle des criques » (1h30) longe les criques sauvages — parfait avec des enfants. « L'entrée des Gorges » (2h) vous emmène jusqu'aux falaises spectaculaires du Verdon. La « traversée complète » (demi-journée) permet de pique-niquer sur une crique isolée.</p>

      <h2>Équipements inclus</h2>
      <p>Chaque bateau est équipé d'un bimini (pare-soleil), de gilets de sauvetage pour adultes et enfants, et d'une carte du lac. Nous fournissons également un bidon étanche pour protéger vos affaires. Le moteur électrique offre une autonomie largement suffisante pour chaque formule.</p>

      <h2>Tarifs et réservation</h2>
      <p>La location démarre à 55€/heure. Des formules 2h et demi-journée sont disponibles à tarif préférentiel. Nous recommandons de réserver en ligne en haute saison (juillet-août) pour garantir votre créneau. Hors saison, la réservation sur place est généralement possible.</p>
    `,
  },
];
