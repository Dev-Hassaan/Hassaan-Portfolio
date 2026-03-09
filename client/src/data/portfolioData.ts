import { 
  SiTypescript, SiReact, SiNodedotjs, SiPython, SiDocker, SiAmazonwebservices, 
  SiPostgresql, SiTailwindcss, SiGraphql, SiNextdotjs 
} from 'react-icons/si';

export const portfolioData = {
  hero: {
    greeting: "Hi, I'm",
    name: "Alex Sterling",
    role: "Full-Stack Engineer & UI/UX Enthusiast",
    description: "I build exceptional, highly performant, and accessible digital experiences. Crafting beautiful web applications with modern technologies.",
  },
  about: {
    paragraphs: [
      "Hello! I'm Alex, a software engineer based in San Francisco with a passion for building digital services and stuff that lives on the internet.",
      "My journey in web development started back in 2015 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about web fundamentals!",
      "Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, and a huge corporation. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.",
    ],
    stats: [
      { label: "Years Experience", value: "8+" },
      { label: "Projects Completed", value: "50+" },
      { label: "Happy Clients", value: "30+" },
      { label: "Coffee Consumed", value: "∞" },
    ]
  },
  experience: [
    {
      id: 1,
      role: "Senior Frontend Engineer",
      company: "TechNova Solutions",
      duration: "2021 - Present",
      description: "Leading the core frontend team to build and maintain a scalable component library. Migrated legacy monolithic architecture to highly decoupled micro-frontends.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Elevate Digital",
      duration: "2018 - 2021",
      description: "Developed and shipped highly interactive web applications. Architected backend infrastructure using Node.js and PostgreSQL to support 100k+ daily active users.",
      skills: ["Node.js", "PostgreSQL", "React", "AWS"]
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Creative Spark Agency",
      duration: "2015 - 2018",
      description: "Worked closely with designers and project managers to create responsive, pixel-perfect marketing sites and e-commerce platforms.",
      skills: ["HTML/CSS", "JavaScript", "PHP", "WordPress"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "M.S. in Computer Science",
      school: "Stanford University",
      duration: "2013 - 2015",
      description: "Specialized in Human-Computer Interaction and Distributed Systems."
    },
    {
      id: 2,
      degree: "B.S. in Software Engineering",
      school: "University of California, Berkeley",
      duration: "2009 - 2013",
      description: "Graduated with Honors. Led the university web development club."
    }
  ],
  skills: [
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  ]
};
