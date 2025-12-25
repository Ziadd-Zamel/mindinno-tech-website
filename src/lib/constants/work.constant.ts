export interface Industry {
  id: number;
  title: string;
  image: string;
  services: string[];
}

export const industries: Industry[] = [
  {
    id: 1,
    title: "Services",
    image: "/assets/work-placeholder.png",
    services: [
      "Id habitasse dui habitant",
      "Rutrum tempor sit tincidunt",
      "Imperdiet est quis enim facilisis",
    ],
  },
  {
    id: 2,
    title: "Retail",
    image: "/assets/work-placeholder.png",
    services: [
      "Ultrices volutpat sit mattis",
      "Egestas neque arcu duis",
      "Metus magna viverra blandit",
    ],
  },
  {
    id: 3,
    title: "Technology",
    image: "/assets/work-placeholder.png",
    services: [
      "Diam diam nunc monte",
      "Nulla egestas arcu proin sit",
      "Nunc sapien turpis vulputate",
    ],
  },
];
