import {
    mobile,
    backend,
    creator,
    web,
    typescript,
    reactjs,
    git,
    figma,
    oddity,
    polimi,
    dlm,
    angular,
    arduino,
    dart,
    swift,
    tauri,
    tensorflow,
    cLanguage,
    placeholder
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Microcontrollers Developer",
      icon: backend,
    },
    {
      title: "AI Developer",
      icon: creator,
    },
        {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "Arduino",
      icon: arduino,
    },
    {
      name: "C",
      icon: cLanguage,
    },
    {
      name: "Dart",
      icon: dart,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Tauri",
      icon: tauri,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "Typescript",
      icon: typescript,
    },
  ];
  
  const experiences = [
    {
      title: "Fullstack Software Engineer",
      company_name: "Oddity Tech",
      icon: oddity,
      iconBg: "#f2f3f5",
      date: "Jul 2022 - Present",
      points: [
        "Developed iOS app in SwiftUI, incorporating payment methods, A/B testing, third-service logins, etc.",
        "Collaborated with backend team using GraphQL interface to connect to endpoints to retrieve and update data.",
        "Conducted 7 technical interviews with prospective engineers for the mobile development team.",
        "Presented progress updates to Head of Engineering, Head of Payments, and Head of Data during biweekly meetings.",
      ],
    },
    {
      title: "Computer Science Professor",
      company_name: "I.S. Don Lorenzo Milani",
      icon: dlm,
      iconBg: "#fff",
      date: "Mar 2023 - Jun 2023",
      points: [
        "Taught 6 classes computer science, including subjects as C, Java, Unity, HTML, etc",
        "Managed relationship with parents",
        "Participated in meetings with class teachers to evaluate the development of the class",
        "Evaluated final exams",
      ],
    },
    {
      education: true,
      title: "Computer Engineering",
      company_name: "Polytechnic University of Milan",
      icon: polimi,
      iconBg: "#fff",
      date: "Sep 2021 - Present",
      points: [
        "Point 1",
        "Point 2",
        "Point 3",
        "Point 4",
        ],
    },
    {
      education: true,
      title: "Scientific High School",
      company_name: "I.S. Don Lorenzo Milani",
      icon: dlm,
      iconBg: "#fff",
      date: "Sep 2016 - Jul 2021",
      points: [
        "Point 1",
        "Point 2",
        "Point 3",
        "Point 4",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial: "Alberto’s defining quality is that he is always willing to do whatever is needed for the team and for the company",
      name: "Dassi Eliach",
      designation: "Mobile Team Manager",
      company: "Oddity", 
      image: "https://media.licdn.com/dms/image/C4D03AQEpR9ybF-wDqA/profile-displayphoto-shrink_400_400/0/1636396235671?e=1707350400&v=beta&t=vrFoh5uikBTZTZbUgjo10WnBGSQjuUwgb6ItzBFn3hM",
    },
    {
      testimonial:
        "He is among the few students who selected a MSc course as an elective course in their BSc study plans and I had the opportunity to appreciate his passion for computer science.",
      name: "Francesco Amigoni",
      designation: "Full Professor",
      company: "Politecnico di Milano",
      image: "https://media.licdn.com/dms/image/D4D03AQHcK5-5Uaa8HA/profile-displayphoto-shrink_400_400/0/1685527449949?e=1707350400&v=beta&t=0Xf0CDiOceEZGQ6C9TeazKjcXmgWZvL6tR0AqZxHcY4",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    }
  ];
  
  const projects = [
    {
      name: "Project 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget dui vel justo placerat tincidunt ac vitae libero. Mauris rutrum non turpis varius varius",
      tags: [
        {
          name: "tag 1",
          color: "blue-text-gradient",
        },
        {
          name: "tag 2",
          color: "green-text-gradient",
        },
        {
          name: "tag 3",
          color: "pink-text-gradient",
        },
      ],
      image: placeholder,
      source_code_link: "https://github.com/",
    },
    {
      name: "Project 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget dui vel justo placerat tincidunt ac vitae libero. Mauris rutrum non turpis varius varius",
      tags: [
        {
          name: "tag 1",
          color: "blue-text-gradient",
        },
        {
          name: "tag 2",
          color: "green-text-gradient",
        },
        {
          name: "tag 3",
          color: "pink-text-gradient",
        },
      ],
      image: placeholder,
      source_code_link: "https://github.com/",
    },
    {
      name: "Project 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget dui vel justo placerat tincidunt ac vitae libero. Mauris rutrum non turpis varius varius",
      tags: [
        {
          name: "tag 1",
          color: "blue-text-gradient",
        },
        {
          name: "tag 2",
          color: "green-text-gradient",
        },
        {
          name: "tag 3",
          color: "pink-text-gradient",
        },
      ],
      image: placeholder,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };