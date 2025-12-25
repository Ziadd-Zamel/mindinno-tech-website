export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  position: "top" | "bottom";
}

// Each group represents what shows when a dot is active
export const testimonialGroups: Testimonial[][] = [
  // Group 1 - First dot
  [
    {
      id: 1,
      name: "Jane Cooper",
      role: "Medical Assistant",
      image: "/images/testimonials/jane.jpg",
      content:
        "Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.",
      position: "bottom",
    },
    {
      id: 2,
      name: "Wade Warren",
      role: "President of Sales",
      image: "/images/testimonials/wade.jpg",
      content:
        "Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.",
      position: "bottom",
    },
    {
      id: 3,
      name: "Esther Howard",
      role: "CEO, Slack",
      image: "/images/testimonials/esther.jpg",
      content:
        "Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.",
      position: "bottom",
    },
    {
      id: 4,
      name: "Cameron Williamson",
      role: "Marketing Coordinator",
      image: "/images/testimonials/cameron.jpg",
      content:
        "Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.",
      position: "bottom",
    },
    {
      id: 5,
      name: "Leslie Alexander",
      role: "CEO, Divi",
      image: "/images/testimonials/leslie.jpg",
      content:
        "Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.",
      position: "bottom",
    },
    {
      id: 6,
      name: "Brooklyn Simmons",
      role: "Web Designer",
      image: "/images/testimonials/brooklyn.jpg",
      content:
        "Malesuada at ullamcorper adipiscing lobortis vestibulum. Aliquet lobortis justo arcu ut auctor porttitor amet, tortor. Justo.",
      position: "bottom",
    },
  ],
  // Group 2 - Second dot (add different testimonials)
  [
    {
      id: 7,
      name: "John Doe",
      role: "Product Manager",
      image: "/images/testimonials/john.jpg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      position: "top",
    },
    {
      id: 8,
      name: "Sarah Smith",
      role: "UX Designer",
      image: "/images/testimonials/sarah.jpg",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      position: "top",
    },
    {
      id: 9,
      name: "Mike Johnson",
      role: "Developer",
      image: "/images/testimonials/mike.jpg",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      position: "top",
    },
    {
      id: 10,
      name: "Emma Wilson",
      role: "Brand Strategist",
      image: "/images/testimonials/emma.jpg",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      position: "bottom",
    },
    {
      id: 11,
      name: "David Brown",
      role: "CTO",
      image: "/images/testimonials/david.jpg",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      position: "bottom",
    },
    {
      id: 12,
      name: "Lisa Anderson",
      role: "Marketing Director",
      image: "/images/testimonials/lisa.jpg",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.",
      position: "bottom",
    },
  ],
  // Group 3 - Third dot
  [
    {
      id: 13,
      name: "Robert Taylor",
      role: "Sales Manager",
      image: "/images/testimonials/robert.jpg",
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.",
      position: "top",
    },
    {
      id: 14,
      name: "Jennifer Lee",
      role: "HR Director",
      image: "/images/testimonials/jennifer.jpg",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      position: "top",
    },
    {
      id: 15,
      name: "William Martinez",
      role: "Consultant",
      image: "/images/testimonials/william.jpg",
      content:
        "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore soluta nobis.",
      position: "top",
    },
    {
      id: 16,
      name: "Amanda Garcia",
      role: "Business Analyst",
      image: "/images/testimonials/amanda.jpg",
      content:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.",
      position: "bottom",
    },
    {
      id: 17,
      name: "James Rodriguez",
      role: "Creative Director",
      image: "/images/testimonials/james.jpg",
      content:
        "Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores.",
      position: "bottom",
    },
    {
      id: 18,
      name: "Maria Hernandez",
      role: "Operations Manager",
      image: "/images/testimonials/maria.jpg",
      content:
        "Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
      position: "bottom",
    },
  ],
  // Group 4 - Fourth dot
  [
    {
      id: 19,
      name: "Christopher Lopez",
      role: "CFO",
      image: "/images/testimonials/christopher.jpg",
      content:
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
      position: "top",
    },
    {
      id: 20,
      name: "Jessica White",
      role: "VP Engineering",
      image: "/images/testimonials/jessica.jpg",
      content:
        "Omnis voluptas assumenda est omnis dolor repellendus temporibus autem quibusdam et aut.",
      position: "top",
    },
    {
      id: 21,
      name: "Daniel Harris",
      role: "Architect",
      image: "/images/testimonials/daniel.jpg",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      position: "top",
    },
    {
      id: 22,
      name: "Michelle Clark",
      role: "Lead Developer",
      image: "/images/testimonials/michelle.jpg",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.",
      position: "bottom",
    },
    {
      id: 23,
      name: "Kevin Lewis",
      role: "Senior Consultant",
      image: "/images/testimonials/kevin.jpg",
      content:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci.",
      position: "bottom",
    },
    {
      id: 24,
      name: "Nicole Walker",
      role: "Project Manager",
      image: "/images/testimonials/nicole.jpg",
      content:
        "Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta.",
      position: "bottom",
    },
  ],
];
