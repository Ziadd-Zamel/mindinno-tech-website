export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  textColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Robotics & artificial intelligence",
    description:
      "Cursus volutpat pharetra vel in. Felis ut nulla dui nec, vulputate viverra sit eget vel. Convallis diam nunc, vitae, orci, nibh quam tristique pulvinar. In semper etiam aliquam molestie arcu. Nullam id sed tempor, volutpat blandit urna sagittis, commodo vestibulum. Adipiscing dictumst nunc enim massa.",
    image: "/assets/case-1.png",
    bgColor: "bg-main",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Toothbrush from natural eco materials",
    description:
      "Rutrum diam euismod nec cursus velit dolor arcu ut. Lacus, diam non vitae nunc arcu leo. Nisl nulla pellentesque fames posuere fermentum odio fusce nunc tellus. Consectetur elit, at consequat non auctor nam at. Volutpat malesuada lorem turpis praesent condimentum potenti enim sed semper. Enim justo aliquam.",
    image: "/assets/case-2.png",
    bgColor: "bg-[#448C74]",
    textColor: "text-main",
  },
];
