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
    name: "classes",
    link: "/classes",
  },
  {
    id: 4,
    name: "pricing",
    link: "/pricing",
  },
  {
    id: 5,
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
    image: "/Images/classe____1.png",
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
    bg: "bg-secondary",
    buttonBg: "bg-primary text-white",
    circleColor: "#edeef6",
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
    bg: "bg-[#f8f4b1]",
    buttonBg: "bg-white text-black",
    circleColor: "#faf7c4",
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
    bg: "bg-secondary to-white",
    buttonBg: "bg-fourthary text-white",
    circleColor: "#faf1ed",
  },
];

export const ContactData = [
  {
    id: 1,
    title: "phone",
    description: "+231 500 00 00 00",
    icon: "/Icons/phone.svg",
    style: "text-thirdary",
  },

  {
    id: 2,
    title: "Email",
    description: "info@flexflow.com",
    icon: "/Icons/email.svg",
    style: "text-primary",
  },
  {
    id: 3,
    title: "Address",
    description: "123 Example St, City, Country",
    icon: "/Icons/address.svg",
    style: "text-[#F2ED9C]",
  },
  {
    id: 4,
    title: "Support",
    description: "info@8pxlstudio",
    icon: "/Icons/support.svg",
    style: "text-[#77697D]",
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

export const AboutData = [
  {
    id: 1,
    title: "Yoga Rooms",
    icon: "/Icons/rooms.svg",
    description: "25",
  },

  {
    id: 2,
    title: "classes",
    icon: "/Icons/classes.svg",
    description: "5",
  },
  {
    id: 3,
    title: "events",
    icon: "/Icons/events.svg",
    description: "20",
  },
  {
    id: 4,
    title: "Coaches",
    icon: "/Icons/coaches.svg",
    description: "15",
  },
];

export const AppointmentTypeData = [
  { value: "hatha yoga", label: "Hatha Yoga" },
  { value: "vinyasa flow", label: "Vinyasa Flow" },
  { value: "yin yoga", label: "Yin Yoga" },
  { value: "power yoga", label: "Power Yoga" },
  { value: "meditation", label: "Meditation & Breathwork" },
];

export const PreferredInstructorData = [
  { value: "sara bendib", label: "Sara Bendib" },
  { value: "lina hamadi", label: "Lina Hamadi" },
  { value: "youssef kader", label: "Youssef Kader" },
];

export const TimeData = [
  { value: "08:00", label: "08:00 AM" },
  { value: "09:30", label: "09:30 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "14:00", label: "02:00 PM" },
  { value: "16:30", label: "04:30 PM" },
  { value: "18:00", label: "06:00 PM" },
];

export const DateData = [
  { value: "monday", label: "Monday" },
  { value: "tuesday", label: "Tuesday" },
  { value: "wednesday", label: "Wednesday" },
  { value: "thursday", label: "Thursday" },
  { value: "friday", label: "Friday" },
  { value: "saturday", label: "Saturday" },
  { value: "sunday", label: "Sunday" },
];
