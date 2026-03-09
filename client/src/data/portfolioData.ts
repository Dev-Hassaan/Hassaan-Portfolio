import { 
  SiReact, SiJavascript, SiPhp, SiLaravel, 
  SiMysql, SiGit, SiGithub, SiTailwindcss, SiBootstrap, SiPython
} from 'react-icons/si';

export const portfolioData = {
  hero: {
    greeting: "Hi, I'm",
    name: "Hassaan Arshad",
    role: "Frontend Developer | PlayCanvas Developer | Interactive Web Experience Builder",
    description: "I build modern frontend experiences, interactive configurators, and responsive user interfaces that connect design, logic, and real-time interaction. Skilled in React, JavaScript, and frontend-to-3D integration.",
  },
  about: {
    paragraphs: [
      "I'm a frontend developer with hands-on experience building product configurators and integrating PlayCanvas 3D scenes into web applications. My work focuses on clean UI integration, responsive layouts, interactive controls, and practical user experience improvements.",
      "Currently at Darul Solutions, I build interactive web experiences and product configurators. I've also worked at Aexus Studios on similar projects. Beyond professional work, I completed ADSE Prime 2.0, a comprehensive program covering frontend development, backend systems, databases, mobile development with Flutter, and AI foundations.",
      "This cross-disciplinary learning has given me a well-rounded understanding of digital product development, enabling me to collaborate effectively across different technical domains and deliver complete solutions."
    ],
    stats: [
      { label: "Current Role", value: "Frontend Developer" },
      { label: "Focus", value: "Interactive Web" },
      { label: "Location", value: "Karachi, Pakistan" },
      { label: "Status", value: "Always Learning" },
    ]
  },
  experience: [
    {
      id: 1,
      role: "Frontend & PlayCanvas Developer",
      company: "Darul Solutions",
      duration: "2023 - Present",
      description: "Build interactive product configurators and integrate PlayCanvas 3D scenes into web applications using postMessage and frontend communication. Develop dynamic UI controls for 3D interactions and responsive frontend experiences.",
      skills: ["React", "JavaScript", "PlayCanvas", "Responsive Design", "UI/UX", "Product Configurators"]
    },
    {
      id: 2,
      role: "Frontend & PlayCanvas Developer",
      company: "Aexus Studios",
      duration: "2025 - 1 Month",
      description: "Worked on product configurator projects, assisted with PlayCanvas and frontend integration, and supported interactive UI implementation for client deliverables.",
      skills: ["Frontend Development", "PlayCanvas Integration", "Product UI", "Interactive Components"]
    }
  ],
  education: [
    {
      id: 1,
      degree: "ADSE Diploma (AI + Flutter Track)",
      school: "Aptech",
      duration: "2023 - 2026",
      description: "Comprehensive program covering frontend development, backend systems (.NET, Laravel), databases, mobile app development with Flutter, and AI/ML foundations."
    },
    {
      id: 2,
      degree: "Intermediate",
      school: "Aptech",
      duration: "2026 - Present",
      description: "Advanced studies and specialization in emerging technologies."
    },
    {
      id: 3,
      degree: "Matriculation",
      school: "Strong Base Academy",
      duration: "2022 - 2023",
      description: "Strong foundational education with focus on STEM subjects."
    }
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
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
  ],
  learningJourney: {
    title: "ADSE Prime 2.0 - AI + Flutter Track",
    semesters: [
      {
        id: 1,
        title: "Programming & Web Basics",
        topics: ["Computer Fundamentals", "Logic Building", "HTML5 & CSS3", "JavaScript (Core + ES6)", "Bootstrap / Responsive UI", "UI/UX Basics"]
      },
      {
        id: 2,
        title: "Database & .NET",
        topics: ["SQL Server", "Database Design", "C# Programming", "OOP Concepts", "ASP.NET MVC / .NET Core", "Web API Basics", "Azure Fundamentals"]
      },
      {
        id: 3,
        title: "Open Source & Backend",
        topics: ["Git & GitHub", "MySQL", "PHP", "Laravel Framework", "WordPress (CMS)", "Web Security Basics", "SEO Basics"]
      },
      {
        id: 4,
        title: "Mobile App Development",
        topics: ["Dart Programming", "OOP in Dart", "Flutter Widgets", "State Management", "REST API Integration", "Firebase Basics", "Cross-Platform App Development"]
      },
      {
        id: 5,
        title: "AI Foundations",
        topics: ["Advanced Python", "NumPy", "Pandas", "Data Visualization", "Introduction to AI", "Machine Learning Basics", "Supervised & Unsupervised Learning"]
      },
      {
        id: 6,
        title: "Applied AI & Deep Learning",
        topics: ["Advanced ML Algorithms", "Decision Trees", "Random Forest", "SVM", "Neural Networks", "Deep Learning", "TensorFlow / PyTorch", "NLP Fundamentals"]
      }
    ]
  },
  contact: {
    email: "syedhassaan720@gmail.com",
    phone: "03193431103",
    location: "Karachi, Pakistan",
    links: [
      { name: "GitHub", url: "https://github.com/Dev-Hassaan" }
    ]
  }
};
