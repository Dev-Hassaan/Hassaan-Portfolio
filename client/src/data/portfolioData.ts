import {
  SiReact, SiJavascript, SiPhp, SiLaravel,
  SiMysql, SiGit, SiGithub, SiTailwindcss, SiBootstrap, SiPython
} from 'react-icons/si';

export const portfolioData = {
  hero: {
    greeting: "Hi, I'm",
    name: "Hassaan Arshad",
    role: "Frontend & PlayCanvas Developer",
    tagline: "Building interactive web experiences that feel alive.",
    description:
      "I craft modern frontend interfaces, interactive 3D configurators, and responsive UIs that blend design precision with real-time performance. Passionate about React, PlayCanvas, and pushing what the browser can do.",
    location: "Karachi, Pakistan",
    available: true,
  },
  about: {
    paragraphs: [
      "I'm a frontend developer with hands-on experience building product configurators and integrating PlayCanvas 3D scenes into web applications. My work focuses on clean UI integration, responsive layouts, interactive controls, and practical user experience improvements.",
      "At Darul Solutions, I've shipped interactive configurators and 3D-driven product experiences. At Aexus Studios, I worked on similar creative-tech deliverables. Beyond client work, I completed ADSE Prime 2.0 — covering frontend, backend, databases, mobile (Flutter), and AI fundamentals.",
      "This cross-stack foundation helps me understand the full picture and collaborate across technical domains — ultimately delivering products that are polished from UI to infrastructure.",
    ],
    stats: [
      { label: "Current Role", value: "Frontend Dev" },
      { label: "Focus Area", value: "Interactive 3D" },
      { label: "Location", value: "Karachi, PK" },
      { label: "Status", value: "Open to Work" },
    ],
  },
  experience: [
    {
      id: 1,
      role: "Frontend & PlayCanvas Developer",
      company: "Darul Solutions",
      duration: "2023 – Present",
      description:
        "Built interactive product configurators and integrated PlayCanvas 3D engines into web frontends via postMessage API. Developed dynamic UI controls for real-time 3D interactions and delivered responsive frontend experiences for international clients.",
      skills: ["React", "JavaScript", "PlayCanvas", "Responsive Design", "Product Configurators", "REST API"],
    },
    {
      id: 2,
      role: "Frontend & PlayCanvas Developer",
      company: "Aexus Studios",
      duration: "Early 2025 · Contract",
      description:
        "Worked on product configurator projects, assisted with PlayCanvas and frontend integration, and supported interactive UI implementation for client deliverables within a fast-moving creative-tech studio environment.",
      skills: ["Frontend Development", "PlayCanvas Integration", "Product UI", "Interactive Components"],
    },
  ],
  education: [
    {
      id: 1,
      degree: "ADSE Diploma — AI + Flutter Track",
      school: "Aptech",
      duration: "2023 – 2026",
      description:
        "Comprehensive program covering frontend development, backend systems (.NET, Laravel), databases, mobile app development with Flutter, and AI/ML foundations. Graduated with distinction.",
    },
    {
      id: 2,
      degree: "Intermediate (Ongoing)",
      school: "Aptech",
      duration: "2026 – Present",
      description:
        "Advanced studies and specialization in emerging technologies and applied computing.",
    },
    {
      id: 3,
      degree: "Matriculation",
      school: "Strong Base Academy",
      duration: "2022 – 2023",
      description:
        "Strong foundational education with focus on STEM subjects and analytical reasoning.",
    },
  ],
  skills: [
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "MySQL", icon: SiMysql, color: "#00758F" },
    { name: "Git", icon: SiGit, color: "#F05033" },
    { name: "GitHub", icon: SiGithub, color: "#e2e8f0" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
  ],
  additionalSkills: [
    { category: "Frontend", items: ["HTML5", "CSS3", "PlayCanvas 3D", "AOS Animations", "Framer Motion", "Responsive Design"] },
    { category: "Backend & DB", items: ["ASP.NET", "C#", "SQL Server", "WordPress", "Firebase", "REST APIs"] },
    { category: "Mobile & AI", items: ["Flutter", "Dart", "NumPy", "Pandas", "Machine Learning", "TensorFlow"] },
    { category: "Tools & Workflow", items: ["VS Code", "Figma", "Postman", "Azure Basics", "SEO Basics", "Web Security"] },
  ],
  learningJourney: {
    title: "ADSE Prime 2.0 — AI + Flutter Track",
    semesters: [
      {
        id: 1,
        title: "Programming & Web Basics",
        topics: ["Computer Fundamentals", "Logic Building", "HTML5 & CSS3", "JavaScript (ES6+)", "Bootstrap", "UI/UX Basics"],
      },
      {
        id: 2,
        title: "Database & .NET",
        topics: ["SQL Server", "Database Design", "C# & OOP", "ASP.NET MVC", "Web API", "Azure Fundamentals"],
      },
      {
        id: 3,
        title: "Open Source & Backend",
        topics: ["Git & GitHub", "MySQL", "PHP", "Laravel", "WordPress", "SEO & Security"],
      },
      {
        id: 4,
        title: "Mobile App Development",
        topics: ["Dart", "Flutter Widgets", "State Management", "REST API Integration", "Firebase", "Cross-Platform Apps"],
      },
      {
        id: 5,
        title: "AI Foundations",
        topics: ["Advanced Python", "NumPy", "Pandas", "Data Visualization", "Intro to AI", "ML Basics"],
      },
      {
        id: 6,
        title: "Applied AI & Deep Learning",
        topics: ["ML Algorithms", "Decision Trees", "Neural Networks", "Deep Learning", "TensorFlow / PyTorch", "NLP Fundamentals"],
      },
    ],
  },
  contact: {
    email: "syedhassaan720@gmail.com",
    phone: "+92 319 3431103",
    location: "Karachi, Pakistan",
    github: "https://github.com/Dev-Hassaan",
    githubHandle: "Dev-Hassaan",
  },
};
