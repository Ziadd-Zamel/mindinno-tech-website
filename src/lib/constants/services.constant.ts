import { Code2, Palette, Rocket } from "lucide-react";

export const SERVICES = [
  {
    icon: Code2,
    titleKey: "items.software_development.title",
    descriptionKey: "items.software_development.description",
  },
  {
    icon: Palette,
    titleKey: "items.ui_ux_design.title",
    descriptionKey: "items.ui_ux_design.description",
  },
  {
    icon: Rocket,
    titleKey: "items.digital_transformation.title",
    descriptionKey: "items.digital_transformation.description",
  },
];

export const CONTAINER = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const ITEM = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};
