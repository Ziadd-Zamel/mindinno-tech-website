import { Megaphone, Globe, Mail, MessageSquare, FileEdit, LucideIcon } from "lucide-react";

export const services: Array<{
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    id: 1,
    icon: Megaphone,
    title: "Advertising communications",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit.",
  },
  {
    id: 2,
    icon: Megaphone,
    title: "Marketing and branding",
    description:
      "Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue.",
  },
  {
    id: 3,
    icon: Globe,
    title: "Web and Internet marketing",
    description:
      "Hac erat leo proin odio est sed sit id felis facilisi integer sed congue neque turpis dictumst sit sed volutpat aliquet tortor non.",
  },
  {
    id: 4,
    icon: Mail,
    title: "Email marketing",
    description:
      "Adipiscing posuere dui, amet, augue nisl dictum justo, enim. Sed neque congue non ac quam ultrices interdum vitae vestibulum.",
  },
  {
    id: 5,
    icon: MessageSquare,
    title: "Working on communication",
    description:
      "Molestie enim tempus egestas a at enim. Velit hendrerit nibh eget porta pretium. Ipsum orci habitasse eget malesuada platea.",
  },
  {
    id: 6,
    icon: FileEdit,
    title: "Business copywriting",
    description:
      "Massa donec quam orci feugiat. Quis iaculis facilisi ornare aenean lorem enim purus in lacus in ullamcorper diam consequat.",
  },
];
