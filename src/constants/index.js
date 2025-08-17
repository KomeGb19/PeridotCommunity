import {
  team1,
  team2,
  team3,
  team4,
  services1,
  services2,
  services3,
} from "../assets/images";

import { affordable, caregivers, support } from "../assets/icons";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#our-services", label: "Our Sevices" },
  { href: "#contact-us", label: "Contact Us" },
  { href: "#teams", label: "Our Team" },
  {
    href: "mailto:support@peridotcareservices.com",
    label: "support@peridotcareservices.com",
  },
];

export const services = [
  {
    imgURL: services1,
    label: "Rehabilitation Care",
  },
  {
    imgURL: services2,
    label: "Respite Residential Services",
  },
  {
    imgURL: services3,
    label: "Home Health Services",
  },
];

export const aboutUs = [
  {
    imgURL: caregivers,
    label: "Experienced Caregivers",
    subtext:
      "Our team consists of trained and licensed professionals dedicated to delivering high-quality care.",
  },
  {
    imgURL: support,
    label: "24/7 Support Service",
    subtext:
      "We are here when you need us, offering round-the-clock services for your convenience.",
  },
  {
    imgURL: affordable,
    label: "Affordable Care",
    subtext:
      "Quality care doesn’t have to break the bank. Enjoy cost-effective solutions without compromising quality.",
  },
];

export const teamMembers = [
  {
    imgURL: team1,
    label: "Kafayat Agaba",
    position: "CEO",
  },
  {
    imgURL: team2,
    label: "Afusat Showunmi",
    position: "President",
  },
  {
    imgURL: team3,
    label: "LookMan Akadri",
    position: "Administrator",
  },
  /* 	{
		imgURL: team4,
		label: "Sheriff Showunmi",
		position: "COO",
	},
	{
		imgURL: team2,
		label: "Azeez Agaba",
		position: "Vice President",
	}, */
];
