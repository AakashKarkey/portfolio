// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import reactnativeLogo from "./assets/tech_logo/reactnative.png"; // ✅ Fixed name
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import canvaLogo from "./assets/tech_logo/canva.png";

// Experience Section Logo's
import newtonschoolLogo from "./assets/company_logo/newtonschool_logo.png";
import cozywearsLogo from "./assets/company_logo/cozy.png";
import zionLogo from "./assets/company_logo/zion.jfif";

// Education Section Logo's
import glaLogo from "./assets/education_logo/gla_logo.png";
import bsaLogo from "./assets/education_logo/bsa_logo.png";
import vpsLogo from "./assets/education_logo/vps_logo.png";

// Project Section Logo's
import img1 from "./assets/project_logo/1.png";
import img2 from "./assets/project_logo/2.png";
import img3 from "./assets/project_logo/3.png";
import img4 from "./assets/project_logo/4.png";

//Achievements Section Logo's
import ach1 from "./assets/achievements_logo/1.png";
import ach2 from "./assets/achievements_logo/2.png";
import ach3 from "./assets/achievements_logo/3.png";
import ach4 from "./assets/achievements_logo/4.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "React Native", logo: reactnativeLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
      { name: "Canva", logo: canvaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: zionLogo,
    role: "React Native Developer Intern",
    company: "Zion Tech Firm Pvt. Ltd.",
    date: "Jul 2025 - Present",
    desc: "Building and maintaining cross-platform mobile applications using React Native, ensuring smooth performance, responsive design, and excellent user experience. Collaborating with designers, backend developers, and QA teams to deliver high-quality features on time. Integrating APIs, managing state with Redux Toolkit, and optimizing app performance for Android and iOS platforms",
    skills: [
      "React Native",
      "Redux Toolkit",
      "JavaScript (ES6+)",
      "TypeScript",
      "RESTful APIs",
      "React Navigation",
      "Firebase",
      "Git & GitHub",
      "Unit Testing (Jest, React Native Testing Library)",
    ],
  },
  {
    id: 3,
    company: "Cozy Wears",
    img: cozywearsLogo,
    role: "Founder",
    date: "April 205 - Present",
    desc: "Founded and built CozyWears, a modern clothing brand focused on premium streetwear and comfort. Managed branding, web development, and social media strategy.",
    skills: [
      "Entrepreneurship",
      "Branding",
      "E-commerce",
      "React",
      "Tailwind",
      "Marketing",
    ],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Nobel Intern",
    company: "Nobel Internship Program",
    date: "May 2025 - Present",
    desc: "Participating in the Nobel Internship Program focused on developing leadership, communication, and project management skills. Engaging in workshops on web design, digital marketing, and teamwork to build well-rounded professional capabilities. Collaborating with peers to design impactful community projects while enhancing problem-solving and creative thinking abilities.",
    skills: [
      "Leadership",
      "Web Design",
      "Communication",
      "Project Management",
      "Pitch and Presentation",
      "Teamwork",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: vpsLogo,
    school: "Aryan School of Engineering and Management",
    location: "Mid-Baneshwor, Kathmandu",
    date: "2021 - Present",
    degree: "Bachelor of Information Technology (BIT)",
    affiliation: "Affiliated to Purbanchal University",
    grade: "Ongoing",
    desc: "Currently pursuing a Bachelor of Information Technology (BIT) degree with a focus on software development, data structures, networking, and database management. Actively involved in projects and internships that strengthen practical skills and industry readiness.",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "St. Lawrence College",
    location: "Chabahil, Kathmandu",
    date: "Graduated (2019 - 2021)",
    degree: "High School (Management with Computer Science Major)",
    grade: "3.49 GPA",
    desc: "Completed high secondary education with a focus on management and computer science subjects, building a solid foundation in business concepts and IT fundamentals including basic programming, database concepts, and office applications.",
  },
  {
    id: 2,
    img: glaLogo,
    school: "Bal Sirjanalaya Secondary School",
    location: "Aarubari, Kathmandu",
    date: "Graduated 2075 BS (2019 AD)",
    degree: "Secondary Education (SEE)",
    grade: "3.5 GPA",
    desc: "Successfully completed Secondary Education Examination (SEE) with strong academic performance. Developed interest in computer science and mathematics during this period, laying the groundwork for future IT studies.",
  },
];

export const projects = [
  {
    id: 0,
    title: "Iguide - Guide Booking System",
    description:
      "A MERN stack web application that allows users to find and book local travel guides. Features include user authentication, guide profiles, booking management, and real-time chat to enhance travel planning.",
    image: img1,
    tags: ["MongoDB", "Express.js", "React JS", "Node.js", "REST API"],
    github: "https://github.com/yourgithubusername/iguide",
    webapp: "https://iguide.yourdomain.com",
  },
  {
    id: 1,
    title: "Khana Khajana - Recipe Finder App",
    description:
      "A React Native mobile app that helps users search and discover recipes based on ingredients, cuisine, and dietary preferences. Uses PostgreSQL as backend database and features offline caching and user favorites.",
    image: img2,
    tags: ["React Native", "PostgreSQL", "REST API", "Expo"],
    github: "https://github.com/yourgithubusername/khana-khajana",
    webapp: "",
  },
  {
    id: 2,
    title: "Hotel Management System",
    description:
      "A comprehensive hotel management system built with Java. Manages room bookings, billing, and staff workflows with a user-friendly interface.",
    image: img3,
    tags: ["Java", "MySQL", "Swing", "OOP"],
    github: "https://github.com/yourgithubusername/hotel-management-system",
    webapp: "",
  },
  {
    id: 3,
    title: "UD Down Controller (Microcontroller Project)",
    description:
      "An embedded system project using microcontrollers to control Up-Down counting mechanisms for industrial applications. Implemented using C and interfaced with LCD for real-time display.",
    image: img4,
    tags: ["C", "Microcontroller", "Embedded Systems"],
    github: "https://github.com/yourgithubusername/ud-down-controller",
    webapp: "",
  },
];

export const achievements = [
  {
    id: 1,
    title: "National Hackathon Finalist",
    image: ach1,
    description:
      "Finalist of CodeFest, Nepal's biggest hackathon, representing Bagmati Province with project 'Sahayatri'",
  },
  {
    id: 2,
    title: "IT Mela Winner",
    image: ach2,
    description:
      "Won first position in project competition during IT Mela organized by Aryan School of Engineering and Management.",
  },
  {
    id: 4,
    title: " Winner – House Model Competition by Skill Sewa",
    image: ach4,
    description:
      "Secured first place with a commercial hotel model featuring IoT and Bluetooth-based LED lighting, showcasing smart, energy-efficient design and modern tech integration.",
  },
  {
    id: 3,
    title: "IT Club President",
    image: ach3,
    description:
      "Serving as the President of the IT Club at Aryan School of Engineering and Management, leading training, events, and student development.",
  },
];
