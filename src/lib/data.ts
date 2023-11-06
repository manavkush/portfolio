import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import slapdash from "@/public/slapdash.png";
import libmanage from "@/public/libmanage.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's Degree",
    company: "IIT Dharwad",
    location: "Dharwad, India",
    description:
      "Graduated with a degree in Computer Science and Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Full Stack Developer Intern",
    company: "Creatosaurus",
    location: "Pune, India (Remote)",
    description:
      "Implemented a full stack webapp which increased incoming traffic to the domain by implementing integrations with various social media sites like Facebook, Twitter, Instagram.",
    icon: React.createElement(CgWorkAlt),
    date: "June - August 2021",
  },
  {
    title: "Software Engineering Intern",
    company: "Emids Technologies",
    location: "Bangalore, India (Remote)",
    description:
      "Analyzed and worked with Azure FHIR Server, Apache Airflow for the client which allowed converting healthcare data through a pipeline removing the manual work.",
    icon: React.createElement(CgWorkAlt),
    date: "May - July 2022",
  },
  {
    title: "Software Engineer",
    company: "Amuse Labs",
    location: "Bangalore, India",
    description:
      "Analyzed and improved execution times for multiple database operations single-handedly. Resulted in a 20% decrease in turnaround time which in turn led to better user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Slapdash",
    description:
      "A realtime chat application which allows users to create multiple groups and chat with their friends.",
    tags: ["React", "Next.js", "WebSockets", "MySQL", "Tailwind", "Prisma"],
    imageUrl: slapdash,
  },
  {
    title: "Libmanage",
    description:
      "A library management app that me and my friends built for our college library. It allows issueing, returning, checking their status and also allows the librarian to manage the books.",
    tags: ["React", "NodeJs", "Express", "MongoDB"],
    imageUrl: libmanage,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Java",
  "Git",
  "SQL",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Tailwind",
] as const;
