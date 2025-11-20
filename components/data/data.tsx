import Link from "next/link";

export const NavbarItems = [
  {
    id: 1,
    name: "home",
    link: "/",
  },
  {
    id: 2,
    name: "about us",
    link: "/about-us",
  },
  {
    id: 3,
    name: "services",
    link: "/services",
  },
  {
    id: 4,
    name: "contact us",
    link: "/contact-us",
  },
];

export const ClassesData = [
  {
    id: 3,
    title: "Hatha Yoga",
    description:
      "Perfect for yoga beginners, focusing on alignment and breathing trials.",
    image: "/Images/classe__1.png",
    style: { backgroundColor: "var(--color-primary)" },
  },

  {
    id: 2,
    title: "Vinyasa Flow",
    description:
      "Dynamic yoga sequences to improve your flexibility and strength for intermediate.",
    image: "/Images/classe__2.png",
    style: { backgroundColor: "var(--color-thirdary)" },
  },
  {
    id: 1,
    title: "Yin Yoga",
    description:
      "Deep stretches to release tension and relax the mind for every yoga enthusiasts.",
    image: "/Images/classe__3.png",
    style: { backgroundColor: "var(--color-fourthary)" },
  },
];

export const PlansData = [
  {
    title: "One Class",
    price: "19.00",
    features: [
      "Flexible class scheduling on your own terms",
      "Experience different yoga styles with each visit",
      "No commitment fee, perfect for newcomers",
      "Access to special yoga workshops and events",
    ],
    bg: "from-blue-50 to-white",
    buttonBg: "bg-primary text-white",
  },
  {
    title: "Monthly Membership",
    price: "99.00",
    features: [
      "Attend unlimited yoga classes you need",
      "Secure your spot in popular classes in advance",
      "Be a community member and connect freely",
      "Complimentary access to exclusive workshops",
    ],
    bg: "from-yellow-50 to-white",
    buttonBg: "bg-yellow-100 text-black",
  },
  {
    title: "Annual Pass",
    price: "199.00",
    features: [
      "Substantial savings compared to monthly rates",
      "Commit to your practice with consistency",
      "Access to member-only events and workshops",
      "Bring a friend for monthly complimentary class",
    ],
    bg: "from-red-50 to-white",
    buttonBg: "bg-red-100 text-white",
  },
];

export const FooterData = [
  {
    id: 1,
    title: "Company",
    details: [
      { content: <Link href="/about-us">About Us</Link> },
      { content: <Link href="/contact-us">Contact Us</Link> },
    ],
  },
  {
    id: 2,
    title: "Contact Info",
    details: [
      { content: <p>+231 500 00 00 00</p> },
      { content: <p>example@name.com</p> },
      { content: <p>123 Example St, City, Country</p> },
    ],
  },

  {
    id: 3,
    title: "Clinic Hours",
    details: [
      {
        content: (
          <div className="flex justify-between flex-grow col-span-2">
            <p>Saturday to Thursday</p>
            <p className="text-sm">08:00 - 22:00</p>
          </div>
        ),
      },
      {
        content: (
          <div className="flex justify-between col-span-2">
            <p>Saturday</p> <p className="text-sm">11:00 - 22:00</p>
          </div>
        ),
      },
      {
        content: (
          <div className="flex justify-between col-span-2">
            <p>Friday </p>
            <p className="text-sm">Closed</p>
          </div>
        ),
      },
    ],
  },
];

export const SocialMediaData = [
  {
    id: 1,
    name: "Facebook",
    icon: "/Icons/Facebook.svg",
    link: "",
  },

  {
    id: 2,

    name: "Instagram",
    icon: "/Icons/Instagram.svg",

    link: "",
  },
  {
    id: 3,

    name: "LinkedIn",
    icon: "/Icons/LinkedIn.svg",

    link: "",
  },
];
