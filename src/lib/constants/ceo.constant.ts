export interface Step {
  id: number;
  number: string;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    id: 1,
    number: "01",
    title: "Formulation of the problem",
    description:
      "Find aute irure dolor in reprehenderi voluptate velit esse cillum dolore eu fugiat nulla pariatur am luctus",
  },
  {
    id: 2,
    number: "02",
    title: "Assessment of the current state",
    description:
      "Risus quam quis at euismod vitae dui elementu eu in diam malesuada mattis ut urna integer erat nisi, nibh",
  },
  {
    id: 3,
    number: "03",
    title: "Business plan creation",
    description:
      "A sagittis morbi massa venenatis, egestas viverra ac elit nibh tellus nisi in nec tellus mauris feugiat gravida",
  },
  {
    id: 4,
    number: "04",
    title: "Strategy implementation",
    description:
      "Elementum purus, nisl ipsum sit. Amet sit praesent proin sit cras. Leo sed praesent nunc  vel nec risus",
  },
];

export interface CEOInfo {
  name: string;
  title: string;
  image: string;
  description: string;
}

export const ceoInfo: CEOInfo = {
  name: "Nicolas Black",
  title: "CEO Around Group",
  image: "/assets/ceo.png",
  description:
    "The main task of our organization is to assess the state of your enterprise now and how you can achieve your goals. Self-assessment of current activities and review of processes formulate decisions to achieve the desired outcome.",
};
