import industryImg from "../../src/assets/industry.jpg";
import scheduleImg from "../../src/assets/schedule.jpg";
import projectsImg from ".././assets/project.jpg";
import webImg from ".././assets/web.jpg";
import cadImg from ".././assets/cad.jpg";
import graphicsImg from ".././assets/graphics.jpg";

export const navItems = [
  { label: "Home", link: "/" },
  {
    label: "Courses",
    link: "/courses",
    children: [
      { label: "CAD", link: "/courses/cad" },
      { label: "Graphics Design", link: "/courses/graphics-design" },
      { label: "Web Development", link: "/courses/web-development" },
      { label: "More Coming Soon", link: "/courses/more" },
    ],
  },
  { label: "About Us", link: "/about" },
  { label: "Blog", link: "/blog" },
  { label: "Pricing", link: "/pricing" },
  { label: "Contact", link: "/contact" },
];

export const about = [
  {
    title: "Learn from Industry Experts",
    link: "/about",
    description:
      "Our instructors are seasoned professionals with years of experience.",
    image: industryImg,
  },
  {
    title: "Flexible Learning to Fit Your Schedule",
    link: "/about",
    description: "Choose from online classes that suit your lifestyle.",
    image: scheduleImg,
  },
  {
    title: "Engaging Project-Based Learning Approach",
    link: "/about",
    description: "Work on real projects that enhance your portfolio.",
    image: projectsImg,
  },
];

export const courses = [
  {
    link: "/courses/cad",
    id: 1,
    title: "Design the innovative future with CAD",
    image: cadImg,
    description:
      "Unleash your inner architect and engineer.Master the precise tools needed to build tomorrow’s world one detail at a time ",
  },
  {
    link: "/courses/graphics-design",
    id: 2,
    title: "Visualize Impactful Stories Through Graphics Designs",
    image: graphicsImg,
    description:
      "Transform abstract ideas into captivating and communicative visuals. Discover the art of grabbing attention with compelling and thoughtful designs",
  },
  {
    link: "/courses/web-development",
    id: 3,
    title: "Code your Digital Vision for the Web",
    image: webImg,
    description:
      "Dive into the digital realm. Learn to craft stunning websites and powerful applications that shape the entire online experience.",
  },
];

export const reviews = [
  {
    id: 1,
    name: "Jane Doe",
    rating: 5,
    comment: "Amazing service! I highly recommend it.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    rating: 4,
    comment: "Great experience, but delivery was a bit slow.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    rating: 5,
    comment: "Absolutely loved it! Will buy again.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    rating: 5,
    comment: "Top-notch quality and friendly support team!",
    avatar: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 5,
    name: "Sophia Davis",
    rating: 4,
    comment: "Very satisfied! Could improve packaging a bit.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 6,
    name: "David Wilson",
    rating: 5,
    comment: "Excellent product and fast shipping. Loved it!",
    avatar: "https://randomuser.me/api/portraits/men/70.jpg",
  },
  {
    id: 7,
    name: "Olivia Martinez",
    rating: 5,
    comment: "This exceeded my expectations. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    id: 8,
    name: "James Taylor",
    rating: 3,
    comment: "Good product but I expected better packaging.",
    avatar: "https://randomuser.me/api/portraits/men/74.jpg",
  },
  {
    id: 9,
    name: "Ava Anderson",
    rating: 5,
    comment: "Fantastic experience. Will definitely come back.",
    avatar: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    id: 10,
    name: "William Thomas",
    rating: 4,
    comment: "Pretty good overall. Customer support was helpful.",
    avatar: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const registerFormControls = [
  {
    name: "name",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    componentType: "input",
    type: "password",
  },
];
